import { SubscriberArgs, type SubscriberConfig } from "@medusajs/framework";
import { ContainerRegistrationKeys } from "@medusajs/framework/utils";
import { createPostWorkflow } from "src/workflows/create-post";

export default async function postCreatedHandler({
  event: { data },
  container,
}: SubscriberArgs<{ id: string }>) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER);

  logger.info("Creating New Post...");

  await createPostWorkflow(container).run({
    input: {
      title: "My Post",
    },
  });
}

export const config: SubscriberConfig = {
  event: `post.created`,
};

/*

This subscriber file exports:

    An asynchronous subscriber function that's executed whenever the associated event, which is order.placed is triggered.
    A configuration object with an event property whose value is the event the subscriber is listening to. You can also pass an array of event names to listen to multiple events in the same subscriber.

*/
