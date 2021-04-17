import { resize, getNumberParts } from '../../src/utils/data';

describe('[[ Resize Array ]]', () => {
  it('Resizes To Smaller Length', () => {
    const candidate = Array.from({ length: 100 }, () => Math.random());
    expect(resize(candidate, 80).length).toBe(80);
    expect(resize(candidate, 70).length).toBe(70);
  });
  it('Resizes To Zero', () => {
    const candidate = Array.from({ length: 100 }, () => Math.random());
    expect(resize(candidate, 0).length).toBe(0);
  });
  it('Resizes To Same Length', () => {
    const candidate = Array.from({ length: 100 }, () => Math.random());
    expect(resize(candidate, 100).length).toBe(100);
  });
  it('Does Not Resize To Larger Length', () => {
    const candidate = Array.from({ length: 100 }, () => Math.random());
    expect(resize(candidate, 110).length).toBe(100);
  });
});

describe('[[ Get Number Parts ]]', () => {
  it('Gets correct values for standard values', () => {
    const numbers = [1, -1, 1.5, -1.5, 1e100, -1e100, 1e-100, -1e-100];
    numbers.forEach(candidate => {
      const parts = getNumberParts(candidate);
      expect(
        parts.sign * Math.pow(10, parts.exponent) * parts.mantissa
      ).toStrictEqual(candidate);
    });
  });
  it('Gets correct values for 0, NaN and Infinty', () => {
    const numbers = [0, NaN, Infinity, -Infinity];
    numbers.forEach(candidate => {
      const parts = getNumberParts(candidate);
      expect(
        parts.sign * Math.pow(10, parts.exponent) * parts.mantissa
      ).toStrictEqual(candidate);
    });
  });
  it('Gets correct values for random array', () => {
    const numbers = Array.from({ length: 100 }, () =>
      Math.floor(Math.random() * 1000)
    );

    numbers.forEach(candidate => {
      const parts = getNumberParts(candidate);
      expect(
        Math.round(parts.sign * Math.pow(10, parts.exponent) * parts.mantissa)
      ).toStrictEqual(candidate);
    });
  });
});
