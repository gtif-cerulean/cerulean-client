import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cerulean Information Factory",
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
    logo: '/assets/cerulean_logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Dashboard', link: '/uc1dashboard/' },
      { text: 'Tutorials', link: '/tutorials/' },
      { text: 'Stories', link: '/storyviewer/' },
      { text: 'Editor', link: '/editor/' }
    ],
  },
  head: [
    [
      "script",
      {},
      `
      var _paq = (window._paq = window._paq || []);
      /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
      _paq.push(["requireCookieConsent"]);
      _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
      _paq.push(["trackPageView"]);
      _paq.push(["enableLinkTracking"]);
      (function () {
        var u = "https://nix.eox.at/piwik/";
        _paq.push(["setTrackerUrl", u + "matomo.php"]);
        _paq.push(["setSiteId", "19"]);
        var d = document,
          g = d.createElement("script"),
          s = d.getElementsByTagName("script")[0];
        g.async = true;
        g.src = u + "matomo.js";
        s.parentNode.insertBefore(g, s);
      })();
    `,
    ],
  ],
})
