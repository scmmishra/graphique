import { resize } from '../../src/utils/data';

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