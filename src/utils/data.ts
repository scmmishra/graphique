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

function getNormalizedIntervals(max: number, min = 0): number[] {
  let upperBound = Math.ceil(max);
  let lowerBound = Math.floor(min);
  let range = upperBound - lowerBound;

  let noOfParts = range;
  let partSize = 1;

  // To avoid too many partitions
  if (range > 5) {
    if (range % 2 !== 0) {
      upperBound++;
      // Recalc range
      range = upperBound - lowerBound;
    }
    noOfParts = range / 2;
    partSize = 2;
  }

  // Special case: 1 and 2
  if (range <= 2) {
    noOfParts = 4;
    partSize = range / noOfParts;
  }

  // Special case: 0
  if (range === 0) {
    noOfParts = 5;
    partSize = 1;
  }

  let intervals = [];
  for (var i = 0; i <= noOfParts; i++) {
    intervals.push(lowerBound + partSize * i);
  }
  return intervals;
}

export function bucket(values: number[]): number[] {
  const maxValue = Math.max(...values);
  const minValue = Math.min(...values);

  const maxValueParts = getNumberParts(maxValue);
  const exponentFactor = Math.pow(10, maxValueParts.exponent);
  const normalizedMin = minValue / exponentFactor;

  console.log(maxValueParts, exponentFactor, normalizedMin);

  const intervals = getNormalizedIntervals(
    maxValueParts.mantissa,
    normalizedMin > 0 ? 0 : normalizedMin
  );

  return intervals.map(val => {
    return val * exponentFactor;
  });
}
