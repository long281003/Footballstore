const Crudservices = require('../services/Crudservices')
let getRegister = (req, res) => {
    res.render('register.ejs', {
    })
}

const getForm = async (req, res) => {
    try {
        let data = await Crudservices.getUser()
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

const PostUser = async (req, res) => {
    try {
        let user = req.body;
        console.log(user)
        let data = await Crudservices.CreateUser(user)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        return res.status(200).json({
            EM: 'create user error!',
            EC: 0,
            DT: data
        })
    }
}
const getDelete = async (req, res) => {
    try {
        let id = req.body.id
        let daleteData = await Crudservices.Delete(id)
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
        let data = await Crudservices.Edit(id)
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

const PutUser = async (req, res) => {
    try {
        let id = req.body.id
        let data = await Crudservices.updateuser(id)
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

module.exports = {
    getForm, PostUser, getDelete, getEdit, PutUser, getRegister
}