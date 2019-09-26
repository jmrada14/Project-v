module.exports = (sequelize, DataTypes) => {
    Room = sequelize.define("room", {
        name: {
            type: DataTypes.STRING,
            public: DataTypes.BOOLEAN
        }
    });

    Room.belongsToMany(models.User, {
        through: "room_member",
        foreignKey: {
            name: "roomId",
            field: "room_id"
        }
    });
    return room;
};
