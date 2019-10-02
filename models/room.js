module.exports = (sequelize, DataTypes) => {
    let Room = sequelize.define("Room", {
        name: {
            type: DataTypes.STRING,
            public: DataTypes.BOOLEAN

        }
    });
    Room.associate = (model) => {
        Room.hasMany(model.Message, {
            onDelete: "cascade"
        });

        Room.belongsToMany(model.User, {
            through: "UserRoom"
        });

    };
    return Room;
};
