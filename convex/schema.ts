import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  Species: defineTable({
    key: v.string(),
    prompt: v.string(),

    variants: v.float64(),
    generations: v.float64(),
    // ... other evolutionary configuration, like number of variants, amount of creativity, how many generations to try, how often to do selection process, threshold values, etc.

    // ... other widget properties like actions and triggers that are expected from outside the widget
  }),
  SpeciesVariant: defineTable({
    experiment_flag: v.string(),
    html: v.string(),
    species_key: v.string(),
  }),
});
