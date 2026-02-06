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
    "cover-image": "https://raw.githubusercontent.com/gtif-cerulean/cerulean-client/refs/heads/main/tutorials/assets/introduction_to_cif/ascreenshot_69ef5ddc597f47af987c6981697817ca_text_export.jpeg",
    "theme": "shipping",
    "title": "A. Introduction to the CIF Dashboard",
    "subtitle": "",
    "file": "tutorials/introduction_to_cif"
  },
  {
    "cover-image": "https://raw.githubusercontent.com/gtif-cerulean/cerulean-client/refs/heads/main/tutorials/assets/data_visualisation/ascreenshot_f93c5de44c9448bf91af36b205cdcc17_text_export.jpeg",
    "theme": "shipping",
    "title": "B. Data Visualization and Analysis",
    "subtitle": "",
    "file": "tutorials/data_visualisation"
  },
    {
    "cover-image": "https://raw.githubusercontent.com/gtif-cerulean/cerulean-client/refs/heads/main/tutorials/assets/structure_icing/File_0985a5e41eee4e09abbfac0a18af38c7_text_export.jpeg",
    "theme": "shipping",
    "title": "C. Structure Icing Index",
    "subtitle": "",
    "file": "tutorials/structure_icing"
  },
    {
    "cover-image": "https://raw.githubusercontent.com/gtif-cerulean/cerulean-client/refs/heads/main/tutorials/assets/harshness_index/File_b994dd5dcbaf4f408dff7b288f5709c7_text_export.jpeg",
    "theme": "shipping",
    "title": "D. Hashness Index",
    "subtitle": "",
    "file": "tutorials/harshness_index"
  },
    {
    "cover-image": "https://raw.githubusercontent.com/gtif-cerulean/cerulean-client/refs/heads/main/tutorials/assets/polarwarp/File_2ca7b95f29004116802b88cb022c6003_text_export.jpeg",
    "theme": "shipping",
    "title": "F. Sea Ice Motion Animation",
    "subtitle": "",
    "file": "tutorials/polarwarp"
  },
    {
    "cover-image": "https://raw.githubusercontent.com/gtif-cerulean/cerulean-client/refs/heads/main/tutorials/assets/polaris/File_cd849fc922364b75b2122595b108946f_text_export.jpeg",
    "theme": "shipping",
    "title": "E. POLARIS Ship Risk Index",
    "subtitle": "",
    "file": "tutorials/polaris"
  },
    {
    "cover-image": "https://raw.githubusercontent.com/gtif-cerulean/cerulean-client/refs/heads/main/tutorials/assets/wind_turbine_wake_effect/File_4a0bf9a0a7b2430c9179a71efb9d9b40_text_export.jpeg",
    "theme": "shipping",
    "title": "G. Wind Turbine Wake Effect",
    "subtitle": "",
    "file": "tutorials/wind_turbine_wake_effect"
  },
    {
    "cover-image": "https://raw.githubusercontent.com/gtif-cerulean/cerulean-client/refs/heads/main/tutorials/assets/route_optimization/ascreenshot_a039a2ee76eb4b739626a8a94680d34f_text_export.jpeg",
    "theme": "shipping",
    "title": "J. Route Optimization",
    "subtitle": "",
    "file": "tutorials/route_optimization"
  },
      {
    "cover-image": "https://raw.githubusercontent.com/gtif-cerulean/cerulean-client/refs/heads/main/tutorials/assets/sea_ice_drift_deformation/ascreenshot_b8ea354d5c394f7b9ec79676c8a401ac_text_export.jpeg",
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
    "cover-image": "https://raw.githubusercontent.com/gtif-cerulean/cerulean-client/refs/heads/main/tutorials/assets/normalise_difference_turbidity/ascreenshot_6cb0128a138141339042c9f6c9447722_text_export.jpeg",
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
    "file": "tutorials/narrative_editor"
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
