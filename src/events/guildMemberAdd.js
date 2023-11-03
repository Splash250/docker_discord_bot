const addUser = require('../botDatabaseActions/addUser');


//example:
module.exports = {
  // This event triggers when a new member joins the server
  name: "guildMemberAdd",
  async execute(member) {
    const memberId = member.user.id;
    const memberName = member.user.username;

    // Add the joined user to the database
    await addUser
      .addUser(memberId, memberName)
      .then((result) => {
        console.log("User added successfully!");
      })
      .catch((err) => {
        console.error(err);
        console.log("There was an error adding the user.");
      });
  },
};
