---
layout: home
hero:
  name: "Cerulean Information Factory"
  tagline: "Transforming ocean data into information to support the green transition for Shipping, Offshore Renewable Energy and Aquaculture"
  text: ""
---
<script client-only>
  if(window && !customElements.get('eox-itemfilter')) import("@eox/itemfilter");
</script>

Explore the Tutorials below.

<script setup>
  import { ref, onMounted } from 'vue';
  import { withBase, useRouter } from 'vitepress';

  const router = useRouter();
  const items = ref([]);

  const filterProps = [{
    "keys": [
      "title",
      "subtitle"
    ],
    "title": "Search",
    "type": "text",
    "placeholder": "Search in title",
    "expanded": true
  }, {
    "key": 'theme',
    "title": 'Theme',
    "expanded": true,
    "type": "multiselect"
  }
  ];

const tutorialsStatic = [
  {
    "cover-image": "https://cif.eox.at/assets/ascreenshot_cc5a9626b67f4579b08c823051ba8e03_text_export.IebxwoVj.jpeg",
    "theme": "shipping",
    "title": "C. Structure Icing Index",
    "subtitle": "",
    "file": "tutorials/structure_icing_indicator"
  },
  {
    "cover-image": "https://cif.eox.at/assets/ascreenshot_e0398b8466774b62a3f21b722117b1b6_text_export.CnL3LBjb.jpeg",
    "theme": "shipping",
    "title": "E. Ship Risk Index (POLARIS)",
    "subtitle": "",
    "file": "tutorials/polaris_indicator"
  },
    {
    "cover-image": "https://cif.eox.at/assets/ascreenshot_2075cef4151b4dbbae1f8afe9b8ca1e7_text_export.Bc5Clfh4.jpeg",
    "theme": "shipping",
    "title": "B. Data Visualisation and Analysis",
    "subtitle": "",
    "file": "tutorials/data_visualisation_tutorial"
  },
    {
    "cover-image": "https://cif.eox.at/assets/ascreenshot_a8180f4be9314ad09475adcfca23309a_text_export.DwcNZS4W.jpeg",
    "theme": "shipping",
    "title": "D. Hashness Index",
    "subtitle": "",
    "file": "tutorials/harshness_tutorial"
  },
    {
    "cover-image": "https://cif.eox.at/assets/ascreenshot_0717035d0b8643eab118d13e885969cd_text_export.C6uDYap-.jpeg",
    "theme": "shipping",
    "title": "F. Sea Ice Motion Animation",
    "subtitle": "",
    "file": "tutorials/image_warping_tutorial"
  },
    {
    "cover-image": "https://cif.eox.at/assets/ascreenshot_2b182b3129654575828b87e7153b5772_text_export.y2KZUb8T.jpeg",
    "theme": "shipping",
    "title": "A. Introduction to the CIF Dashboard",
    "subtitle": "",
    "file": "tutorials/introduction_to_cif_tutorial"
  },
    {
    "cover-image": "https://cif.eox.at/assets/ascreenshot_330a7eefbcfd4343b9e15166470da2a4_text_export.BN7kTpEt.jpeg",
    "theme": "shipping",
    "title": "H. Land Stability",
    "subtitle": "",
    "file": "tutorials/landslide_risk_tutorial"
  },
    {
    "cover-image": "https://cif.eox.at/assets/ascreenshot_0f6d65975e5849edbaada63df3f45d82_text_export.DyJ-MVpr.jpeg",
    "theme": "shipping",
    "title": "G. Wind Turbine Wake Effect",
    "subtitle": "",
    "file": "tutorials/wake_effect_tutorial"
  }
];


  onMounted(async () => {
    try {
      items.value = tutorialsStatic;
    } catch (error) {
      console.error('Error fetching JSON:', error);
    }
  });

  // Click event handler
  const handleResultClick = (evt) => {
    router.go(withBase(`${evt.detail.file}`));
  };
</script>

<client-only>
  <eox-itemfilter
    :items="items"
    titleProperty="title"
    imageProperty="cover-image"
    subTitleProperty="subtitle"
    aggregateResults="theme"
    :filterProperties="filterProps"
    resultType="cards"
    @select="handleResultClick"
    style="--form-flex-direction: row"
  ></eox-itemfilter>
</client-only>
