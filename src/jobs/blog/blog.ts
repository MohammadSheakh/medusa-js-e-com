import { MedusaContainer } from "@medusajs/framework/types";
import { ContainerRegistrationKeys } from "@medusajs/framework/utils";

export default async function greetingJob(container: MedusaContainer) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER);

  logger.info("Blog is Updating");
}

export const config = {
  name: "greeting-every-minute", // A unique name for the job.
  schedule: "* * * * *", // A string that holds a cron expression indicating the schedule to run the job.
};
