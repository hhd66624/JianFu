import DefaultTheme from 'vitepress/theme'
import { EnhanceAppContext, useRoute } from 'vitepress'
import { h } from 'vue'

import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import googleAnalytics from 'vitepress-plugin-google-analytics'
import imageViewer from 'vitepress-plugin-image-viewer'
import {
  DocBox,
  DocLinks,
  DocBoxCube,
  DocVideoLink,
  Announcement,
  DocAsideLogo,
  HomeUnderline,
  HomeFooter,
  Twikoo,
  ShareButton
} from '@theojs/lumen'
import { Aside_Data, Footer_Data, Twikoo_Data } from '../data'
import '@shikijs/vitepress-twoslash/style.css'
import '@theojs/lumen/theme'
import 'viewerjs/dist/viewer.min.css'
import 'virtual:group-icons.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(Announcement),
      'aside-ads-before': () => h(DocAsideLogo, { Aside_Data }),
      'layout-bottom': () => h(HomeFooter, { Footer_Data }),
      'doc-after': () => h(Twikoo, { Twikoo_Data }),
      'aside-outline-before': () => h(ShareButton)
    })
  },
  enhanceApp: ({ app }: EnhanceAppContext, ctx) => {
    googleAnalytics({ id: 'G-6QN23XNMXB' })
    app.component('Home', HomeUnderline)
    app.component('Box', DocBox)
    app.component('Links', DocLinks)
    app.component('BoxCube', DocBoxCube)
    app.component('VideoLink', DocVideoLink)
    app.use(TwoslashFloatingVue)
  },
  setup() {
    const route = useRoute()
    imageViewer(route)
  }
}
