// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/image',
    'nuxt-mdi',
    'nuxt-swiper',
    'nuxt-disqus'
  ],
  disqus: {
    shortname: "test-hy70l60dd1",
  },
  image: {
    dir: 'assets/img'
  }
})