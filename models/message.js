
module.exports = (sequelize, DataTypes) => {
  let Message = sequelize.define("Message", {
    text: DataTypes.STRING
  });

   Message.associate = (model) => {
      Message.belongsTo(model.Room)
     Message.belongsTo(model.User);
   };
  return Message;
};
