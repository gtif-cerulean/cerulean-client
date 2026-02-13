---
layout: page
---
<script client-only>
  if(window && !customElements.get('eox-itemfilter')) import("@eox/itemfilter");
</script>

Explore the Stories below to get acquainted with some of the CIF capabilities and the types of stories that can be produced using the CIF Narrative tool, part of the CIF Ecosystem available to users. Visit the Tutorials page to learn about the details of the CIF capabilities and how to get started using them.

<script setup>
  import { ref, onMounted } from 'vue';
  import { withBase, useRouter } from 'vitepress';
  import { trackEvent } from "@eox/pages-theme-eox/src/helpers.js";

  const router = useRouter();
  const items = ref([]);

  const filterProps = [{
    "keys": [
      "title",
      "subtitle"
    ],
    "title": "Search",
    "type": "text",
    "placeholder": "Search in title or subtitle",
    "expanded": true
  }, {
    "key": 'theme',
    "title": 'Theme',
    "expanded": true,
    "type": "select"
  }
  ];

  onMounted(async () => {
    try {
      const response = await fetch('https://gtif-cerulean.github.io/cif-stories/narratives.json');
      const results = await response.json();
      results.forEach((res)=>{
        if (res['cover-image'] && res['cover-image'].startsWith('build')){
            // Adapt image urls in case locally built and not absolute
            res['cover-image'] = 'https://gtif-cerulean.github.io/cif-stories/'+res['cover-image']
        }
    });
      items.value = results;
    } catch (error) {
      console.error('Error fetching JSON:', error);
    }
  });

  // Click event handler
  const handleResultClick = (evt) => {
    const sections = evt.detail.file.split("/");
    const filename = sections[sections.length-1].split(".")[0];
    trackEvent(['stories', 'select', filename]);
    router.go(withBase(`/story?id=${filename}`));
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
