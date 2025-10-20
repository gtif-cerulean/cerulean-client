---
layout: page
---
<script setup>
    import { onMounted } from 'vue';
    if(!customElements.get('eox-map')) import("@eox/map");
    if(!customElements.get('eox-jsonform')) import("@eox/jsonform");
    import("@eox/map/dist/eox-map-advanced-layers-and-sources");
    onMounted(() => {
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
                .switch-button {
                    position: fixed!important;
                    bottom: 70px!important;
                    right: 60px!important;
                }
            `);
        }
    })
</script>

<eox-storytelling show-nav show-hero-scroll-indicator show-editor="closed" class="full-width" markdown="## Start your journey here!"></eox-storytelling>
