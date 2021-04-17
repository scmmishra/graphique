import { isValidColor, generateColor } from '../../src/utils/color';
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
