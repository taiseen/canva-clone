import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        // create table columns by these attributes...
        name: v.string(),
        email: v.string(),
        picture: v.string(),
        subscriptionId: v.string(),
    }),
});