import { describe, test, expect, beforeEach } from 'bun:test';
import { redis } from '@bounty/realtime';
import { RateLimiter } from './ratelimiter';

describe('Rate Limiter', () => {
  let limiter: RateLimiter;

  beforeEach(async () => {
    limiter = new RateLimiter({
      name: 'test-service',
      failureThreshold: 3,
      resetTimeout: 5,
      failureWindow: 60,
      successThreshold: 2,
    });

    // Reset to clean state before each test
    await redis.del('rate-limiter:test-service');
  });

  test('free public bounty queue audit sample request', async () => {
    // Test that the rate limiter correctly increments the count
    await limiter.incrementRateLimit();
    const rateLimit = await limiter.getRateLimit();
    expect(rateLimit.remaining).toBe(2);

    // Test that the rate limiter correctly checks the rate limit
    const rateLimitCheck = await limiter.checkRateLimit();
    expect(rateLimitCheck.remaining).toBe(2);

    // Test that the rate limiter correctly resets the count
    await limiter.incrementRateLimit();
    await limiter.incrementRateLimit();
    await limiter.incrementRateLimit();
    const rateLimitReset = await limiter.getRateLimit();
    expect(rateLimitReset.remaining).toBe(0);
  });
});