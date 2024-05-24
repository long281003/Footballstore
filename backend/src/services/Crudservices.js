const { where } = require('sequelize');
const db = require('../models/index')
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const CreateUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const hardpassword = await hasspassword(data.password)
            const userdata = await db.User.create({
                username: data.username,
                email: data.email,
                password: hardpassword
            })
            resolve(userdata)
        } catch (error) {
            reject(error)
        }
    })
}

const hasspassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            var hash = await bcrypt.hashSync(password, salt);
            resolve(hash)
        } catch (error) {
            reject(error)
        }
    })
}

let getUser = async () => {
    //test relationship

    // let newUser = await db.User.findOne({
    //     where: { id: 1 },
    //     attributes: ["id", 'username', 'email'],
    //     include: { model: db.Group, attributes: ['name', 'description'] },
    //     raw: true,
    //     nest: true
    // })

    // let roles = await db.Role.findAll({
    // where: {id: 1},
    //     include: { model: db.Group, },
    //     raw: true,
    //     nest: true
    // })


    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findAll({
                attributes: ["id", 'username', 'email'],
                raw: true
            })
            resolve(users)
        } catch (error) {
            reject(error)
        }
    })
}

let Delete = (userid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let dele = await db.User.findOne({
                where: { id: userid }
            })
            if (dele) {
                await dele.destroy()
            }
            resolve()
        } catch (error) {

            reject(error)
        }
    })
}

let Edit = (userid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userid },
                raw: true
            })
            resolve(user)
        } catch (error) {

        }
    })
}

let updateuser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id }
            })
            if (user) {
                user.username = data.username,
                    user.email = data.email,
                    user.password = data.password
                await user.save()
                resolve()
            } else {
                resolve()
            }

        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    CreateUser, getUser, Delete, Edit, updateuser
}