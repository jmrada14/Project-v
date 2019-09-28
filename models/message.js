module.exports = (sequelize, DataTypes) => {
  let Message = sequelize.define("Message", {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }}
  });

   Message.associate = (model) => {
      Message.belongsTo(model.Room);
     Message.belongsTo(model.User);
   };
  return Message;
};
