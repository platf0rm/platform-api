const Sequelize = require('sequelize');
const sequelize = require('../db/connection').sequelize;

const VoteModel = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  direction: Sequelize.ENUM('up', 'down'),
  vote_to: Sequelize.INTEGER,
}

const Vote = sequelize.define('vote', VoteModel, {
    timestamps: false
});

module.exports.VoteModel = VoteModel;
module.exports.Vote = Vote;