/**
  * @INFO <!--  3.2.2. Create Links between Brand and Product Records  -->
  |
  |--> The remote link is a class with utility methods to manage links between data models' records.
  |
 */
import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk";
import { Modules, ContainerRegistrationKeys } from "@medusajs/framework/utils";
import { BRAND_MODULE } from "@src/modules/brand";

type LinkProductToBrandStepInput = {
  productId: string;
  brandId: string;
};

export const linkProductToBrandStep = createStep(
  "link-product-to-brand",
  async (
    { productId, brandId }: LinkProductToBrandStepInput,
    { container }
  ) => {
    const remoteLink = container.resolve(ContainerRegistrationKeys.REMOTE_LINK);

    remoteLink.create({
      [Modules.PRODUCT]: {
        product_id: productId,
      },
      [BRAND_MODULE]: {
        brand_id: brandId,
      },
    });

    return new StepResponse(undefined, {
      productId,
      brandId,
    });
  },
  async ({ productId, brandId }: any, { container }) => {
    const remoteLink = container.resolve(ContainerRegistrationKeys.REMOTE_LINK);

    remoteLink.dismiss({
      [Modules.PRODUCT]: {
        product_id: productId,
      },

      [BRAND_MODULE]: {
        brand_id: brandId,
      },
    });
  }
);

/**
  * @Next <!-- Extend Create Product API Route  -->
  |
  |-->   you'll extend the Create Product API route to allow passing a brand ID, and link a
  | product to a brand.
  |  
  +----------- 
  | @Next  <!--  -->
  | 
  |-->
  | 
  +----------- 
  | Ex :
 */
