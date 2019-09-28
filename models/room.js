module.exports = (sequelize, DataTypes) => {
    Room = sequelize.define("Room", {
        name: {
            type: DataTypes.STRING,
            public: DataTypes.BOOLEAN

        }
    });
    Room.associate = (model) => {
        Room.hasMany(model.Message, {
           onDelete: "cascade"
        });

    };
    return Room;
};
