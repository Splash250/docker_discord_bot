const db = require('./database');

module.exports = {
  insertInto: function(table, columns, values) {
    return new Promise((resolve, reject) => {
      let query = `INSERT INTO ${table} (${columns.join(', ')}) VALUES (${values.join(', ')})`;
      db.execute(query)
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  selectFrom: function(table, columns, condition = '') {
    return new Promise((resolve, reject) => {
      let query = `SELECT ${columns.join(', ')} FROM ${table} ${condition}`;
      db.execute(query)
        .then(([rows, fields]) => {
          resolve(rows);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  removeFrom: function(table, condition) {
    return new Promise((resolve, reject) => {
      let query = `DELETE FROM ${table} ${condition}`;
      db.execute(query)
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  update: function(table, columns, values, condition) {
    return new Promise((resolve, reject) => {
      let query = `UPDATE ${table} SET `;
      for (let i = 0; i < columns.length; i++) {
        query += `${columns[i]} = ${values[i]}`;
        if (i < columns.length - 1) {
          query += ', ';
        }
      }
      query += ` ${condition}`;
      db.execute(query)
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  customQuery: function(query) {
    return new Promise((resolve, reject) => {
      db.execute(query)
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  // Add more functions here if needed
  //ect...
};