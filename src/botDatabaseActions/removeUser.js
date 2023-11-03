const dbActions = require("../database/databaseActions");
//example:
module.exports = {
    removeUser: function (userId) {
        return new Promise((resolve, reject) => {
            // Remove the user from the database with the given user id
            dbActions
                .removeFrom("user", `WHERE user_id = ${userId}`)
                .then((result) => {
                    resolve(result);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
};
