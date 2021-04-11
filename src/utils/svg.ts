export function createSVG(tag, o) {
  var element = document.createElementNS('http://www.w3.org/2000/svg', tag);

  for (var i in o) {
    var val = o[i];

    if (i === 'inside') {
      $(val).appendChild(element);
    } else if (i === 'around') {
      var ref = $(val);
      ref.parentNode.insertBefore(element, ref);
      element.appendChild(ref);
    } else if (i === 'styles') {
      if (typeof val === 'object') {
        Object.keys(val).map((prop) => {
          element.style[prop] = val[prop];
        });
      }
    } else {
      if (i === 'className') {
        i = 'class';
      }
      if (i === 'innerHTML') {
        element['textContent'] = val;
      } else {
        element.setAttribute(i, val);
      }
    }
  }

  return element;
}
