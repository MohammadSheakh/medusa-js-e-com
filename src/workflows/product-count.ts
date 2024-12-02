// Access Medusa Container in Workflow Steps
//https://docs.medusajs.com/learn/basics/workflows#access-medusa-container-in-workflow-steps

import {
  createStep,
  StepResponse,
  createWorkflow,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk";
import { Modules } from "@medusajs/framework/utils";

const getProductCountStep = createStep(
  "get-product-count",
  async (_, { container }) => {
    // container property, which is the Medusa container to allow
    // you to resolve framework and commerce tools in your application
    const productModuleService = container.resolve(Modules.PRODUCT);

    // consider you want to implement a workflow that returns the total products in your application.

    const [, count] = await productModuleService.listAndCountProducts();

    return new StepResponse(count);
  }
);

const productCountWorkflow = createWorkflow("product-count", function () {
  const count = getProductCountStep();

  /*
  
  In getProductCountStep, you use the container to resolve
   the Product Module's main service. Then, you use its 
   listAndCountProducts method to retrieve the total count of 
   products and return it in the step's response. You then execute
    this step in the productCountWorkflow.

  You can now execute this workflow in a custom API route, scheduled job,
  or subscriber to get the total count of products.
  
  */
  return new WorkflowResponse({
    count,
  });
});

export default productCountWorkflow;
