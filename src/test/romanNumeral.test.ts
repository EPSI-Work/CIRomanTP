import { suite, test, expect } from 'vitest';
import { convertToRoman } from '../romanNumeral'

suite('convertToRoman()', () => {
    test('converts 1 to "I"', () => {
        const result = convertToRoman(1);
        expect(result).toBe('I');
    });
    test('converts 2 to "II"', () => {
        const result = convertToRoman(2);
        expect(result).toBe('II');
    });



    test('converts 1 to "I"', () => {
        const result = convertToRoman(1);
        expect(result).toBe('I');//cc
    });


});