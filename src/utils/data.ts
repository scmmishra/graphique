export function resize(arr: unknown[], newSize: number): unknown[] {
  if (newSize > arr.length) return arr;
  return [...arr].splice(0, newSize);
}

interface NumberParts {
  sign: -1 | 1;
  mantissa: number;
  exponent: number;
}

export function getNumberParts(candidate: number): NumberParts {
  const absolute = Math.abs(candidate);
  const parts = (absolute.toExponential() + '').split('e');

  const sign = candidate >= 0 ? 1 : -1;
  const mantissa = parseFloat(parts[0]);
  // const exponent = parseInt(parts[1]);
  const exponent = (() => {
    const exp = parseInt(parts[1]);
    return isNaN(exp) ? 0 : exp;
  })();

  return { sign, mantissa, exponent };
}
