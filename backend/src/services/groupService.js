const db = require('../models/index')

const getAllGroup = async () => {
    try {
        let userData = await db.Group.findAll({
            order: [['name', 'ASC']],
            raw: true
        })
        if (userData) {
            return {
                EM: 'return group success',
                EC: 1,
                DT: userData
            }
        } else {
            return {
                EM: 'false',
                EC: 0,
                DT: ''
            }
        }
    } catch (error) {
        console.log(error)
        return {
            EM: 'wrong',
            EC: -1,
            DT: ''
        }
    }
}


module.exports = {
    getAllGroup
}