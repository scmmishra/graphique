import { ChartData, ChartConfig, LineConfig, BarConfig } from './types/types';
import baseConfig from './helpers/baseConfig';
import { isValidColor, generateColor, resize } from './helpers/utils';
import { COLORS } from './helpers/constants';

export default class Graphique {
  parent: HTMLElement;
  data: ChartData;
  config: ChartConfig;
  lineConfig: LineConfig;
  barConfig: BarConfig;

  constructor(parent: HTMLElement, data: ChartData, config: ChartConfig) {
    this.parent = parent;
    this.data = this.validateData(data);
    this.config = Object.assign(baseConfig, config);
    this.lineConfig = this.config.lineConfig as LineConfig;
    this.barConfig = this.config.barConfig as BarConfig;
  }

  validateData(data: ChartData): ChartData {
    const totalDataPoints = data.labels.length;
    if (totalDataPoints == 0) {
      throw 'No labels found';
    }
    // Clone the array
    const colors = [...COLORS];

    data.datasets.forEach(dataItem => {
      if (!isValidColor(dataItem.color)) {
        dataItem.color = colors.pop() ?? generateColor(dataItem.name);
      }
      dataItem.values = resize(dataItem.values, totalDataPoints);
    });
    return data;
  }
}
