# Discord Bot Setup System Using Docker Container

This documentation is about setting up a simple Discord bot using Docker container. The bot will be connected to a MySQL database using Node.js. This setup also includes phpMyAdmin.

## Setup
1. **Clone the repository:** Download the project to your local machine.
2. **Modify the Environment Variables:** Rename the `.env.example` file to `.env` and modify the TOKEN and CLIENTID that was provided to enable Node.js to connect to your bot.
## Note
You can get your Discord bot token and clientId from [here](https://discord.com/developers/applications "Discord Developer Portal").
Here is the structure of the `.env` file:
```txt
TOKEN=MY_TOKEN_HERE
CLIENTID=MY_CLIENT_ID_HERE
COMPOSE_PROJECT_NAME=docker_discord_bot
MYSQL_HOST=db
MYSQL_USER=user
MYSQL_PASSWORD=passwd
MYSQL_ROOT_PASSWORD=passwd
MYSQL_DATABASE=my_discord_bot
```
## Note
You should also modify the login credentials for the MySQL Database.
It's highly recommended not to change the host from db to anything else unless you know what you are doing.

## Further steps
1. **For a clean project** If you've just cloned this repository, then you have to run the `npm_install.bat` so the node_modules folder is generated (node_modules must be generated in order for the bot container to work).
2. **Run the Bot:** To run the bot, simply run the `start_container.bat` file in the root directory of the project.
3. **Rebuild the Bot:** If you install a new npm package using the `package_install.bat` you have to also run the `rebuild_container.bat` in order for the package changes to take place at the container's side.