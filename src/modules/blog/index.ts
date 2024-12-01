/*
The final piece to a module is its definition, which is exported in an index.ts file at its root directory. This definition tells Medusa the name of the module and its main service. Medusa will then register the main service in the container under the module's name.
*/
import blogLoader from "./loaders/blog";
import BlogModuleService from "./service";

import { Module } from "@medusajs/framework/utils";

export const BLOG_MODULE =
  "blog"; /* The name that the module's main service is registered under (blog) */

export default Module(BLOG_MODULE, {
  service: BlogModuleService,
  loaders: [blogLoader],
});
