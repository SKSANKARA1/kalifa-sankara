// import { z, defineCollection } from 'astro:content';

// const actuCollection = defineCollection({
//   schema: z.object({
//     titre: z.string(),
//     date: z.string(),
//     resume: z.string(),
//     image: z.string().optional(), // <- ce champ est important
//   }),
// });

// export const collections = {
//   actus: actuCollection,
// };

import { z, defineCollection } from 'astro:content';

const actuCollection = defineCollection({
  schema: z.object({
    titre: z.string(),
    date: z.string(),
    resume: z.string(),
    image: z.string().optional(),
  }),
});

const cqfsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    rubrique: z.enum(['IA', 'Politique']),
    description: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  actus: actuCollection,
  cqfs: cqfsCollection,
};

