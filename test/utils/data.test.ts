import { resize, getNiceLabels, getNiceNumber } from '../../src/utils/data';
import pairs from '../data/labelPairs';

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

describe('[[ Nice Number ]]', () => {
  it('Generates for Control Set', () => {
    const numberPairs = [
      { num: 1, rounedVal: 1, val: 1 },
      { num: 2, rounedVal: 2, val: 2 },
      { num: 3, rounedVal: 5, val: 5 },
      { num: 4, rounedVal: 5, val: 5 },
      { num: 5, rounedVal: 5, val: 5 },
      { num: 6, rounedVal: 5, val: 10 },
      { num: 7, rounedVal: 10, val: 10 },
      { num: 8, rounedVal: 10, val: 10 },
      { num: 9, rounedVal: 10, val: 10 },
      { num: 10, rounedVal: 10, val: 10 },
    ];
    numberPairs.forEach(pair => {
      expect(getNiceNumber(pair.num, false)).toEqual(pair.val);
      expect(getNiceNumber(pair.num, true)).toEqual(pair.rounedVal);
    });
  });
  it('Generates Valid Labels', () => {
    const valuePairs = Array.from({ length: 100 }, () => Math.random() * 100);
    [true, false].forEach(round => {
      valuePairs.forEach(value => {
        const exponent = Math.floor(Math.log10(value));
        const niceNumber = getNiceNumber(value, round) / Math.pow(10, exponent);

        expect(niceNumber).toBeGreaterThanOrEqual(0);
        expect(niceNumber).toBeLessThanOrEqual(10);
        expect([0, 1, 2, 5, 10]).toContain(niceNumber);
      });
    });
  });
});

describe('[[ Nice Labels ]]', () => {
  it('Generates for Control Set', () => {
    pairs.forEach(pair => {
      const labels = getNiceLabels(pair.min, pair.max, pair.ticks);
      expect(labels).toEqual(pair.output);
    });
  });
  it('Generates Valid Labels', () => {
    const valuePairs = Array.from({ length: 100 }, () => {
      return {
        min: Math.random() * 200 - 100,
        max: Math.random() * 200 - 100,
      };
    });

    valuePairs.forEach(pair => {
      [4, 8, 12].forEach(tick => {
        const localMin = Math.min(pair.min, pair.max);
        const localMax = Math.max(pair.min, pair.max);
        const labels = getNiceLabels(localMin, localMax, tick);
        expect(localMin).toBeGreaterThanOrEqual(Math.min(...labels));
        expect(localMax).toBeLessThanOrEqual(Math.max(...labels));
        expect(labels.length).toBeLessThanOrEqual(tick + tick / 2);
        expect(labels.length).toBeGreaterThanOrEqual(2);
      });
    });
  });
});
