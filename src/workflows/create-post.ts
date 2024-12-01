/*
A workflow is a task made up of a series of steps, and you construct it like you would a regular function, but it's a special function that supports rollback mechanism in case of errors, background execution, and more.
*/
import {
  createStep,
  createWorkflow,
  StepResponse,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk";
import { BLOG_MODULE } from "../modules/blog";
import BlogModuleService from "../modules/blog/service";

type CreatePostWorkflowInput = {
  title: string;
};

const createPostStep = createStep(
  "create-post",
  async ({ title }: CreatePostWorkflowInput, { container }) => {
    const blogModuleService: BlogModuleService = container.resolve(BLOG_MODULE);

    const post = await blogModuleService.createPosts({
      title,
    });

    return new StepResponse(post, post);
  },
  async (post, { container }) => {
    const blogModuleService: BlogModuleService = container.resolve(BLOG_MODULE);

    await blogModuleService.deletePosts(post.id);
  }
);

export const createPostWorkflow = createWorkflow(
  "create-post",
  (postInput: CreatePostWorkflowInput) => {
    const post = createPostStep(postInput);

    return new WorkflowResponse(post);
  }
);
