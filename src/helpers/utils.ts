export function validateColor(stringToTest: string) {
  var image = document.createElement('div');
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

export function resize(arr: Array<unknown>, newSize: number) {
  return [...arr, ...Array(Math.max(newSize - arr.length, 0)).fill(0)].splice(
    0,
    newSize
  );
}

export function generateColor(candidate: string): string {
  let hash = 0;
  for (var i = 0; i < candidate.length; i++) {
    hash = candidate.charCodeAt(i) + ((hash << 5) - hash);
  }
  const token = (hash & 0x00ffffff).toString(16).toUpperCase();
  return `#${'00000'.substring(0, 6 - token.length) + token}`;
}
