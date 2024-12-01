/*
A workflow is a series of queries and actions, called steps, that complete a task. You construct a workflow similar to how you create a JavaScript function.

However, unlike regular functions, workflows:

    Create an internal representation of your steps, allowing you to track them and their progress.
    Support defining roll-back logic for each step, so that you can handle errors gracefully and your data remain consistent across systems.
    Perform long actions asynchronously, giving you control over when a step starts and finishes.
*/

// A workflow is made of a series of steps.

import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk";

import {
  createWorkflow,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk";

const step1 = createStep("step-1", async () => {
  return new StepResponse(`Hello from step one!`);
});

type WorkflowInput = {
  name: string;
};

const step2 = createStep("step-2", async ({ name }: WorkflowInput) => {
  return new StepResponse(`Hello ${name} from step two!`);
});

// 2 step is created .. now we need to create a workflow that will run these steps

const myWorkflow = createWorkflow(
  "hello-world",

  function (input: WorkflowInput) {
    const str1 = step1();

    // to pass input

    const str2 = step2(input);

    return new WorkflowResponse({
      message: str2,
    });
  }
);

export default myWorkflow;

/*


Execute the Workflow#

You can execute a workflow from different customizations:

 ->   Execute in an API route to expose the workflow's functionalities to clients.
 ->    Execute in a subscriber to use the workflow's functionalities when a commerce operation is performed.
 ->  Execute in a scheduled job to run the workflow's functionalities automatically at a specified repeated interval.

    */
