// types
import { ChartData, ChartConfig, LineConfig, BarConfig } from './types/types';

// helpers
import { COLORS } from './helpers/constants';
import baseConfig from './helpers/baseConfig';

// data utils
import { resize } from './utils/data';
import { isValidColor, generateColor } from './utils/color';

// svg utils
import { createSVG } from './utils/svg';

export default class Graphique {
  parent: HTMLElement;
  data: ChartData;
  config: ChartConfig;
  lineConfig: LineConfig;
  barConfig: BarConfig;
  geometry: any;

  constructor(parent: HTMLElement, data: ChartData, config: ChartConfig) {
    this.parent = parent;
    this.config = Object.assign(baseConfig, config);
    this.lineConfig = this.config.lineConfig as LineConfig;
    this.barConfig = this.config.barConfig as BarConfig;

    this.data = this.validateData(data);
    this.geometry = this.buildMeasures();

    this.paint();
  }

  validateData(data: ChartData): ChartData {
    const totalDataPoints = data.labels.length;
    if (totalDataPoints === 0) {
      throw new Error('No labels found');
    }
    // Clone the array
    const colors = [...COLORS];

    data.datasets.forEach(dataItem => {
      if (!isValidColor(dataItem.color)) {
        dataItem.color = colors.pop() ?? generateColor(dataItem.name);
      }
      dataItem.values = resize(dataItem.values, totalDataPoints) as number[];
    });
    return data;
  }

  buildMeasures() {
    const rect = this.parent.getBoundingClientRect();

    let width;
    if (this.config.maxWidth && Number.isSafeInteger(this.config.maxWidth)) {
      width =
        rect.width > this.config.maxWidth ? this.config.maxWidth : rect.width;
    } else {
      width = rect.width;
    }

    const height = Math.round(width / 3);

    return {
      containerWidth: rect.width,
      containerHeight: rect.height,
      width: width,
      height: height,
      xOffset: width - 50,
      yOffset: height - 50,
    };
  }

  paint(): void {
    // const fragment = new DocumentFragment();
    const svgContainer = createSVG('svg', {
      width: this.geometry.width,
      height: this.geometry.height,
    });

    [11, 12, 13].forEach((a, index) => {
      svgContainer.appendChild(
        createSVG('rect', {
          x: index * 100,
          y: this.geometry.yOffset - 100 * (a / 15),
          width: 80,
          height: 100 * (a / 15),
          fill: generateColor('bebo'),
        })
      );
    });
    this.parent.append(svgContainer);
  }
}
