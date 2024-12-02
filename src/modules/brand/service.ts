/*
You perform database operations on your data models in a service, which is a class exported by the module and acts like an interface to its functionalities.

In this step, you'll create the Brand Module's service that provides methods to manage the Brand data model.

*/

import { MedusaService } from "@medusajs/framework/utils";
import { Brand } from "./models/brand";

class BrandModuleService extends MedusaService({
  Brand,
}) {}

export default BrandModuleService;

/*
The MedusaService function receives an object of the module's data models as a parameter, and generates methods to manage those data models. So, the BrandModuleService now has methods like createBrands and retrieveBrand to manage the Brand data model.
*/
// we will use these methods in the next chapters ..
