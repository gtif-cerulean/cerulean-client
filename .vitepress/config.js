import { defineConfig } from 'vitepress'
import baseConfig from "@eox/pages-theme-eox/config";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: baseConfig("cif"),
  description: "Cerulean Information Factory Dashboard",
  appearance: false, // disable dark mode
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (el) => el.includes('-')
      }
    }
  },
  themeConfig: {

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Dashboard', link: '/uc1dashboard/' },
      { text: 'Tutorials', link: '/tutorials/' },
      { text: 'Stories', link: '/storyviewer/' },
      { text: 'Editor', link: '/editor/' }
    ],
  },
})
