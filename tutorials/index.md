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
    "title": "Tutorial on using dashboard for shipping industry",
    "subtitle": "More info on why this is important tutorial",
    "file": "tutorials/tutorial1"
  },
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
