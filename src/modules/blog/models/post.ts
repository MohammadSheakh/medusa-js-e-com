import { model } from "@medusajs/framework/utils";
import { title } from "process";

// snake_case names
const Post = model.define("post", {
  id: model.id().primaryKey(),
  title: model.text(),
  // Data models automatically have the date properties
  //  created_at, updated_at, and deleted_at,
  //   so you don't need to add them manually.
});

export default Post;
