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
      source: "services.yml",
      schema: z.object({
        services: z.array(
          z.object({
            description: z.string(),
          })
        ),
      }),
    }),
    approach: defineCollection({
      type: "data",
      source: "approach.yml",
      schema: z.object({
        approach: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
          })
        ),
      }),
    }),
    contact: defineCollection({
      type: "data",
      source: "contact.yml",
      schema: z.object({
        contact: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
          })
        ),
      }),
    }),
    testimonials: defineCollection({
      type: "data",
      source: "testimonials.yml",
      schema: z.object({
        testimonials: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
          })
        ),
      }),
    }),
    faq: defineCollection({
      type: "data",
      source: "faq.yml",
      schema: z.object({
        faq: z.array(
          z.object({
            question: z.string(),
            answer: z.string(),
          })
        ),
      }),
    }),
    blogs: defineCollection({
      type: "data",
      source: "blogs.yml",
      schema: z.object({
        blogs: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
            author: z.string(),
            date: z.string(),
            image: z.string(),
          })
        ),
      }),
    }),
  },
});
