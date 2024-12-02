/**
  * @INFO <!--  Create createBrandWorkflow  -->
  |
  |--> createWorkflow function accepts two parameters: the workflow's unique name, 
  | and the workflow's constructor function holding the workflow's implementation.
  |
 */
import {
  createWorkflow,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk";
import { createBrandStep } from "./steps/create-brand";

export type CreateBrandInput = {
  name: string;
};

export const createBrandWorkflow = createWorkflow(
  "create-brand",
  (input: CreateBrandInput) => {
    const brand = createBrandStep(input);

    return new WorkflowResponse(brand);
  }
);

/**
  * @Next <!--  Expose Create Brand API Route  -->
  |
  |-->  we have a createBrandWorkflow that you can execute to create a brand.
  |  next chapter, you'll add an API route that allows admin users to create a brand. You'll learn how to 
  | create the API route, and execute in it the workflow you implemented in this chapter.
  |
  +----------- 
  | Ex :
 */
