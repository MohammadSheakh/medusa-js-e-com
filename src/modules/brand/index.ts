// A module must export a definition that tells Medusa the name of the module and its main service.
import { Module } from "@medusajs/framework/utils";
import BrandModuleService from "./service";

export const BRAND_MODULE = "brand";

export default Module(BRAND_MODULE, {
  service: BrandModuleService,
});
// To start using your module, you must add it to Medusa's configurations in medusa-config.ts.
