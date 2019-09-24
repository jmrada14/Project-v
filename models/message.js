module.exports = (sequelize, DataTypes) => {

  let Message = sequelize.define("Message", {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }}
  });
  return Message;
};

