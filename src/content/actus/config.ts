import { z, defineCollection } from 'astro:content';

const actuCollection = defineCollection({
  schema: z.object({
    titre: z.string(),
    date: z.string(),
    resume: z.string(),
    image: z.string().optional(), // <- ce champ est important
  }),
});

export const collections = {
  actus: actuCollection,
};
