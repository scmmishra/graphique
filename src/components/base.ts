export default class Base {
  opts: unknown;
  appendTo: SVGElement;
  constructor(appendTo: SVGElement, opts: unknown) {
    this.opts = opts;
    this.appendTo = appendTo;
    this.setup();
    this.render();
  }
  setup(): void {}
  refresh(): void {}
  render(): void {}
  update(): void {}
  makeElement(): void {}
  animateElement(): void {}
}
