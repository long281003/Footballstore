const { where } = require('sequelize');
const db = require('../models/index')
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

let CheckEmailUser = async (dataEmail) => {
    let userEmail = await db.User.findOne({
        where: {
            email: dataEmail
        }
    })
    if (userEmail) {
        return true
    }
    return false
}

let ChecPhoneUser = async (dataPhone) => {
    let userPhone = await db.User.findOne({
        where: {
            phonenumber: dataPhone
        }
    })
    if (userPhone) {
        return true
    }
    return false
}

const CreateUser = async (data) => {
    try {
        let Emaiexst = await CheckEmailUser(data.email)

        if (Emaiexst) {
            return {
                EM: 'The email has exist',
                EC: '1',
                DT: data.email,
            }
        }
        let PhoneExist = await ChecPhoneUser(data.phonenumber)
        if (PhoneExist) {
            return {
                EM: 'The phonenumber has exist',
                EC: '1',
                DT: data.phonenumber
            }
        }
        const hardpassword = await hasspassword(data.password)
        const userdata = await db.User.create({
            username: data.username,
            email: data.email,
            phonenumber: data.phonenumber,
            password: hardpassword,
            address: data.address,
            gender: data.gender,
            groupId: data.groupId
        })
        return {
            EM: "missing require",
            EC: 0,
            DT: userdata
        }
    } catch (error) {
        console.log(error)
        return {
            EM: "something wrong require",
            EC: -1,
            DT: ''
        }
    }

}

let hasspassword = async (userpassword) => {
    let hash = await bcrypt.hashSync(userpassword, salt);
    return hash
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

let Delete = async (userid) => {
    try {
        let dele = await db.User.findOne({
            where: { id: userid },
        })
        if (dele) {
            await dele.destroy()
            return {
                EM: "missing require",
                EC: 0,
                DT: dele.email
            }
        } else {
            return {
                EM: "wrong",
                EC: 1,
                DT: ''
            }
        }
    } catch (error) {
        console.log(error)
        return {
            EM: "some thing wrong",
            EC: -1,
            DT: ''
        }
    }

}

let Edit = async (userid) => {

    try {
        let user = await db.User.findOne({
            where: { id: userid },
            raw: true
        })
    } catch (error) {
        console.log(error)
    }

}

let updateUser = async (data) => {

    try {
        let user = await db.User.findOne({
            where: { id: data.id }
        })
        if (user) {
            user.username = data.username,
                user.email = data.email,
                user.phonenumber = data.phonenumber,
                user.password = data.password,
                user.address = data.address,
                user.gender = data.gender,
                user.groupId = data.groupId
            await user.save()
            return {
                EM: "missing require",
                EC: 0,
                DT: ''
            }

        } else {
            return {
                EM: "faill require",
                EC: 1,
                DT: ''
            }
        }

    } catch (error) {
        return {
            EM: "something wrong",
            EC: -1,
            DT: ''
        }
    }
}

let getPagination = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;
        let { count, rows } = await db.User.findAndCountAll({
            attributes: ['id', 'username', 'email', 'groupId'],
            include: { model: db.Group, attributes: ['name', 'description'] },
            order: [['id', 'DESC']],
            offset: offset,
            limit: limit
        })
        let totalPages = Math.ceil(count / limit);
        let Data = {
            totalRow: count,
            totalPage: totalPages,
            users: rows
        }
        return {
            EM: "missing require",
            EC: 0,
            DT: Data
        }
    } catch (error) {
        return {
            EM: "wrong server",
            EC: -1,
            DT: []
        }
    }
}

module.exports = {
    CreateUser, getUser, Delete, Edit, updateUser, getPagination, CheckEmailUser, ChecPhoneUser
}