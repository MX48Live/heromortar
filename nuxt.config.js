module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ปูนตราฮีโร่ (Hero Mortar): Hero ปูนดี... ที่สร้างสรรค์เพื่อคุณ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: "Nuxt.js project" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { href: '/css/bootstrap.min.css', rel: 'stylesheet' }
    ],
    script: [
      { src: '/js/jquery.min.js', type: 'text/javascript' },
      { src: '/js/popper.min.js', type: 'text/javascript' },
      { src: '/js/bootstrap.min.js', type: 'text/javascript' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    linkActiveClass: 'active'
  },
  plugins: ['~/plugins/carousel']
}
