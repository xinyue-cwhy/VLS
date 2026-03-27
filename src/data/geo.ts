export const regionGeoJson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { name: '西北' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [73, 34],
            [81, 46],
            [92, 47],
            [98, 41],
            [95, 33],
            [84, 30],
            [73, 34],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { name: '西南' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [79, 22],
            [90, 31],
            [101, 30],
            [103, 24],
            [96, 21],
            [84, 20],
            [79, 22],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { name: '华北' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [97, 35],
            [105, 43],
            [116, 43],
            [118, 38],
            [112, 34],
            [101, 33],
            [97, 35],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { name: '东北' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [118, 39],
            [126, 49],
            [135, 47],
            [132, 40],
            [123, 38],
            [118, 39],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { name: '华中' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [102, 27],
            [112, 34],
            [120, 31],
            [117, 25],
            [106, 24],
            [102, 27],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { name: '华东' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [116, 30],
            [121, 36],
            [124, 31],
            [122, 24],
            [117, 24],
            [116, 30],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { name: '华南' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [106, 20],
            [117, 24],
            [121, 23],
            [116, 18],
            [108, 18],
            [106, 20],
          ],
        ],
      },
    },
  ],
} as const
