/*
you'll create a workflow that creates a brand.


The workflow you'll create in this chapter will use the Brand Module's service to implement the
 feature of creating a brand. In the next chapter, you'll expose an API route that allows admin
  users to create a brand, and you'll use this workflow in the route's implementation.



  A workflow consists of a series of steps, each step created in a TypeScript or JavaScript file
   under the src/workflows directory. A step is defined using the createStep utility function

   The workflow you're creating in this guide has one step to create the brand.
*/
import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk";
import { BRAND_MODULE } from "../../../../modules/brand";
import BrandModuleService from "../../../../modules/brand/service";

export type CreateBrandStepInput = {
  name: string;
};

export const createBrandStep = createStep(
  "create-brand-step", // steps unique name
  async (input: CreateBrandStepInput, { container }) => {
    // asynchronous step function
    // input passed to the step when it's invoked, and an object of general context and configurations.
    //  This object has a container property, which is the Medusa container.

    /*
      The Medusa container is a registry of framework and commerce tools accessible in your customizations,
      such as a workflow's step. The Medusa application registers the services of core and custom modules 
      in the container, allowing you to resolve and use them.

      So, In the step function, you use the Medusa container to resolve the Brand Module's service and use
      its generated createBrands method, which accepts an object of brands to create.
    */

    const brandModuleService: BrandModuleService =
      container.resolve(BRAND_MODULE);

    const brand = await brandModuleService.createBrands(input);

    return new StepResponse(brand, brand.id);
    /* StepResponse's first parameter is the data returned by the step, and the second is the data passed to the
      compensation function, which you'll learn about next.
      ============================
      You define for each step a compensation function that's executed when an error occurs in the workflow. The compensation function
      defines the logic to roll-back the changes made by the step. This ensures your data remains consistent if an error occurs, which
      is especially useful when you integrate third-party services.

     */
  },
  // To add a compensation function to the createBrandStep, pass it as a third parameter to createStep
  async (id: string, { container }) => {
    // The compensation function's first parameter is the brand's ID which you passed as a second parameter to the step function's
    // returned StepResponse.
    const brandModuleService: BrandModuleService =
      container.resolve(BRAND_MODULE);

    await brandModuleService.deleteBrands(id);
  }
);

/**
  * @Next <!-- Create createBrandWorkflow  -->
  |
  |--> create the file src/workflows/create-brand/index.ts
  | but for us we create src/workflows/brand/create-brand/index.ts
  |
  +----------- 
  | Ex :
 */
