const jwt = require('jsonwebtoken')
require('dotenv').config()

const nonSecurePaths = ['/logout', '/login', '/register']

const createJWT = (payload) => {
    let key = process.env.JWT_SECRET;
    let token = null
    try {
        token = jwt.sign(payload, key, { expiresIn: process.env.JWT_EXPIRES_IN })
    } catch (error) {
        console.log(error)
    }
    return token;
}

const verifyToken = (token) => {
    let key = process.env.JWT_SECRET;
    let decoded = null;
    try {
        decoded = jwt.verify(token, key)
    } catch (error) {
        console.log(error)
    }
    return decoded
}

const extractToken = (req) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }
    return null;
}

const checkUserJWT = (req, res, next) => {
    if (nonSecurePaths.includes(req.path)) return next()
    let tokenFormheader = extractToken(req)
    let cookie = req.cookies;
    if ((cookie && cookie.jwt || tokenFormheader)) {

        let token = cookie && cookie.jwt ? cookie.jwt : tokenFormheader
        let decoded = verifyToken(token)
        if (decoded) {
            req.user = decoded
            req.token = token
            next()
        } else {
            return res.status(401).json({
                EC: -1,
                DT: '',
                EM: 'Not authenticated the user'
            })
        }
    }
    else {
        return res.status(401).json({
            EC: -1,
            DT: '',
            EM: 'Not authenticated the user'
        })
    }
}
const checkUserPermission = (req, res, next) => {
    if (nonSecurePaths.includes(req.path)) return next()
    // console.log('check: ', req.path)
    if (req.user) {
        let email = req.user.email
        let username = req.user.username
        let roles = req.user.groupWithRole.Roles
        let currentUrl = req.path;
        if (!roles || roles.length === 0) {
            return res.status(403).json({
                EC: -1,
                DT: '',
                EM: `you don't permission to access this resource...`
            })
        }
        let canAccess = roles.some(item => item.url === currentUrl || currentUrl.includes(item.url))
        if (canAccess === true) {
            next()
        } else {
            return res.status(403).json({
                EC: -1,
                DT: '',
                EM: `you don't permission to access this resource...`
            })
        }
    } else {
        return res.status(401).json({
            EC: -1,
            DT: '',

        })
    }
}
module.exports = {
    createJWT, verifyToken, checkUserJWT, checkUserPermission
}