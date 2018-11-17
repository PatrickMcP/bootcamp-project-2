module.exports = function(sequelize, DataTypes) {
  var Course = sequelize.define("Course", {
    courseName: DataTypes.STRING,
    slopeRating: DataTypes.FLOAT,
    courseRating: DataTypes.FLOAT,
    hole1Par: DataTypes.INTEGER,
    hole2Par: DataTypes.INTEGER,
    hole3Par: DataTypes.INTEGER,
    hole4Par: DataTypes.INTEGER,
    hole5Par: DataTypes.INTEGER,
    hole6Par: DataTypes.INTEGER,
    hole7Par: DataTypes.INTEGER,
    hole8Par: DataTypes.INTEGER,
    hole9Par: DataTypes.INTEGER,
    hole10Par: DataTypes.INTEGER,
    hole11Par: DataTypes.INTEGER,
    hole12Par: DataTypes.INTEGER,
    hole13Par: DataTypes.INTEGER,
    hole14Par: DataTypes.INTEGER,
    hole15Par: DataTypes.INTEGER,
    hole16Par: DataTypes.INTEGER,
    hole17Par: DataTypes.INTEGER,
    hole18Par: DataTypes.INTEGER
  });

  Course.associate = function(models) {
    Course.hasMany(models.Round, {});
  };
  return Course;
};
