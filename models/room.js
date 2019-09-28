module.exports = (sequelize, DataTypes) => {
    Room = sequelize.define("Room", {
        name: {
            type: DataTypes.STRING,
            public: DataTypes.BOOLEAN

        }
    });
    Room.associate = (model) => {
        Room.hasMany(model.Messages, {
           onDelete: "cascade"
        });

    };
    return Room;
};
