const store = window.eodashStore;
// choose if production catalog or PR deployment one
let stacEndpoint = "https://gtif-cerulean.github.io/cerulean-catalog/cerulean/catalog.json";
const searchParams = new URLSearchParams(window.location.search);
if (searchParams.get('catalog')) {
  stacEndpoint = stacEndpoint.replace("catalog/",`catalog/pr-preview/${searchParams.get('catalog')}/`);
}

export default {
  id: "demo",
  stacEndpoint: stacEndpoint,
  brand: {
    noLayout: true,
    name: "Demo",
    theme: {
      colors: {
        primary: "#fff",
        secondary: "#fff",
        surface: "#fff",
      },
    },
    footerText: "Demo configuration of eodash client",
  },
  template: {
    loading: {
      id: Symbol(),
      type: "web-component",
      widget: {
        link: "https://cdn.jsdelivr.net/npm/ldrs/dist/auto/mirage.js",
        tagName: "l-mirage",
        properties: {
          class: "align-self-center justify-self-center",
          size: "120",
          speed: "2.5",
          color: "#004170",
        },
      },
    },
    background: {
      id: Symbol(),
      type: "internal",
      widget: {
        name: "EodashMap",
        properties: {
          // enableCompare: true,
        },
      },
    },
    widgets: [
      {
        id: Symbol(),
        type: "internal",
        layout: { x: 0, y: 0, w: 3, h: 4 },
        widget: {
          name: "EodashItemFilter",
          properties: {
            filtersTitle: '',
            // enableCompare: true,
            filterProperties: [],
            aggregateResults: 'collection_group',
          },
        },
      },
      {
        defineWidget: (selectedSTAC) => {
          return selectedSTAC
            ? {
                id: "Information",
                title: "Information",
                layout: { x: 9, y: 0, w: 3, h: 4 },
                type: "internal",
                widget: {
                  name: "EodashStacInfo",
                  properties: {
                    showIndicatorsBtn: false,
                    showLayoutSwitcher: false,
                  },
                },
              }
            : null;
        },
      },
      {
        defineWidget: (selectedSTAC) => {
          return selectedSTAC
            ? {
                id: "Datepicker",
                type: "internal",
                layout: { x: 5, y: 8, w: 2, h: 4 },
                title: "Datepicker",
                widget: {
                  name: "EodashDatePicker",
                },
              }
            : null;
        },
      },
      {
        id: Symbol(),
        type: "internal",
        title: "Layer Control",
        layout: { x: 0, y: 4, w: 3, h: 8 },
        widget: {
          name: "EodashLayerControl",
        },
      },
      {
        defineWidget: (selectedSTAC) =>
          selectedSTAC?.links.some((l) => l.rel === "service")
            ? {
                id: "Processes",
                type: "internal",
                title: "Processes",
                layout: { x: 9, y: 4, w: 3, h: 8 },
                widget: {
                  name: "EodashProcess",
                },
              }
            : null,
      },
      /*
      {
        defineWidget: (selectedCompareStac) => {
          return selectedCompareStac
            ? {
                id: Symbol(),
                title: "Layer Control Comparison",
                layout: { x: 9, y: 6, w: 3, h: 6 },
                type: "internal",
                widget: {
                  name: "EodashLayerControl",
                  properties: {
                    map: "second",
                  },
                },
              }
            : null;
        },
      },
      */
      {
        defineWidget: (selected) => {
          return selected
            ? {
                id: Symbol(),
                layout: { x: 8, y: 0, w: 1, h: 1 },
                title: "Buttons",
                type: "internal",
                widget: {
                  name: "EodashMapBtns",
                },
              }
            : null;
        },
      },
    ],
  },
};
