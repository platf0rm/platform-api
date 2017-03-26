'use strict';

const Sequelize = require('sequelize');

const VoteModel = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  direction: Sequelize.ENUM('up', 'down'),
  vote_to: Sequelize.INTEGER,
}

module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', VoteModel, {
      timestamps: false,
      tableName: 'votes'
  });
  return Vote;
}

module.exports.VoteModel = VoteModel;
