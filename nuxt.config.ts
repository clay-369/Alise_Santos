import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxt/fonts", "@nuxt/icon"],
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/main.css"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});
