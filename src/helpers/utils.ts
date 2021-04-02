export function isValidColor(stringToTest: string): boolean {
  if (stringToTest === '') return false;
  const image = document.createElement('div');
  image.style.color = 'rgb(0, 0, 0)';
  image.style.color = stringToTest;
  // check not black
  if (image.style.color !== 'rgb(0, 0, 0)') {
    return true;
  }
  image.style.color = 'rgb(255, 255, 255)';
  image.style.color = stringToTest;
  // check not white
  return image.style.color !== 'rgb(255, 255, 255)';
}

export function resize(arr: unknown[], newSize: number): unknown[] {
  if (newSize > arr.length) return arr;
  return [...arr].splice(0, newSize);
}

export function generateColor(candidate: string): string {
  let hash = 0;
  for (let i = 0; i < candidate.length; i++) {
    hash = candidate.charCodeAt(i) + ((hash << 5) - hash);
  }
  const token = (hash & 0x00ffffff).toString(16).toUpperCase();
  return `#${'00000'.substring(0, 6 - token.length) + token}`;
}
