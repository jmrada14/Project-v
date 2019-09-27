module.exports = (sequelize, DataTypes) => {
    Room = sequelize.define("room", {
        name: {
            type: DataTypes.STRING,
            public: DataTypes.BOOLEAN
        }
    });

    return Room;
};
