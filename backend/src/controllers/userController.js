const userService = require('../services/userServices')

const getRead = async (req, res) => {
    try {
        // console.log('cookie', req.user)
        let page = req.query.page;
        let limit = req.query.limit;
        let data = await userService.getPagination(+page, +limit)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            EM: 'get user error!',
            EC: -1,
            DT: ''
        })
    }
}

const getCreate = async (req, res) => {
    try {
        let user = req.body;
        let data = await userService.CreateUser(user)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        return res.status(200).json({
            EM: 'create user error!',
            EC: 0,
            DT: ''
        })
    }
}
const getDelete = async (req, res) => {
    try {
        let id = req.body.id
        let daleteData = await userService.Delete(id)
        return res.status(200).json({
            EM: daleteData.EM,
            EC: daleteData.EC,
            DT: daleteData.DT
        })
    } catch (error) {
        return res.status(200).json({
            EM: 'delete user error!',
            EC: 0,
            DT: ''
        })
    }
}

const getEdit = async (req, res) => {
    try {
        let id = req.body.id
        let data = await userService.Edit(id)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        return res.status(200).json({
            EM: 'error!',
            EC: -1,
            DT: ''
        })
    }
}

const getUpdate = async (req, res) => {
    try {
        let id = req.body.id
        let data = await userService.updateUser(id)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        return res.status(200).json({
            EM: 'error!',
            EC: -1,
            DT: ''
        })
    }
}

const getUserAccount = async (req, res) => {
    return res.status(200).json({
        EM: 'ok',
        EC: 0,
        DT: {
            access_token: req.token,
            groupWithRole: req.user.groupWithRole,
            email: req.user.email,
            username: req.user.username
        }
    })
}

module.exports = {
    getRead, getCreate, getDelete, getEdit, getUpdate, getUserAccount
}