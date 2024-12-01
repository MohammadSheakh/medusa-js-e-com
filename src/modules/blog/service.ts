import { MedusaService } from "@medusajs/framework/utils";

import Post from "./models/post";

class BlogModuleService extends MedusaService({
  Post,
}) {
  // The MedusaService function accepts an object of data models,
  //  and returns a class with generated methods for data-management
  //   Create, Read, Update, and Delete (CRUD) operations on those
  //    data models.
  //-------------------------------------
  // If a module doesn't have data models, such as
  //  when it's integrating a third-party service, it
  //   doesn't need to extend MedusaService.
}

export default BlogModuleService;
