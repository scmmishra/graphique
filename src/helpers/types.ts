export type Maybe<T> = T | null;

// Chart Dataset
export enum ChartTypes {
  BAR = 'bar',
  LINE = 'line',
}

export type DataItem = {
  values: Array<number>;
  name: string;
  color: string;
  type: ChartTypes;
};

export type ChartData = {
  labels: Array<string>;
  dataset: Array<DataItem>;
};

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

export type LineConfig = {
  fill?: Maybe<FillOptions>;
  dot?: Maybe<DotOptions>;
  dotSize?: Maybe<number>;
  spline?: boolean;
};

export type BarConfig = {
  spaceRatio?: Number;
};

export type ChartConfig = {
  showLegend: boolean;
  showTooltip: boolean;
  showXAxis: boolean;
  showYAxis: boolean;
  animate: boolean;
  lineConfig?: LineConfig;
  barConfig?: BarConfig;
};
