---
layout: page
---

<script setup>
    import { withBase } from 'vitepress'
</script>
<style>
eo-dash a[href="https://eox.at"] img{
   display: unset;
   height: 9px;
}
eo-dash .eodash-overlay p {
   bottom: -13px !important;
}

eo-dash #ButtonsPanel {
    max-height: 50px;
}

</style>
<eo-dash style="height:calc(100dvh - 64px)" :config="withBase('/configs/firstconfig.js')"/>