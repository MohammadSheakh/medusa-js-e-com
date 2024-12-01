// customer-created.ts

import {
  type SubscriberConfig,
  type SubscriberArgs,
} from "@medusajs/framework";
import myWorkflow from "../workflows/hello-world";

export default async function handleCustomerCreate({
  event: { data },
  container,
}: SubscriberArgs<{ id: string }>) {
  const { result } = await myWorkflow(container).run({
    input: {
      name: "John",
    },
  });

  console.log(result);
}

export const config: SubscriberConfig = {
  event: "order.placed",
};
