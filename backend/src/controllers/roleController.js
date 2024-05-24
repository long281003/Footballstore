const roleApiServices = require('../services/roleApiService')

const getCreate = async (req, res) => {
    try {

        let data = await roleApiServices.createNewRole(req.body)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: 'create user error!',
            EC: 0,
            DT: ''
        })
    }
}
const getRead = async (req, res) => {
    try {

        let data = await roleApiServices.getAllrole()
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        return res.status(500).json({
            EM: 'error!',
            EC: 0,
            DT: ''
        })
    }
}
const getUpdate = async (req, res) => {

}
const getDelete = async (req, res) => {
    try {

        let data = await roleApiServices.DeleteRole(req.body.id)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: 'error!',
            EC: 0,
            DT: ''
        })
    }
}
const getRoleByGroup = async (req, res) => {
    try {
        let id = req.params.id
        let data = await roleApiServices.getRoleByGroup(id)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: 'error!',
            EC: 0,
            DT: ''
        })
    }
}

const getAssignRoleGroup = async (req, res) => {
    try {
        let data = await roleApiServices.getAssignRoleGroup(req.body.data)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: 'error!',
            EC: 0,
            DT: ''
        })
    }
}
module.exports = {
    getCreate, getRead, getUpdate, getDelete, getRoleByGroup, getAssignRoleGroup
}