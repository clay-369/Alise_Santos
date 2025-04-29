import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    header: defineCollection({
      type: "data",
      source: "header/header.yml",
      schema: z.object({
        title: z.string(),
        links: z.array(
          z.object({
            title: z.string(),
            url: z.string(),
          })
        ),
      }),
    }),
    icons: defineCollection({
      type: "data",
      source: "icons/icons.yml",
      schema: z.object({
        icons: z.array(
          z.object({
            name: z.string(),
            icon: z.string(),
            url: z.string(),
          })
        ),
      }),
    }),
  },
});
