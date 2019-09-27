
module.exports = (sequelize, DataTypes) => {
  let Message = sequelize.define("message", {
    text: DataTypes.STRING
  });

  Message.associate = (model) => {
    Message.belongsTo(model.Room, {
      foreignKey: { name: "roomId", field: "room_id" }
    });
    Message.belongsTo(model.User, {
      foreignKey: { name: "userId", field: "user_id" }
    });
  };
  return Message;
};
