const express = require('express')
const homeController = require('../controllers/homeController')
const apiController = require('../controllers/apiController')
const router = express.Router()

const initWeb = (app) => {
    router.get('/user', homeController.getForm)
    router.get('/register', homeController.getRegister)
    router.post('/Create-user', homeController.PostUser)
    router.post('/delete/:id', homeController.getDelete)
    router.get('/edit/:id', homeController.getEdit)
    router.post('/update', homeController.PutUser)

    // router.get('/api/blog', apiController.getApi)

    router.get('/', (req, res) => {
        res.send('Hello')
    })

    return app.use('/', router)
}
module.exports = initWeb