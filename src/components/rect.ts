import Base from './base';

export default class Rect extends Base {
  constructor(appendTo: SVGElement, opts: unknown) {
    super(appendTo, opts);
  }
  setup(): void {}
  refresh(): void {}
  render(): void {}
  update(): void {}
  makeElement(): void {}
  animateElement(): void {}
}
