'use strict';
module.exports = (sequelize, DataTypes) => {
  var Hobby = sequelize.define('Hobby', {
    hobby: DataTypes.STRING,
    desciption: DataTypes.STRING
  }, {});
  Hobby.associate = function(models) {
    // associations can be defined here
  };
  return Hobby;
};