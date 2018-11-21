module.exports = function(sequelize, DataTypes) {
  var Round = sequelize.define("Round", {
    hole1Score: DataTypes.INTEGER,
    hole2Score: DataTypes.INTEGER,
    hole3Score: DataTypes.INTEGER,
    hole4Score: DataTypes.INTEGER,
    hole5Score: DataTypes.INTEGER,
    hole6Score: DataTypes.INTEGER,
    hole7Score: DataTypes.INTEGER,
    hole8Score: DataTypes.INTEGER,
    hole9Score: DataTypes.INTEGER,
    hole10Score: DataTypes.INTEGER,
    hole11Score: DataTypes.INTEGER,
    hole12Score: DataTypes.INTEGER,
    hole13Score: DataTypes.INTEGER,
    hole14Score: DataTypes.INTEGER,
    hole15Score: DataTypes.INTEGER,
    hole16Score: DataTypes.INTEGER,
    hole17Score: DataTypes.INTEGER,
    hole18Score: DataTypes.INTEGER
  });
  return Round;
};
