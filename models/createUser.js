module.exports = {
    up: (migration, DataTypes, done) => {
        migration.createTable("Users", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            username: {
                type: DataTypes.STRING
            },
            password: {
                type: DataTypes.STRING
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE
            },
        }).done(done);
    },
    down: (migration, DataTypes, done) => {
        migration.dropTable("Users").done(done);
    }
};