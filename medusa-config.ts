//This file holds your Medusa configurations, such as your PostgreSQL database configurations.
import { loadEnv, defineConfig } from "@medusajs/framework/utils";

loadEnv(process.env.NODE_ENV || "development", process.cwd());

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
  },
  modules: [
    /*
    Each object in the modules array has a resolve property, whose value is either a path to the module's directory, or an npm package’s name.
     */
    {
      resolve: "./src/modules/blog",
    },
  ],
});
