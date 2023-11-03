# Discord Bot Setup System Using Docker Container

This documentation is about setting up a simple Discord bot using Docker container. The bot will be connected to a MySQL database using Node.js. This setup also includes phpMyAdmin.

## Setup
1. **Clone the repository:** Download the project to your local machine.
2. **Modify the Environment Variables:** Create an `.env` file and modify the token and client id that was provided to enable Node.js to connect to your bot. You should also modify the login credentials for phpMyAdmin and MySQL inside the docker-compose.yml file for security reasons. Here is the structure of the `.env` file:
```txt
token=MY_TOKEN
clientId=MY_BOT_ID
COMPOSE_PROJECT_NAME=my_discord_bot
```

docker-compose.yml:
```yaml
environment:
      MYSQL_DATABASE: my_discord_bot
      MYSQL_USER: user
      MYSQL_PASSWORD: passwd
      MYSQL_ROOT_PASSWORD: passwd
```

3. **Modify the Database Credentials:** If you have changed the MySQL credentials in the previous step, make sure to also modify the credentials inside `src/database/database.js`. Here is the structure of `database.js`:

```js
const pool = mysql.createPool({
  host: 'db', //the name of the service in the docker-compose.yml file
  user: 'user', 
  password: 'passwd',
  database: 'my_discord_bot', //the name of the database you want to connect to
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
```

4. **Run the Bot:** To run the bot, simply run the `start.bat` file in the root directory of the project.

## Note
It is highly recommended to modify the default login credentials for security reasons.

## Support
If you encounter any issues during the setup process, feel free to reach out to the support team.
