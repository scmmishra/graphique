export default [
  { min: 0, max: 0, ticks: 4, output: [1, 2, 3, 4] },
  { min: 0, max: 0, ticks: 8, output: [1, 2, 3, 4, 5, 6, 7, 8] },
  {
    min: 0,
    max: 0,
    ticks: 12,
    output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },

  { min: 0, max: 100, ticks: 4, output: [0, 50, 100] },
  {
    min: 0,
    max: 100,
    ticks: 8,
    output: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  },
  {
    min: 0,
    max: 100,
    ticks: 12,
    output: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  },
  { min: -100, max: 0, ticks: 4, output: [-100, -50, 0] },
  {
    min: -100,
    max: 0,
    ticks: 8,
    output: [-100, -90, -80, -70, -60, -50, -40, -30, -20, -10, 0],
  },
  {
    min: -100,
    max: 0,
    ticks: 12,
    output: [-100, -90, -80, -70, -60, -50, -40, -30, -20, -10, 0],
  },
  { min: -120, max: 240, ticks: 4, output: [-200, 0, 200, 400] },
  {
    min: -120,
    max: 240,
    ticks: 8,
    output: [-200, -100, 0, 100, 200, 300],
  },
  {
    min: -120,
    max: 240,
    ticks: 12,
    output: [-150, -100, -50, 0, 50, 100, 150, 200, 250],
  },
  { min: 500, max: 1000, ticks: 4, output: [400, 600, 800, 1000] },
  {
    min: 500,
    max: 1000,
    ticks: 8,
    output: [500, 600, 700, 800, 900, 1000],
  },
  {
    min: 500,
    max: 1000,
    ticks: 12,
    output: [500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000],
  },
  {
    min: -1000,
    max: -500,
    ticks: 4,
    output: [-1000, -800, -600, -400],
  },
  {
    min: -1000,
    max: -500,
    ticks: 8,
    output: [-1000, -900, -800, -700, -600, -500],
  },
  {
    min: -1000,
    max: -500,
    ticks: 12,
    output: [-1000, -950, -900, -850, -800, -750, -700, -650, -600, -550, -500],
  },
  { min: -0.1, max: 1, ticks: 4, output: [-0.5, 0, 0.5, 1] },
  {
    min: -0.1,
    max: 1,
    ticks: 8,
    output: [-0.2, 0, 0.2, 0.4, 0.6, 0.8, 1],
  },
  {
    min: -0.1,
    max: 1,
    ticks: 12,
    output: [-0.2, 0, 0.2, 0.4, 0.6, 0.8, 1],
  },
  { min: -0.1, max: -0.0009, ticks: 4, output: [-0.1, -0.05, 0] },
  {
    min: -0.1,
    max: -0.0009,
    ticks: 8,
    output: [
      -0.1,
      -0.09,
      -0.08,
      -0.07,
      -0.06,
      -0.05,
      -0.04,
      -0.03,
      -0.02,
      -0.01,
      -0,
    ],
  },
  {
    min: -0.1,
    max: -0.0009,
    ticks: 12,
    output: [
      -0.1,
      -0.09,
      -0.08,
      -0.07,
      -0.06,
      -0.05,
      -0.04,
      -0.03,
      -0.02,
      -0.01,
      -0,
    ],
  },
  { min: 0.00009, max: 0.1, ticks: 4, output: [0, 0.05, 0.1] },
  {
    min: 0.00009,
    max: 0.1,
    ticks: 8,
    output: [0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1],
  },
  {
    min: 0.00009,
    max: 0.1,
    ticks: 12,
    output: [0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1],
  },
];
