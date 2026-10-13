import { describe, expect, it } from 'vitest';
import { portfolio } from '@/data/portfolio';

describe('Supplied portfolio facts', () => {
  it('keeps expected graduation at 2030', () => {
    expect(portfolio.education.graduation).toBe(2030);
  });
  it('keeps the supplied Class 10 result', () => {
    expect(portfolio.education.class10).toBe(85.20);
  });
  it('keeps the supplied Class 12 result', () => {
    expect(portfolio.education.class12).toBe(77);
  });
  it('does not invent completed projects', () => {
    expect(portfolio.projects).toEqual([]);
  });
  it('limits claimed skills to those provided', () => {
    expect(portfolio.skills.flatMap(category => category.items)).toEqual(['C', 'Arduino Uno', 'ESP32', 'Communication']);
  });
});