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
    "cover-image": "https://raw.githubusercontent.com/gtif-cerulean/cif-stories/refs/heads/main/assets/BlackCA/IMG_1499NPI.JPG",
    "theme": "shipping",
    "title": "Structure Icing Index",
    "subtitle": "",
    "file": "tutorials/structure_icing_indicator"
  },
  {
    "cover-image": "https://raw.githubusercontent.com/gtif-cerulean/cif-stories/refs/heads/main/assets/BlackCA/IMG_1499NPI.JPG",
    "theme": "shipping",
    "title": "Polaris Indicator",
    "subtitle": "",
    "file": "tutorials/polaris_indicator"
  },
    {
    "cover-image": "https://raw.githubusercontent.com/gtif-cerulean/cif-stories/refs/heads/main/assets/BlackCA/IMG_1499NPI.JPG",
    "theme": "shipping",
    "title": "Data Visualisation",
    "subtitle": "",
    "file": "tutorials/data_visualisation_tutorial"
  },
    {
    "cover-image": "https://raw.githubusercontent.com/gtif-cerulean/cif-stories/refs/heads/main/assets/BlackCA/IMG_1499NPI.JPG",
    "theme": "shipping",
    "title": "Hashness Indicator",
    "subtitle": "",
    "file": "tutorials/harshness_tutorial"
  },
    {
    "cover-image": "https://raw.githubusercontent.com/gtif-cerulean/cif-stories/refs/heads/main/assets/BlackCA/IMG_1499NPI.JPG",
    "theme": "shipping",
    "title": "Image Warping Capability",
    "subtitle": "",
    "file": "tutorials/image_warping_tutorial"
  },
    {
    "cover-image": "https://raw.githubusercontent.com/gtif-cerulean/cif-stories/refs/heads/main/assets/BlackCA/IMG_1499NPI.JPG",
    "theme": "shipping",
    "title": "Introduction to CIF",
    "subtitle": "",
    "file": "tutorials/introduction_to_cif_tutorial"
  },
    {
    "cover-image": "https://raw.githubusercontent.com/gtif-cerulean/cif-stories/refs/heads/main/assets/BlackCA/IMG_1499NPI.JPG",
    "theme": "shipping",
    "title": "Landslide Risk",
    "subtitle": "",
    "file": "tutorials/landslide_risk_tutorial"
  },
    {
    "cover-image": "https://raw.githubusercontent.com/gtif-cerulean/cif-stories/refs/heads/main/assets/BlackCA/IMG_1499NPI.JPG",
    "theme": "shipping",
    "title": "Wake effect",
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
