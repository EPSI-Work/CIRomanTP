import { suite, test, expect } from 'vitest';
import { convertToRoman } from '../romanNumeral'

suite('convertToRoman()', () => {


    test('converts 1 to "I"', () => {
        const result = convertToRoman(1);
        expect(result).toBe('I');//cc
    });


});