/**
  * @INFO <!--  Define Link Between a Brand and a Product  -->
  |
  |--> This chapter covers how to define an API route that creates a brand as the
  | last step of the "Build Custom Features" chapter .
  |
  | This adds a POST API route at /admin/brands.
 */
import BrandModule from "../modules/brand";

import ProductModule from "@medusajs/medusa/product";

import { defineLink } from "@medusajs/framework/utils";

export default defineLink(
  {
    linkable: ProductModule.linkable.product,
    isList: true,
  },

  BrandModule.linkable.brand
);

/**
  * @Next <!-- Sync the Link to the Database  -->
  |
  |--> //command npx medusa db:sync-links
  |   
  |  This creates a table for the link in the database. The table stores the IDs of linked brand and product records.
  +----------- 
  | @Next  <!-- 3.2.2. Create Links between Brand and Product Records -->
  | 
  |--> learn how to associate brand and product records by creating a link between them.
  | //IDEA : may be  in workflow folder .. 
  +----------- 
  | Ex :
 */
