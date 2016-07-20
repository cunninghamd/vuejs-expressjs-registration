module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("user", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                notEmpty: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            },
        },
        firstName: {
            type: DataTypes.STRING,
            field: "first_name",
        },
        lastName: {
            type: DataTypes.STRING,
            field: "last_name",
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
            },
        },
        mobile: {
            type: DataTypes.STRING,
        },
    }, {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
    
    return user;
};
