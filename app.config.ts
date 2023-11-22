export default defineAppConfig({
  ui: {
    primary: 'lime',
    gray: 'neutral',
  },

  myLayer: {
    name: 'Hello from Nuxt layer',
  },
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    myLayer?: {
      /** Project name */
      name?: string
    }
  }
}
