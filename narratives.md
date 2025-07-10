---
---
<script client-only>
  if(window && !customElements.get('eox-itemfilter')) import("@eox/itemfilter");
</script>

Narratives page with baltic gtif examples.

<script setup>
  import { ref, onMounted } from 'vue';
  import { withBase, useRouter } from 'vitepress';

  const router = useRouter();
  const items = ref([]);

  const filterProps = [{
    "keys": [
      "title",
      "subtitle",
      "theme"
    ],
    "title": "By keyword",
    "type": "text",
    "placeholder": "Search in title or subtitle",
    "expanded": true
  }, {
    "key": 'theme',
    "title": 'By theme',
    expanded: true
  }
  ];

  onMounted(async () => {
    try {
      const response = await fetch('https://baltic-gtif.github.io/baltic-narratives/narratives.json');
      const results = await response.json();
      results.forEach((res)=>{res.image = 'https://baltic-gtif.github.io/baltic-narratives/'+res.image});
      items.value = results;
    } catch (error) {
      console.error('Error fetching JSON:', error);
    }
  });

  // Click event handler
  const handleResultClick = (evt) => {
    const sections = evt.detail.file.split("/");
    const filename = sections[sections.length-1].split(".")[0];
    router.go(withBase(`/story?id=${filename}`));
  };
</script>

<div class="large-space"></div>

<client-only>
  <eox-itemfilter
    :items="items"
    titleProperty="title"
    imageProperty="image"
    subTitleProperty="subtitle"
    aggregateResults="theme"
    :filterProperties="[]"
    resultType="cards"
    @select="handleResultClick"
    style="--select-filter-max-items: 10"
    class="large-margin bottom-margin"
  >
    <h6 slot="filterstitle" class="small vertical-margin">Filters:</h6>
    <h6 slot="resultstitle" class="large large-margin vertical-margin top-padding">Narratives</h6>
  </eox-itemfilter>
</client-only>

<div class="large-space"></div>

<style>
  eox-itemfilter {
    --form-flex-direction: colrowumn;
  }
  @media (max-width: 768px) {
    eox-itemfilter {
      --form-flex-direction: column;
      --filter-display: none;
    }
  }
  @media (min-width: 768px) {
    eox-itemfilter {
      --filter-display: none;
    }
  }
</style>