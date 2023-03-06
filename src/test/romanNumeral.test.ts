import { suite, test, expect } from 'vitest';
import { convertToRoman } from '../romanNumeral'

suite('convertToRoman()', () => {
    test('converts 1 to "I"', () => {
        const result = convertToRoman(1);
        expect(result).toBe('I');//cc
    });
    test('converts 2 to "II"', () => {
        const result = convertToRoman(2);
        expect(result).toBe('II');//cc
    });
    test('converts 3 to "III"', () => {
        const result = convertToRoman(3);
        expect(result).toBe('III');
    });


});