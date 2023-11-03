const dbActions = require("../database/databaseActions");
//example:
module.exports = {
  addUser: function (userId, userName) {
    return new Promise((resolve, reject) => {
      // Insert the user into the database with the given user id and user name
      dbActions
        .insertInto("user", ["user_id", "user_name"], [userId, `'${userName}'`])
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
