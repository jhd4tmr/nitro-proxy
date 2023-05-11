// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    routeRules: {
      "/api/**": {
        proxy: {
          to: 'http://localhost:3000/api/**'
        }
      },
    },
  }
});
