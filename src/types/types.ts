/* istanbul ignore file */

export type Maybe<T> = T | null;

// Chart Dataset
export enum ChartTypes {
  BAR = 'bar',
  LINE = 'line',
}

export interface DataSetItem {
  values: number[];
  name: string;
  color: string;
}

export interface ChartData {
  labels: string[];
  datasets: DataSetItem[];
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

export interface ChartOptions {
  showLegend?: Maybe<boolean>;
  showTooltip?: Maybe<boolean>;
  showXAxis?: Maybe<boolean>;
  showYAxis?: Maybe<boolean>;
  animate?: Maybe<boolean>;
  maxWidth?: Maybe<number>;
  lineConfig?: LineConfig;
  barConfig?: BarConfig;
}

export interface ChartConfig {
  type: ChartTypes;
  data: ChartData;
  options: ChartOptions;
}

export interface Geometry {
  containerWidth: number;
  containerHeight: number;
  width: number;
  height: number;
  xOffset: number;
  yOffset: number;
}
