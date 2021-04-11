export function resize(arr: unknown[], newSize: number): unknown[] {
  if (newSize > arr.length) return arr;
  return [...arr].splice(0, newSize);
}