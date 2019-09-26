module.exports = (sequelize, DataTypes) => {
  let Message = sequelize.define("message", {
    text: DataTypes.STRING
  });

  Message.associate = models => {
    Message.belongsTo(models.Room, {
      foreignKey: { name: "roomId", field: "room_id" }
    });
    Message.belongsTo(models.User, {
      foreignKey: { name: "userId", field: "user_id" }
    });
  };
  return Message;
};
