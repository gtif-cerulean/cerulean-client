---
layout: page
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
    "cover-image": "https://raw.githubusercontent.com/gtif-cerulean/cif-stories/refs/heads/main/assets/BlackCA/IMG_1499NPI.JPG",
    "theme": "shipping",
    "title": "A. Introduction to the CIF Dashboard",
    "subtitle": "",
    "file": "tutorials/introduction_to_cif"
  },
  {
    "cover-image": "https://raw.githubusercontent.com/gtif-cerulean/cif-stories/refs/heads/main/assets/BlackCA/IMG_1499NPI.JPG",
    "theme": "shipping",
    "title": "B. Data Visualization and Analysis",
    "subtitle": "",
    "file": "tutorials/data_visualisation"
  },
    {
    "cover-image": "https://cif.eox.at/assets/ascreenshot_2075cef4151b4dbbae1f8afe9b8ca1e7_text_export.Bc5Clfh4.jpeg",
    "theme": "shipping",
    "title": "C. Structure Icing Index",
    "subtitle": "",
    "file": "tutorials/structure_icing"
  },
    {
    "cover-image": "https://cif.eox.at/assets/ascreenshot_a8180f4be9314ad09475adcfca23309a_text_export.DwcNZS4W.jpeg",
    "theme": "shipping",
    "title": "D. Hashness Index",
    "subtitle": "",
    "file": "tutorials/harshness_index"
  },
    {
    "cover-image": "https://cif.eox.at/assets/ascreenshot_0717035d0b8643eab118d13e885969cd_text_export.C6uDYap-.jpeg",
    "theme": "shipping",
    "title": "F. Sea Ice Motion Animation",
    "subtitle": "",
    "file": "tutorials/polarwarp"
  },
    {
    "cover-image": "https://cif.eox.at/assets/ascreenshot_2b182b3129654575828b87e7153b5772_text_export.y2KZUb8T.jpeg",
    "theme": "shipping",
    "title": "E. POLARIS Ship Risk Index",
    "subtitle": "",
    "file": "tutorials/polaris"
  },
    {
    "cover-image": "https://cif.eox.at/assets/ascreenshot_330a7eefbcfd4343b9e15166470da2a4_text_export.BN7kTpEt.jpeg",
    "theme": "shipping",
    "title": "G. Wind Turbine Wake Effect",
    "subtitle": "",
    "file": "tutorials/wind_turbine_wake_effect"
  },
    {
    "cover-image": "https://cif.eox.at/assets/ascreenshot_0f6d65975e5849edbaada63df3f45d82_text_export.DyJ-MVpr.jpeg",
    "theme": "shipping",
    "title": "J. Route Optimization",
    "subtitle": "",
    "file": "tutorials/route_optimization"
  },
      {
    "cover-image": "https://cif.eox.at/assets/ascreenshot_0f6d65975e5849edbaada63df3f45d82_text_export.DyJ-MVpr.jpeg",
    "theme": "shipping",
    "title": "K. Sea Ice Drift and Deformation",
    "subtitle": "",
    "file": "tutorials/sea_ice_drift_deformation"
  },
      {
    "cover-image": "https://cif.eox.at/assets/ascreenshot_0f6d65975e5849edbaada63df3f45d82_text_export.DyJ-MVpr.jpeg",
    "theme": "shipping",
    "title": "H. Land Stability",
    "subtitle": "",
    "file": "tutorials/land_stability"
  },
      {
    "cover-image": "https://cif.eox.at/assets/ascreenshot_0f6d65975e5849edbaada63df3f45d82_text_export.DyJ-MVpr.jpeg",
    "theme": "shipping",
    "title": "I. Normalised Difference Turbidity Index",
    "subtitle": "",
    "file": "tutorials/normalise_difference_turbidity"
  },
      {
    "cover-image": "https://cif.eox.at/assets/ascreenshot_0f6d65975e5849edbaada63df3f45d82_text_export.DyJ-MVpr.jpeg",
    "theme": "shipping",
    "title": "L. Polar TEP Workspaces",
    "subtitle": "",
    "file": "tutorials/polartep_workspaces"
  },
        {
    "cover-image": "https://cif.eox.at/assets/ascreenshot_0f6d65975e5849edbaada63df3f45d82_text_export.DyJ-MVpr.jpeg",
    "theme": "shipping",
    "title": "M. Narrative Editor",
    "subtitle": "",
    "file": "tutorials/pnarrative_editor"
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
