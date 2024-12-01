Don't use scheduled jobs if:

    You want the action to execute at a specified schedule while the Medusa application isn't running. Instead, use the operating system's equivalent of a cron job.

    You want to execute the action once when the application loads. Use loaders instead.

    You want to execute the action if an event occurs. Use subscribers instead.
