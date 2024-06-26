const express = require('express')
const router = express.Router()
const apiController = require('../controllers/apiController')
const userController = require('../controllers/userController')
const groupController = require('../controllers/groupController')
const { checkUserJWT, checkUserPermission } = require('../middleware/JWTaction')
const roleController = require('../controllers/roleController')
const upload = require('../middleware/UploadImage')



// const imageFilter = function (req, file, cb) {
//     // Accept images only
//     if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
//         req.fileValidationError = 'Only image files are allowed!';
//         return cb(new Error('Only image files are allowed!'), false);
//     }
//     cb(null, true);
// };

const initApiRouter = (app) => {

    // router.all('*', checkUserJWT, checkUserPermission)

    // router.get('/blog', apiController.getApi)
    router.post('/register', apiController.handleRegister)
    router.post('/login', apiController.handleLogin)
    router.post('/logout', apiController.handlelogout)
    router.get('/account', userController.getUserAccount)
    router.post('/upload', apiController.handleUpload)
    // //users router
    router.get('/user/read', userController.getRead)
    router.post('/user/create', userController.getCreate)
    router.put('/user/update', userController.getUpdate)
    router.delete('/user/delete', userController.getDelete)

    // //roles router
    router.get('/role/read', roleController.getRead)
    router.post('/role/create', roleController.getCreate)
    router.put('/role/update', roleController.getUpdate)
    router.delete('/role/delete', roleController.getDelete)
    router.get('/role/by-group/:groupid', roleController.getRoleByGroup)
    router.post('/role/assign-to-group', roleController.getAssignRoleGroup)
    // // groups router
    router.get('/group/read', groupController.getGroupUser)

    //product
    router.post('/product/create', upload.single('image'), apiController.createproduct)
    router.post('/product/add_cart', apiController.AddCart);
    router.get('/product/read_cart', upload.single('image'), apiController.getCart);
    router.get('/product/read', apiController.getProduct)
    router.get('/product/read/:id', apiController.getProductId)
    router.get('/product/PaginationProduct', apiController.PaginationProduct)
    router.get('/product/read_PaginationProduct', apiController.getPaginationProduct)
    router.get('/product/read_discount', apiController.Discount)
    router.delete('/product/delete', apiController.DeleteProduct)
    router.get('/product/discountID/:id', apiController.getDiscountId)

    return app.use('/api/v1/', router)
}
module.exports = initApiRouter    