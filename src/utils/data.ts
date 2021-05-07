export function resize(arr: unknown[], newSize: number): unknown[] {
  if (newSize > arr.length) return arr;
  return [...arr].splice(0, newSize);
}

function roundTo(canidate: number, decimal: number): number {
  return Number(canidate.toFixed(decimal));
}

export function getNiceLabels(
  min: number,
  max: number,
  ticks: number
): number[] {
  if (min === 0 && max === 0) {
    return Array.from({ length: ticks }, (_, index) => index + 1);
  }

  const labels = [];
  const range = getNiceNumber(max - min, false);
  const tickSpacing = getNiceNumber(range / (ticks - 1), true);
  const graphMin = Math.floor(min / tickSpacing) * tickSpacing;
  const graphMax = Math.ceil(max / tickSpacing) * tickSpacing;

  // number of decimal digits to show
  const decimals = Math.max(-Math.floor(Math.log10(tickSpacing)), 0);

  for (
    let step = graphMin;
    step <= graphMax + tickSpacing / 2;
    step = step + tickSpacing
  ) {
    labels.push(roundTo(step, decimals));
  }

  return labels;
}

export function getNiceNumber(canidate: number, round: boolean): number {
  const exponent = Math.floor(Math.log10(canidate));
  const multiplicationFactor = Math.pow(10, exponent);
  const niceFraction = canidate / multiplicationFactor;

  if (round) {
    if (niceFraction < 1.5) {
      return multiplicationFactor;
    } else if (niceFraction < 3) {
      return 2 * multiplicationFactor;
    } else if (niceFraction < 7) {
      return 5 * multiplicationFactor;
    } else {
      return 10 * multiplicationFactor;
    }
  } else {
    if (niceFraction <= 1) {
      return multiplicationFactor;
    } else if (niceFraction <= 2) {
      return 2 * multiplicationFactor;
    } else if (niceFraction <= 5) {
      return 5 * multiplicationFactor;
    } else {
      return 10 * multiplicationFactor;
    }
  }
}
