import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { calculateCreatedAt } from './calculateCreatedAt';

// Вспомогательная функция для создания ISO-строки в прошлом
const getPastDate = (msAgo: number) => new Date(Date.now() - msAgo).toISOString();

describe('calculateCreatedAt', () => {
    const mockNow = new Date('2025-10-16T12:00:00.000Z');

    beforeEach(() => {
        vi.useFakeTimers();
        vi.setSystemTime(mockNow);
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('returns "just now" for dates within the last few seconds', () => {
        const iso = getPastDate(5 * 1000); // 5 секунд назад
        expect(calculateCreatedAt(iso)).toBe('Created just now');
    });

    it('returns minutes correctly', () => {
        const iso = getPastDate(5 * 60 * 1000); // 5 минут назад
        expect(calculateCreatedAt(iso)).toBe('Created 5 minutes ago');
    });

    it('returns hours correctly', () => {
        const iso = getPastDate(3 * 60 * 60 * 1000); // 3 часа назад
        expect(calculateCreatedAt(iso)).toBe('Created 3 hours ago');
    });

    it('returns 1 hour (singular) correctly', () => {
        const iso = getPastDate(1 * 60 * 60 * 1000); // 1 час назад
        expect(calculateCreatedAt(iso)).toBe('Created 1 hour ago');
    });

    it('returns days correctly', () => {
        const iso = getPastDate(2 * 24 * 60 * 60 * 1000); // 2 дня назад
        expect(calculateCreatedAt(iso)).toBe('Created 2 days ago');
    });

    it('returns months correctly (approx 30 days)', () => {
        const iso = getPastDate(3 * 30 * 24 * 60 * 60 * 1000); // 3 месяца назад
        expect(calculateCreatedAt(iso)).toBe('Created 3 months ago');
    });

    it('returns years correctly (approx 365 days)', () => {
        const iso = getPastDate(2 * 365 * 24 * 60 * 60 * 1000); // 2 года назад
        expect(calculateCreatedAt(iso)).toBe('Created 2 years ago');
    });

    it('handles exactly 1 day correctly', () => {
        const iso = getPastDate(1 * 24 * 60 * 60 * 1000); // 1 день назад
        expect(calculateCreatedAt(iso)).toBe('Created 1 day ago');
    });

    it('handles exactly 1 month correctly', () => {
        const iso = getPastDate(30 * 24 * 60 * 60 * 1000); // 1 месяц назад
        expect(calculateCreatedAt(iso)).toBe('Created 1 month ago');
    });

    it('handles exactly 1 year correctly', () => {
        const iso = getPastDate(365 * 24 * 60 * 60 * 1000); // 1 год назад
        expect(calculateCreatedAt(iso)).toBe('Created 1 year ago');
    });
});
