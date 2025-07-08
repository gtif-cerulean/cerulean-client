---
layout: page
---

<script setup>
    import { onMounted, ref } from 'vue';
    import { withBase } from 'vitepress';

    if (!import.meta.env.SSR) {
        if(window && !customElements.get('eox-map')) import("@eox/map");
        if(window && !customElements.get('eox-jsonform')) import("@eox/jsonform");
        import("@eox/map/src/plugins/advancedLayersAndSources");
    }

    const storyurl = ref('')

    onMounted(() => {
        let storyfile;
        if (window && typeof window !== 'undefined' && 'URLSearchParams' in window) {
            const searchParams = new URLSearchParams(window.location.search);
            storyfile = searchParams.get('id');
            storyurl.value = `https://gtif-cerulean.github.io/cif-stories/${storyfile}.md`;
        }
        if (window && typeof window !== 'undefined') {
            function injectStyleToShadowRoot(selector, css) {
                const interval = setInterval(() => {
                const el = document.querySelector(selector);
                if (el && el.shadowRoot) {
                    clearInterval(interval);
                    const style = document.createElement('style');
                    style.textContent = css;
                    el.shadowRoot.appendChild(style);
                }
                }, 100);
            }
    
            injectStyleToShadowRoot('eox-storytelling', `
                .navigation {
                top: 60px !important;
                }
            `);
        }
    })
    
</script>

<eox-storytelling 
    show-nav
    v-if="storyurl" 
    :markdown-url="storyurl">
</eox-storytelling>
