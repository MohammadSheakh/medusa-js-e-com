/**
  * @INFO <!--  Create Brand API Route  -->
  |
  |--> This chapter covers how to define an API route that creates a brand as the
  | last step of the "Build Custom Features" chapter .
  |
  | This adds a POST API route at /admin/brands.
 */
import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";

import {
  CreateBrandInput,
  createBrandWorkflow,
} from "@src/workflows/brand/create-brand";

export const POST = async (
  req: MedusaRequest<CreateBrandInput>,

  res: MedusaResponse
) => {
  const { result } = await createBrandWorkflow(req.scope).run({
    input: req.body,
  });

  res.json({ brand: result });
};

/**
  * @Next <!-- Test API Route  -->
  |
  |--> retrieve an authenticated token of your admin user by sending a POST request to 
  | the /auth/user/emailpass
   {
    "email": "admin@medusa-test.com",
    "password": "supersecret"
    }

  | Then, send a POST request to /admin/brands, passing the token received from the 
  | previous request in the Authorization header:
  |
  | 
    curl -X POST 'http://localhost:9000/admin/brands' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}' \
    --data '{
        "name": "Acme"
    }'

  | This returns the created brand in the response:

    {
      "brand": {
        "id": "01J7AX9ES4X113HKY6C681KDZJ",
        "name": "Acme",
        "created_at": "2024-09-09T08:09:34.244Z",
        "updated_at": "2024-09-09T08:09:34.244Z"
      }
    }
  |
  +----------- 
  | @Next  <!-- you'll learn how to extend data models and associate the brand with a product. -->
  | Since modules are isolated from one another, it's not possible to directly extend a module's
    data models.

    Instead, you define a link between the modules' data models.
  +----------- 
  | Ex :
 */
