/**
  * @INFO <!--  3.2.3. Extend Create Product API Route  -->
  |
  |--> Some API routes accept an additional_data request body parameter.
  | It's useful when you want to pass custom data, such as the brand ID, then perform an action based on this data, such as link the
  | brand to the product.
  |
 */

import { defineMiddlewares } from "@medusajs/medusa";
import { z } from "zod";

export default defineMiddlewares({
  routes: [
    {
      matcher: "/admin/products", // API route path to apply the middleware on.
      method: ["POST"],
      additionalDataValidator: {
        // An object of key-value pairs defining the validation rules for custom properties using Zod.
        brand_id: z.string().optional(),
      },
    },
  ],
});
/**
  * @Next <!-- Link Brand to Product using Workflow Hook  -->
  |
  |-->   
  |  
  +----------- 
  | Ex :
 */
