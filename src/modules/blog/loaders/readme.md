When building a commerce application, you'll often need to execute an action the first time the application starts. For example, if you're integrating a non-supported database such as MongoDB, you want to establish the connection when the application starts and re-use it in your customizations.

In Medusa, you can execute an action when the application starts using a loader. A loader is a function exported by a module, which is a package of business logic for a single domain. When the Medusa application starts, it executes all loaders exported by configured modules.
