// Access Medusa Container in Workflow Steps

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
    const productModuleService = container.resolve(Modules.PRODUCT);

    const [, count] = await productModuleService.listAndCountProducts();

    return new StepResponse(count);
  }
);

const productCountWorkflow = createWorkflow("product-count", function () {
  const count = getProductCountStep();

  return new WorkflowResponse({
    count,
  });
});

export default productCountWorkflow;
