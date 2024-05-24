const db = require('../models/index')

const createNewRole = async (roles) => {
    try {
        let currentRole = await db.Role.findAll({
            attributes: ['url', 'description'],
            raw: true
        })
        const persists = roles.filter(({ url: url1 }) => !currentRole.some(({ url: url2 }) => url1 === url2));
        if (persists.length === 0) {
            return {
                EM: "Nothing to create",
                EC: 0,
                DT: []
            }
        }
        await db.Role.bulkCreate(roles);
        return {
            EM: `Create role success: ${persists.length} success!`,
            EC: 0,
            DT: []
        }
    } catch (error) {
        console.log(error)
        return {
            EM: "Something error server",
            EC: 0,
            DT: []
        }
    }
}

const getAllrole = async () => {
    try {
        let data = await db.Role.findAll({
            attributes: ['id', 'url', 'description'],
            order: [['id', 'DESC']]
        })
        return {
            EM: `Get roles success`,
            EC: 0,
            DT: data,
        }
    } catch (error) {
        console.log(error)
        return {
            EM: `Nothing success`,
            EC: 1,
            DT: '',
        }
    }
}
const DeleteRole = async (idRole) => {
    try {
        let deleteRole = await db.Role.findOne({
            where: { id: idRole }
        })
        if (deleteRole) {
            await deleteRole.destroy();
        }
        return {
            EM: 'delete success',
            EC: 0,
            DT: ''
        }
    } catch (error) {
        console.log(error)
        return {
            EM: 'something wrong',
            EC: -1,
            DT: ''
        }
    }
}

const getRoleGroup = async (id) => {
    try {
        if (!id) {
            return {
                EM: `Not found any success`,
                EC: 0,
                DT: []
            }
        }
        let roles = await db.Group.findOne({
            where: { id: id },
            attributes: ["id", "name", "description"],
            include: {
                model: db.Role,
                attributes: ["id", "url", "description"],
                through: { attributes: [] }
            },
        })
        return {
            EM: `get Role success`,
            EC: 0,
            DT: roles
        }
    } catch (error) {
        console.log(error)
        return {
            EM: 'something wrong server',
            EC: -1,
            DT: ''
        }
    }
}

const getRoleByGroup = async (id) => {
    try {
        if (!id) {
            return {
                EM: 'Not found any role ',
                EC: 0,
                DT: ''
            }
        }
        let role = await db.Group.findOne({
            where: { id: id },
            attributes: ["id", "name", "description"],
            include: {
                model: db.Role,
                attributes: ["id", "url", "description"],
                through: { attributes: [] }
            },
        })
        return {
            EM: 'delete success',
            EC: 0,
            DT: role
        }
    } catch (error) {
        console.log(error)
        return {
            EM: 'something wrong',
            EC: -1,
            DT: ''
        }
    }
}

const getAssignRoleGroup = async (data) => {
    try {
        //  data = {groupId: 4, groupRole: [{}, {}]}
        await db.bulkCreate.destroy({
            where: { groupId: +data.groupId },

        })
        await db.Group_role.bulkCreate(data.groupRole)
        return {
            EM: 'success!',
            EC: 0,
            DT: []
        }
    } catch (error) {
        console.log(error)
        return {
            EM: 'something wrong',
            EC: -1,
            DT: ''
        }
    }
}

module.exports = {
    createNewRole, getAllrole, DeleteRole, getRoleGroup, getRoleByGroup, getAssignRoleGroup
}