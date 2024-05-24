const { Sequelize } = require('sequelize');
const db = require('../models/index')
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('projectoflong', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    logging: false
});

// for (let i = 0; i < 15; i++) {
//     account = {
//         name: `User_${i}`,
//         price: `email_${i}gmail.com`,
//         description: `Blablabla_${i}`
//     }
//     db.Product.create(account)
// }

const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
connection()