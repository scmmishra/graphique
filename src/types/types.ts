/* istanbul ignore file */

export type Maybe<T> = T | null;

// Chart Dataset
export enum ChartTypes {
  BAR = 'bar',
  LINE = 'line',
}

export interface DataItem {
  values: number[];
  name: string;
  color: string;
  type: ChartTypes;
}

export interface ChartData {
  labels: string[];
  datasets: DataItem[];
}

// Chart Config
export enum FillOptions {
  GRADIENT = 'gradient',
  SOLID = 'solid',
  NO_FILL = 'noFill',
}

export enum DotOptions {
  CIRCLE = 'circle',
  SQUARE = 'square',
  DIAMOND = 'diamond',
  NO_DOT = 'noDot',
}

export interface LineConfig {
  fill?: Maybe<FillOptions>;
  dot?: Maybe<DotOptions>;
  dotSize?: Maybe<number>;
  spline?: boolean;
}

export interface BarConfig {
  spaceRatio?: number;
}

export interface ChartConfig {
  showLegend: boolean;
  showTooltip: boolean;
  showXAxis: boolean;
  showYAxis: boolean;
  animate: boolean;
  lineConfig?: LineConfig;
  barConfig?: BarConfig;
}
