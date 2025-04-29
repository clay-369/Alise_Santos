import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    header: defineCollection({
      type: "data",
      source: "header.yml",
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
      source: "icons.yml",
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
    services: defineCollection({
      type: "data",
      source: "servicelist.yml",
      schema: z.object({
        services: z.array(
          z.object({
            description: z.string(),
          })
        ),
      }),
    }),
  },
});
