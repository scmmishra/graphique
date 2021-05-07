/* istanbul ignore file */

import { ChartConfig, FillOptions, DotOptions } from '../types/types';

const baseConfig: ChartConfig = {
  showLegend: true,
  showTooltip: true,
  showXAxis: true,
  showYAxis: true,
  animate: true,
  lineConfig: {
    fill: FillOptions.NO_FILL,
    dot: DotOptions.NO_DOT,
    dotSize: 4,
    spline: false,
  },
  barConfig: {
    spaceRatio: 0.5,
  },
  maxWidth: null,
};

export default baseConfig;
