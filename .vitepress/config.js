import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Baltic GTIF - BETA",
  description: "Baltic Information Factory Dashboard",
  appearance: false, // disable dark mode
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (el) => el.includes('-')
      }
    }
  },
  themeConfig: {
    logo: '/assets/baltic_gtif_logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Narratives', link: '/narratives' },
      { text: 'Explore data', link: '/explore/' },
      { text: 'Login', link: 'https://workspace.baltic-gtif.hub-otc.eox.at/' },
    ],
  }
})
