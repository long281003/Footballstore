const db = require('../models/index')
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const { getGroupWithRoles } = require('./JWTService')
const { Op } = require('sequelize');
const { createJWT } = require('../middleware/JWTaction')
let hasspassword = async (userpassword) => {
    let hash = await bcrypt.hashSync(userpassword, salt);
    return hash
}

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

let registerNewUser = async (data) => {
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

        let hashcheckpassword = await hasspassword(data.password);
        await db.User.create({
            username: data.username,
            email: data.email,
            phonenumber: data.phonenumber,
            password: hashcheckpassword,
            groupId: 3
        })

        return {
            EM: "create user successfully",
            EC: 0,
            DT: data.username
        }

    } catch (error) {
        console.log(error)
        return {
            EM: 'wrong',
            ER: '-1',
            DT: ''
        }
    }
}

const chechPassword = (password, hasspassword) => {
    return bcrypt.compareSync(password, hasspassword)
}

let loginUser = async (data) => {
    try {
        let user = await db.User.findOne({
            where: {
                [Op.or]: [
                    { email: data.ValueLogin },
                    { phonenumber: data.ValueLogin }
                ]
            },
            raw: true
        })

        if (user) {
            let check = chechPassword(data.password, user.password)

            if (check) {
                let groupWithRole = await getGroupWithRoles(user);
                let payload = {
                    email: user.email,
                    username: user.username,
                    groupWithRole,

                }
                let token = createJWT(payload)
                return {
                    EM: 'ok',
                    EC: 0,
                    DT: {
                        access_token: token,
                        groupWithRole,
                        email: user.email,
                        username: user.username

                    }
                }
            }
        }
        return {
            EM: 'Your email/phone number or password is incrrect!',
            EC: 1,
            DT: ''
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
    registerNewUser, loginUser
}