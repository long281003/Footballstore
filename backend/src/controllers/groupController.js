const groupService = require('../services/groupService')

const getGroupUser = async (req, res) => {
    try {

        let data = await groupService.getAllGroup()
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            EM: 'something wrong',
            EC: '-1',
            DT: ''
        })
    }
}

module.exports = {
    getGroupUser,
}