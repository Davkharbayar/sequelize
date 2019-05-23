module.exports = (sequelize, Sequelize) => {
    const system_users = sequelize.define('system_users', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: Sequelize.STRING
        },
        lastname: {
            type: Sequelize.STRING
        },
        firstname: {
            type: Sequelize.STRING
        },
        mobile: {
            type: Sequelize.STRING
        },                                         
        password: {
            type: Sequelize.STRING
        },
        isactive: {
            type: Sequelize.INTEGER
        },
        roleid: {
            type: Sequelize.INTEGER
        }                   
    },
    {
        underscored: true
    });

return system_users;

} 
