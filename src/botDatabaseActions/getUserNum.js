
const dbActions = require("../database/databaseActions");

//example:
module.exports = {
    getUserNum: function () {
        return new Promise((resolve, reject) => {
            // Get the number of users in the database using custom query
            dbActions
                .customQuery("SELECT COUNT(*) AS num FROM user")
                .then((result) => {
                    resolve(result[0].num);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
};