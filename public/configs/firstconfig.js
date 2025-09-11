
export default {
  id: "gtif-cerulean",
  stacEndpoint: "https://gtif-cerulean.github.io/cerulean-catalog/cerulean/catalog.json",
  brand: {
    noLayout: true,
    name: "GTIF Cerulean",
    theme: {
      colors: {
        primary: "rgb(0, 39, 66)",
        secondary: "#fff",
        surface: "#fff",
      },
    },
    footerText: "Demo configuration of eodash client",
  },
  templates: {
    light: {
      gap: 16,
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
            enableCompare: true,
            zoomToExtent: false,
            btns: {
              enableExportMap: true,
              enableCompareIndicators: true,
              enableSearch: false,
            },
            btnsPosition: {
              x: "12/9/9",
              y: "3/2/2",
            }
          },
        },
      },
      widgets: [
        {
          id: Symbol(),
          type: "internal",
          title: "Tools",
          layout: { x: 0, y: 0, w: 2, h: 1 },
          widget: {
            name: "EodashTools",
            properties: {
              // layoutTarget: "light",
              // layoutIcon: "M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z",
              itemFilterConfig: {
                // resultType: "cards",
                enableHighlighting: false,
                filterProperties: [
                  {
                    keys: ["title", "themes"],
                    title: "Search",
                    type: "text",
                    expanded : true
                  },
                  {
                    key: "themes",
                    title: "Theme Filter",
                    type: "select",
                    expanded : true
                  },
                ],
                subTitleProperty: "subtitle",
                // imageProperty: "thumbnail",
                aggregateResults: "collection_group",
                style: {
                  "--form-flex-direction": "row",
                },
              },
            },
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: "Information",
                  title: "Information",
                  layout: { x: "8/8/9", y: 0, w: "4/4/3", h: 4 },
                  type: "internal",
                  widget: {
                    name: "EodashStacInfo",
                    properties: {
                      showIndicatorsBtn: false,
                      showLayoutSwitcher: false,
                      featured: [
                        "description",
                        "providers",
                        "assets",
                        "sci:doi"
                      ],
                      body: [
                        "satellite",
                        "sensor",
                        "agency",
                        "extent"
                      ]
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
                  layout: { x: 4, y: 6, w: 4, h: 6 },
                  title: "Datepicker",
                  widget: {
                    name: "EodashDatePicker",
                    properties: {
                      hintText: `<b>Hint:</b> closest available date is displayed <br />
                            on map (see Analysis Layers)`,
                      toggleCalendar: true,
                    },
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC ? {
              id: Symbol(),
              type: "internal",
              title: "Layer Control",
              layout: { x: 0, y: 1, w: "3/3/2", h: 10 },
              widget: {
                name: "EodashLayerControl",
              }
            } : null;
          }
        },
        {
          defineWidget: (selectedSTAC) =>
            window.eodashStore.actions.includesProcess(selectedSTAC)
              ? {
                  id: "Processes",
                  type: "internal",
                  title: "Processes",
                  layout: { x: 8, y: 6, w: 4, h: 6 },
                  widget: {
                    name: "EodashProcess",
                  },
                }
              : null,
        },
      ],
    },
    compare: {
      gap: 16,
      loading: {
        id: Symbol(),
        type: "web-component",
        widget: {
          // https://uiball.com/ldrs/
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
            enableCompare: true,
            zoomToExtent: false,
            btns: {
              enableZoom: true,
              enableExportMap: false,
              enableChangeProjection: false,
              enableCompareIndicators: {
                fallbackTemplate: "light",
              },
              enableBackToPOIs: false,
              enableSearch: false,
            },
            btnsPosition: {
              x: "12/10/10",
              y: "3/2/2",
            }
          },
        },
      },
      widgets: [
        {
          id: Symbol(),
          type: "internal",
          title: "Tools",
          layout: { x: 0, y: 0, w: 2, h: 1 },
          widget: {
            name: "EodashTools",
            properties: {
              itemFilterConfig: {
                // resultType: "cards",
                enableHighlighting: false,
                filterProperties: [
                  {
                    keys: ["title", "themes"],
                    title: "Search",
                    type: "text",
                    expanded : true
                  },
                  {
                    key: "themes",
                    title: "Theme Filter",
                    type: "select",
                    expanded : true
                  },
                ],
                subTitleProperty: "subtitle",
                aggregateResults: "collection_group",
                style: {
                  "--form-flex-direction": "row",
                },
              },
            },
          },
        },
        // compare indicators
        {
          id: Symbol(),
          type: "internal",
          title: "Tools",
          layout: { x: 10, y: 0, w: 2, h: 1 },
          widget: {
            name: "EodashTools",
            properties: {
              showLayoutSwitcher: false,
              indicatorBtnText: "Select indicator to compare",
              itemFilterConfig: {
                enableCompare: true,
                filtersTitle: "Select indicator to compare",
                filterProperties: [
                  {
                    keys: ["title", "themes"],
                    title: "Search",
                    type: "text",
                    expanded : true
                  },
                  {
                    key: "themes",
                    title: "Theme Filter",
                    type: "select",
                    expanded : true
                  },
                ],
                enableHighlighting: false,
                cssVars: {
                  "--form-flex-direction": "row",
                },
              },
            },
          },
        },
        {
          id: Symbol(),
          type: "internal",
          title: "Layers",
          layout: { x: 0, y: 1, w: "3/3/2", h: 10 },
          widget: {
            name: "EodashLayerControl",
          },
        },
        {
          id: Symbol(),
          title: "Comparison Layers",
          layout: { x: "9/9/10", y: 1, w: "3/3/2", h: 11 },
          type: "internal",
          widget: {
            name: "EodashLayerControl",
            properties: {
              map: "second",
            },
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: "Datepicker",
                  type: "internal",
                  layout: { x: 4, y: 7, w: 4, h: 5 },
                  title: "Date",
                  widget: {
                    name: "EodashDatePicker",
                    properties: {
                      hintText: `<b>Hint:</b> closest available date is displayed <br />
                                on map (see Analysis Layers)`,
                      toggleCalendar: true,
                    },
                  },
                }
              : null;
          },
        },
      ],
    },
  },
};
