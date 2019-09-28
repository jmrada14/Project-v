module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define("User", {
        username : DataTypes.STRING,
        password : DataTypes.STRING
    });

     User.associate = (models) => {
         User.hasMany(models.Message, {
             onDelete: "cascade"
         });
     };
     User.associate = (models) => {
         User.belongsToMany(models.Room, {
             through: "UserRoom",
         });
     };

    return User;
};
