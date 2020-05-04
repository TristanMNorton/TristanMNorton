// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import 'normalize.css'
import '~/assets/base.scss'

export default function (Vue, { router, head, isClient }) {
  // Font
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,500&display=swap'
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
