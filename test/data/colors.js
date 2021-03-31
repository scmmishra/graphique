const webSafeColors = [
  'IndianRed',
  'LightCoral',
  'Salmon',
  'DarkSalmon',
  'LightSalmon',
  'Crimson',
  'Red',
  'FireBrick',
  'DarkRed',
  'Pink',
  'LightPink',
  'HotPink',
  'DeepPink',
  'MediumVioletRed',
  'PaleVioletRed',
  'LightSalmon',
  'Coral',
  'Tomato',
  'OrangeRed',
  'DarkOrange',
  'Orange',
  'Gold',
  'Yellow',
  'LightYellow',
  'LemonChiffon',
  'LightGoldenrodYellow',
  'PapayaWhip',
  'Moccasin',
  'PeachPuff',
  'PaleGoldenrod',
  'Khaki',
  'DarkKhaki',
  'Lavender',
  'Thistle',
  'Plum',
  'Violet',
  'Orchid',
  'Fuchsia',
  'Magenta',
  'MediumOrchid',
  'MediumPurple',
  'RebeccaPurple',
  'BlueViolet',
  'DarkViolet',
  'DarkOrchid',
  'DarkMagenta',
  'Purple',
  'Indigo',
  'SlateBlue',
  'DarkSlateBlue',
  'MediumSlateBlue',
  'GreenYellow',
  'Chartreuse',
  'LawnGreen',
  'Lime',
  'LimeGreen',
  'PaleGreen',
  'LightGreen',
  'MediumSpringGreen',
  'SpringGreen',
  'MediumSeaGreen',
  'SeaGreen',
  'ForestGreen',
  'Green',
  'DarkGreen',
  'YellowGreen',
  'OliveDrab',
  'Olive',
  'DarkOliveGreen',
  'MediumAquamarine',
  'DarkSeaGreen',
  'LightSeaGreen',
  'DarkCyan',
  'Teal',
  'Aqua',
  'Cyan',
  'LightCyan',
  'PaleTurquoise',
  'Aquamarine',
  'Turquoise',
  'MediumTurquoise',
  'DarkTurquoise',
  'CadetBlue',
  'SteelBlue',
  'LightSteelBlue',
  'PowderBlue',
  'LightBlue',
  'SkyBlue',
  'LightSkyBlue',
  'DeepSkyBlue',
  'DodgerBlue',
  'CornflowerBlue',
  'MediumSlateBlue',
  'RoyalBlue',
  'Blue',
  'MediumBlue',
  'DarkBlue',
  'Navy',
  'MidnightBlue',
  'Cornsilk',
  'BlanchedAlmond',
  'Bisque',
  'NavajoWhite',
  'Wheat',
  'BurlyWood',
  'Tan',
  'RosyBrown',
  'SandyBrown',
  'Goldenrod',
  'DarkGoldenrod',
  'Peru',
  'Chocolate',
  'SaddleBrown',
  'Sienna',
  'Brown',
  'Maroon',
  'White',
  'Snow',
  'HoneyDew',
  'MintCream',
  'Azure',
  'AliceBlue',
  'GhostWhite',
  'WhiteSmoke',
  'SeaShell',
  'Beige',
  'OldLace',
  'FloralWhite',
  'Ivory',
  'AntiqueWhite',
  'Linen',
  'LavenderBlush',
  'MistyRose',
  'Gainsboro',
  'LightGray',
  'Silver',
  'DarkGray',
  'Gray',
  'DimGray',
  'LightSlateGray',
  'SlateGray',
  'DarkSlateGray',
  'Black',
];

const hexColors = [
  // Black and White
  '#FFFFFF',
  '#000000',

  // Colors
  '#F8FAFC',
  '#F1F5F9',
  '#E2E8F0',
  '#CBD5E1',
  '#94A3B8',
  '#64748B',
  '#475569',
  '#334155',
  '#1E293B',
  '#0F172A',
  '#F9FAFB',

  // Black and White + Alpha
  '#FFFFFFFF',
  '#FFFFFF00',
  '#000000FF',
  '#00000000',

  // Colors + Alpha
  '#F8FAFC77',
  '#F1F5F977',
  '#E2E8F077',
  '#CBD5E177',
  '#94A3B877',
  '#64748B77',
  '#47556977',
  '#33415577',
  '#1E293B77',
  '#0F172A77',
  '#F9FAFB77',
];

const rgbaColor = [
  // Black and White
  'rgb(0,0,0)',
  'rgb(255,255,255)',

  'rgb(248,250,252)',
  'rgb(241,245,249)',
  'rgb(226,232,240)',
  'rgb(203,213,225)',
  'rgb(148,163,184)',
  'rgb(100,116,139)',
  'rgb(71,85,105)',
  'rgb(51,65,85)',
  'rgb(30,41,59)',
  'rgb(15,23,42)',
  'rgb(249,250,251)',
  'rgb(255,255,255)',
  'rgb(255,255,255)',

  'rgba(0,0,0,1)',
  'rgba(0,0,0,0)',
  'rgba(255,255,255,1)',
  'rgba(255,255,255,0)',

  'rgba(248,250,252,1)',
  'rgba(241,245,249,1)',
  'rgba(226,232,240,1)',
  'rgba(203,213,225,1)',
  'rgba(148,163,184,1)',
  'rgba(100,116,139,1)',
  'rgba(71,85,105,1)',
  'rgba(51,65,85,1)',
  'rgba(30,41,59,1)',
  'rgba(15,23,42,1)',
  'rgba(249,250,251,1)',
];

const hslaColors = [
  'hsl(0,0%,100%)',
  'hsl(0,0%,0%)',
  'hsl(210,40%,98%)',
  'hsl(210,40%,96.1%)',
  'hsl(214,31.8%,91.4%)',
  'hsl(213,26.8%,83.9%)',
  'hsl(215,20.2%,65.1%)',
  'hsl(215,16.3%,46.9%)',
  'hsl(215,19.3%,34.5%)',
  'hsl(215,25%,26.7%)',
  'hsl(217,32.6%,17.5%)',
  'hsl(222,47.4%,11.2%)',
  'hsl(210,20%,98%)',

  'hsla(0,0%,100%, 0)',
  'hsla(0,0%,0%, 1)',
  'hsla(210,40%,98%, 0.33)',
  'hsla(210,40%,96.1%, 0.33)',
  'hsla(214,31.8%,91.4%, 0.33)',
  'hsla(213,26.8%,83.9%, 0.33)',
  'hsla(215,20.2%,65.1%, 0.33)',
  'hsla(215,16.3%,46.9%, 0.33)',
  'hsla(215,19.3%,34.5%, 0.33)',
  'hsla(215,25%,26.7%, 0.33)',
  'hsla(217,32.6%,17.5%, 0.33)',
  'hsla(222,47.4%,11.2%, 0.33)',
  'hsla(210,20%,98%, 0.33)',
];

const wrongColors = [
  '',
  '--------',
  '@@@@@@@@',
  'graphical',
  'VQVpQC',
  'XTQF19',
  '9UhbCS',
  'bCJZ1i',
  '7SPKv5',
  'geaNfI',
  'Qeu7dW',
  '5a2IuF',
  'ds72AJ',
  'UhPyLv',
];

export { webSafeColors, hexColors, rgbaColor, hslaColors, wrongColors };
