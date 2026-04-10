---
layout: page
footer: false
feedback: false
---

<script setup>
    import { withBase } from 'vitepress';
    import { onMounted, watch } from 'vue';
    import { trackEvent } from "@eox/pages-theme-eox/src/helpers.js";
    const cacheBuster = `?t=${new Date().getTime()}`; // Add a timestamp for cache busting
    function waitForEodashStore(callback) {
        const interval = setInterval(() => {
            if (window.eodashStore) {
                clearInterval(interval)
                callback(window.eodashStore)
            }
        }, 100)
    }
    onMounted(() => {
        waitForEodashStore((eodashStore) => {
            const indicatorRef = eodashStore?.states?.indicator;
            watch(indicatorRef, (newVal, oldVal) => {
                if (newVal && newVal !== "") {
                    trackEvent(['indicators', 'select_indicator', newVal]);
                }
            }, { immediate: true })
        });
    })
</script>

<eo-dash :config="withBase(`/configs/firstconfig.js${cacheBuster}`)"/>

<style>
eo-dash {
  display: block;
  height: calc(100dvh - var(--vp-nav-height));
  width: 100%;
}
.VPPage:has(eo-dash) {
  padding: 0;
  max-width: unset;
}
body:has(eo-dash) .news-banner {
  display: none;
}
</style>
