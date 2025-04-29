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
  },
});
