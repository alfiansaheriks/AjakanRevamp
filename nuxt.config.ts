// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true, // Jika Anda menggunakan server-side rendering
  buildDir: '.nuxt',
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;700&display=swap',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/New Logo Ajakan.png',
        },
      ],
    },
  },
  css: [
    '@/assets/css/main.scss',
    'animate.css/animate.min.css',
  ],
  compatibilityDate: '2024-04-03',
  devServer: { 
    host: '0.0.0.0',
    port: 3000 
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/image',
    'nuxt-mdi',
    'nuxt-swiper',
    'nuxt-disqus',
    'nuxt-aos'
  ],
  disqus: {
    shortname: "test-hy70l60dd1",
  },
  image: {
    dir: 'assets/img',
  },
  aos: {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  },
})