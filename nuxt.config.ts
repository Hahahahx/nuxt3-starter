import { pwa } from './config/pwa'
import { appDescription } from './config/site'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-typed-router',
    '@formkit/auto-animate',
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: [
      {
        code: 'zh',
        file: 'zh.js',
      },
      {
        code: 'en',
        file: 'en.js',
      },
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'zh',
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  css: [
    // '@unocss/reset/tailwind.css',
  ],

  colorMode: {
    classSuffix: '',
  },

  nitro: {
    devProxy: {
      '/api': {
        target: 'http://47.104.180.148:8081/api', // 这里是接口地址
        changeOrigin: true,
        prependPath: true,
      },
    },
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
    },
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  pwa,

  devtools: {
    enabled: true,
  },
})
