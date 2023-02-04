import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { env } from "./src/env/server.mjs";

const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  basePath: "/studio",
  name: "Blogsite_Studio",
  title: "Blogsite Studio",

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    types: schemaTypes,
  },
});
