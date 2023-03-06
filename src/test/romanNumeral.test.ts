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
    test('converts 4 to "IV"', () => {
        const result = convertToRoman(4);
        expect(result).toBe('IV');
    });
    test('converts 5 to "V"', () => {
        const result = convertToRoman(5);
        expect(result).toBe('V');
    });
    test('converts 6 to "VI"', () => {
        const result = convertToRoman(6);
        expect(result).toBe('VI');
    });
    test('converts 7 to "VII"', () => {
        const result = convertToRoman(7);
        expect(result).toBe('VII');
    });
    test('converts 8 to "VIII"', () => {
        const result = convertToRoman(8);
        expect(result).toBe('VIII');
    });
    test('converts 9 to "IX"', () => {
        const result = convertToRoman(9);
        expect(result).toBe('IX');
    });
    test('converts 10 to "X"', () => {
        const result = convertToRoman(10);
        expect(result).toBe('X');
    });
    test('converts 11 to "XI"', () => {
        const result = convertToRoman(11);
        expect(result).toBe('XI');
    });
    test('converts 12 to "XII"', () => {
        const result = convertToRoman(12);
        expect(result).toBe('XII');
    });
    test('converts 13 to "XIII"', () => {
        const result = convertToRoman(13);
        expect(result).toBe('XIII');
    });
    test('converts 14 to "XIV"', () => {
        const result = convertToRoman(14);
        expect(result).toBe('XIV');
    });
    test('converts 15 to "XV"', () => {
        const result = convertToRoman(15);
        expect(result).toBe('XV');
    });
    test('converts 16 to "XVI"', () => {
        const result = convertToRoman(16);
        expect(result).toBe('XVI');
    });
    test('converts 17 to "XVII"', () => {
        const result = convertToRoman(17);
        expect(result).toBe('XVII');
    });
    test('converts 18 to "XVIII"', () => {
        const result = convertToRoman(18);
        expect(result).toBe('XVIII');
    });
    test('converts 19 to "XIX"', () => {
        const result = convertToRoman(19);
        expect(result).toBe('XIX');
    });
    test('converts 20 to "XX"', () => {
        const result = convertToRoman(20);
        expect(result).toBe('XX');
    });
    test('converts 21 to "XXI"', () => {
        const result = convertToRoman(21);
        expect(result).toBe('XXI');
    });
    test('converts 22 to "XXII"', () => {
        const result = convertToRoman(22);
        expect(result).toBe('XXII');
    });
    test('converts 23 to "XXIII"', () => {
        const result = convertToRoman(23);
        expect(result).toBe('XXIII');
    });
    test('converts 24 to "XXIV"', () => {
        const result = convertToRoman(24);
        expect(result).toBe('XXIV');
    });
    test('converts 25 to "XXV"', () => {
        const result = convertToRoman(25);
        expect(result).toBe('XXV');
    });
    test('converts 26 to "XXVI"', () => {
        const result = convertToRoman(26);
        expect(result).toBe('XXVI');
    });
    test('converts 27 to "XXVII"', () => {
        const result = convertToRoman(27);
        expect(result).toBe('XXVII');
    });
    test('converts 28 to "XXVIII"', () => {
        const result = convertToRoman(28);
        expect(result).toBe('XXVIII');
    });
});