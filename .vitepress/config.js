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
      { text: 'Dashboard', link: '/explore/' },
    ],
  }
})
