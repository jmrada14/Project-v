let bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
    let NewUser = sequelize.define("User", {
        username: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        classMethods: {
            associate: (models) => {
                // associations go here
            },
            generateHash: (password) => {
                return bcrypt.hashSync(password, bcrypt.genSaltSync(15), null);
            }
        },
        instanceMethods: {
            validPassword: (password) => {
                return bcrypt.compareSync(password, this.password);
            }
        }
    });

    return NewUser;
};