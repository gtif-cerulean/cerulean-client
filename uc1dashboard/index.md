---
layout: false
---

<script setup>
    import { onMounted, withBase } from 'vitepress';
    import VPNav from 'vitepress/dist/client/theme-default/components/VPNav.vue';
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

<VPNav />
<eo-dash  :config="withBase(`/configs/firstconfig.js${cacheBuster}`)"/>

<style scoped>
  eo-dash {
    display:block;
    position: relative;
    top: var(--vp-nav-height);
    height: calc(100dvh - var(--vp-nav-height)) !important;
  }
  @media (max-width: 960px) {
    eo-dash {
      top: 0;
    }
  }
</style>
