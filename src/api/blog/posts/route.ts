import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { createPostWorkflow } from "../../../workflows/create-post";

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const { result: post } = await createPostWorkflow(req.scope).run({
    input: {
      title: "My Post",
    },
  });

  res.json({
    post,
  });
}

//  This adds a POST API route at /blog/posts. In the API route, you
//  execute the createPostWorkflow by invoking it, passing it the
//  Medusa container in req.scope, then invoking the runCopy to
//  Clipboard method. In the run method, you pass the workflow's
//  input in the input property.

// To test this out, start the Medusa application:

//> npm run dev
// > Then, send a POST request to /blog/posts:
