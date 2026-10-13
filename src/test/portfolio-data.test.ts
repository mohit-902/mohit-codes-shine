import { describe, expect, it } from 'vitest';
import { portfolio, gmailComposeUrl } from '@/data/portfolio';

describe('Supplied portfolio facts', () => {
  it('addresses Gmail compose to the supplied email', () => {
    const url = new URL(gmailComposeUrl);
    expect(url.origin).toBe('https://mail.google.com');
    expect(url.searchParams.get('view')).toBe('cm');
    expect(url.searchParams.get('to')).toBe('mohitrajpurohit460@gmail.com');
  });
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