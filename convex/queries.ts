import { query } from "./_generated/server";

export const species = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("Species").collect();
  },
});

export const speciesVariants = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("SpeciesVariant").collect();
  },
});
