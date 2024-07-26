// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@formkit/nuxt"],
  css: ["~/assets/scss/main.scss"],
  ssr: false,
  // mode: "universal",
  // nitro: {
  //   preset: "node-server",
  // },
  formkit: {
    autoImport: true,
  },
  // plugins: [{ src: "~/pages/web3.vue", mode: "client" }],
  app: {
    head: {
      title: "Nuxt app",
      meta: [{ name: "description", content: "Everythink about Nuxt3" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
    public: {
      salam: process.env.TEST_KEY,
    },
  },
});
