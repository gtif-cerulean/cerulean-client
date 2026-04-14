import { defineConfig } from 'vitepress'
import baseConfig from "@eox/pages-theme-eox/config";
import feedbackSchema from "../public/configs/feedback_schema.json";

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
    feedback: {
      endpoint:
        "https://git-issue-creator.cif.hub-otc.eox.at/create-issue?repo=github.com/gtif-cerulean/gtif-cerulean",
      schema: feedbackSchema,
      position: "bottom-right",
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Dashboard', link: '/uc1dashboard/' },
      { text: 'Tutorials', link: '/tutorials/' },
      { text: 'Stories', link: '/storyviewer/' }
    ],
  },
})
