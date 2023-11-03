const removeUser = require("../botDatabaseActions/removeUser");

//example:
module.exports = {
  // This event triggers when a member leaves the server
  name: "guildMemberRemove",
  async execute(member) {
    const memberId = member.user.id;

    // Remove the user from the database
    await removeUser
      .removeUser(memberId)
      .then((result) => {
        console.log("User removed successfully!");
      })
      .catch((err) => {
        console.error(err);
        console.log("There was an error removing the user.");
      });
  },
};
