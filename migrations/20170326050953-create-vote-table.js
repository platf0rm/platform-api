const { VoteModel } = require('../models/vote');

module.exports = {
  up: (queryInterface) => {
    queryInterface.createTable(
      'votes', VoteModel,
    );
  },

  down: () => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  },
};
