import { redis } from '@bounty/realtime';

interface RateLimiterOptions {
  name: string;
  failureThreshold: number;
  resetTimeout: number;
  failureWindow: number;
  successThreshold: number;
}

class RateLimiter {
  private name: string;
  private failureThreshold: number;
  private resetTimeout: number;
  private failureWindow: number;
  private successThreshold: number;

  constructor(options: RateLimiterOptions) {
    this.name = options.name;
    this.failureThreshold = options.failureThreshold;
    this.resetTimeout = options.resetTimeout;
    this.failureWindow = options.failureWindow;
    this.successThreshold = options.successThreshold;
  }

  async getRateLimit(): Promise<RateLimitResult> {
    const key = createRateLimitKey(this.name);
    const rateLimit = await redis.get(key);
    if (!rateLimit) {
      return { limit: this.failureThreshold, remaining: this.failureThreshold };
    }
    const rateLimitData = JSON.parse(rateLimit);
    const now = Date.now();
    if (now - rateLimitData.timestamp < this.resetTimeout * 1000) {
      return {
        limit: this.failureThreshold,
        remaining: this.failureThreshold - rateLimitData.count,
      };
    }
    if (rateLimitData.count >= this.failureThreshold) {
      return { limit: this.successThreshold, remaining: this.successThreshold };
    }
    return { limit: this.failureThreshold, remaining: this.failureThreshold - rateLimitData.count };
  }

  async checkRateLimit(): Promise<RateLimitResult> {
    const rateLimit = await this.getRateLimit();
    if (rateLimit.remaining > 0) {
      return rateLimit;
    }
    await this.incrementRateLimit();
    return this.getRateLimit();
  }

  async incrementRateLimit(): Promise<void> {
    const key = createRateLimitKey(this.name);
    const rateLimit = await redis.get(key);
    if (rateLimit) {
      const rateLimitData = JSON.parse(rateLimit);
      await redis.set(key, JSON.stringify({
        timestamp: Date.now(),
        count: rateLimitData.count + 1,
      }));
    } else {
      await redis.set(key, JSON.stringify({
        timestamp: Date.now(),
        count: 1,
      }));
    }
  }
}

export { RateLimiter, getRateLimiter, checkRateLimit, createRateLimitKey, type RateLimitResult, type RateLimitOperation };