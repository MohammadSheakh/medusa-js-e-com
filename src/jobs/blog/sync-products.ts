// Sync Products Once a Day

/*
assumes you already have a syncProductToErpWorkflow implemented. To execute this workflow once a day, create a scheduled job at src/jobs/sync-products.ts with the following content:
*/

import { MedusaContainer } from "@medusajs/framework/types";
// import { syncProductToErpWorkflow } from "../workflows/sync-products-to-erp";

export default async function syncProductsJob(container: MedusaContainer) {
  // await syncProductToErpWorkflow(container).run();
}

export const config = {
  name: "sync-products-job",
  schedule: "0 0 * * *", // 0 0 * * *Copy to Clipboard which indicates midnight time of every day.
};
