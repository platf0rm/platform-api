'use strict';

var {VoteModel} = require('../models/vote');

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable(
      'votes', VoteModel
    )
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
