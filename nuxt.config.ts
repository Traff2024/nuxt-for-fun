// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@formkit/nuxt"],
  css: ["~/assets/scss/main.scss"],
  ssr: false,
  target: "static", // Статичний сайт
  router: {
    base: "/nuxt-app/", // База для маршрутизації
  },
  generate: {
    fallback: true, // Якщо немає налаштованого роуту, використовувати fallback
  },
  // mode: "universal",
  // nitro: {
  //   preset: "node-server",
  // },
  nitro: { prerender: { failOnError: false } },
  formkit: {
    autoImport: true,
  },
  // plugins: [{ src: "~/pages/web3.vue", mode: "client" }],
  app: {
    baseURL: "/nuxt-app/",
    buildAssetsDir: "assets",
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
