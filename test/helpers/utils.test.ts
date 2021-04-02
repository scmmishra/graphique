import { isValidColor, generateColor, resize } from '../../src/helpers/utils';
import {
  webSafeColors,
  hexColors,
  rgbaColor,
  hslaColors,
  wrongColors,
} from '../data/colors';

describe('[[ Color Validation ]]', () => {
  it('Allows Web Safe colors', () => {
    webSafeColors.forEach((color) => {
      expect(isValidColor(color)).toBeTruthy();
    });
  });
  it('Allows HEX Colors', () => {
    hexColors.forEach((color) => {
      expect(isValidColor(color)).toBeTruthy();
    });
  });
  it('Allows RGBA Colors', () => {
    rgbaColor.forEach((color) => {
      expect(isValidColor(color)).toBeTruthy();
    });
  });
  it('Allows HSLA Colors', () => {
    hslaColors.forEach((color) => {
      expect(isValidColor(color)).toBeTruthy();
    });
  });
  it('Returns False on Wrong Colors', () => {
    wrongColors.forEach((color) => {
      expect(isValidColor(color)).toBeFalsy();
    });
  });
});

describe('[[ Color Generation ]]', () => {
  it('Always Generates Correct Colors', () => {
    Array.from({ length: 100 }, () =>
      Math.random().toString(16).substr(2, 8)
    ).forEach((num) => {
      const color = generateColor(num);
      expect(isValidColor(color)).toBeTruthy();
    });
  });
});

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
