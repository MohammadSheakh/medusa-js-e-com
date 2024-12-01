import { LoaderOptions } from "@medusajs/framework/types";
import { ContainerRegistrationKeys } from "@medusajs/framework/utils";

export default async function blogLoader({ container }: LoaderOptions) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER);

  logger.info("[helloBlog]: Hello, blogLoader!");
}

/**
  Example: Register Custom MongoDB Connection
  https://docs.medusajs.com/learn/basics/loaders#example-register-custom-mongodb-connection
 
 */

/*
After implementing the loader, you must export it in the module's definition in the index.ts file at the root of the module's directory. Otherwise, the Medusa application will not run it.

So, to export the loader you implemented above in the hello module, add the following to src/modules/hello/index.ts:
*/
