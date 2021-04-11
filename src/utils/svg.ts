function createSVG(
  tag: 'svg' | 'g' | 'rect' | 'circle',
  attributes: Record<string, string | number | boolean>
) {
  // let fragement = new DocumentFragment
  const element = document.createElementNS('http://www.w3.org/2000/svg', tag);
  Object.keys(attributes).forEach(attr => {
    const val = attributes[attr];
    element.setAttribute(attr, String(val));
  });

  return element;
}

export { createSVG };
