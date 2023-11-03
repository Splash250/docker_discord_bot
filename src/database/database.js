const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'db', //the name of the service in the docker-compose.yml file
  user: 'user', 
  password: 'passwd',
  database: 'my_discord_bot', //the name of the database you want to connect to
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();