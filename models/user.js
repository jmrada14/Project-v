module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define("User", {
        username : DataTypes.STRING,
        password : DataTypes.STRING
    });

    User.associate = (models) => {
        User.hasMany(models.Message, {
            onDelete: "cascade"
        })
    };
    return User
};
