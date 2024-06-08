const loginRegister = require('../services/loginRegister')
const productServices = require('../services/productServices')
const db = require('../models/index')
const cartServices = require('../services/cartServices')
let handleRegister = async (req, res) => {
    try {

        if (!req.body.email || !req.body.password || !req.body.phonenumber) {
            return res.status(200).json({
                EM: 'Missing required',
                EC: "1",
                DT: ''
            })
        }
        if (req.body.password && req.body.password <= 4) {
            return res.status(200).json({
                EM: 'Your is password must have more than 3 letters',
                EC: '1',
                DT: ''
            })
        }
        let data = await loginRegister.registerNewUser(req.body)
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
let handleLogin = async (req, res) => {
    try {
        let data = await loginRegister.loginUser(req.body)
        if (data && data.DT && data.DT.access_token) {
            res.cookie('jwt', data.DT.access_token, { httpOnly: true, maxAge: 60 * 60 * 1000 })

        }
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        return res.status(200).json({
            EM: 'login user error!',
            EC: 0,
            DT: ''
        })
    }
}
let handlelogout = async (req, res) => {
    try {
        await res.clearCookie('jwt')
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {

        return res.status(200).json({
            EM: 'something wrong',
            EC: 1,
            DT: ''
        })
    }
}

const handleUpload = (req, res) => {
    try {
        let files = req.file
        // console.log('check: ', files)
        return res.status(200).json({
            EM: 'success',
            EC: 0,
            DT: files
        })
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            EM: 'something wrong',
            EC: 1,
            DT: ''
        })
    }
}

// const CreatePrduct = async (req, res) => {
//     try {
//         let data = await productServices.CreateProduct(req.body)
//         return res.status(200).json({
//             EM: data.EM,
//             EC: data.EC,
//             DT: data.DT
//         })
//     } catch (error) {
//         console.log(error)
//         return res.status(200).json({
//             EM: 'something wrong',
//             EC: 1,
//             DT: ''
//         })
//     }
// }
const createproduct = async (req, res) => {
    try {
        let info = {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            image: req.file.filename,
            groupId: req.body.groupId,
        }
        // 
        const product = await db.Product.create(info);
        res.status(200).json({
            EM: 'success!',
            EC: 0,
            DT: product
        })
        console.log('image: ', req.file)
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            EM: 'something wrong',
            EC: 1,
            DT: ''
        })
    }
}

const getProduct = async (req, res) => {
    try {
        let data = await productServices.readProduct()
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            EM: 'something wrong',
            EC: 1,
            DT: ''
        })
    }
}

const getProductId = async (req, res) => {
    try {
        let id = req.params.id
        let data = await productServices.Productid(id)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        console.log(error)
        return res.status.json({
            EM: 'something wrong',
            EC: 1,
            DT: ''
        })
    }
}

const PaginationProduct = async (req, res) => {
    try {
        let page = req.query.page;
        let limit = req.query.limit;
        let data = await productServices.getPagination(+page, +limit)
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

const DeleteProduct = async (req, res) => {
    try {
        let data = await productServices.getdelete(req.body.id)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            EM: 'something wrong',
            EC: 1,
            DT: ''
        })
    }
}

const AddCart = async (req, res) => {
    let Productid = req.body.Productid;
    let newQuantity = 1;
    req.user.getCart().then((cart) => {
        if (!cart) {
            return req.user.createCart();
        }
        return cart;
    }).then(cart => {
        fetchedCart = cart;
        return cart.getProduct({ where: { id: Productid } })
    }).then(products => {
        if (products.length) {
            newQuantity = products[0].cartItem.quantity + 1;
        }
        return db.Product.findByPk(Productid);
    }).then((product) => {
        return fetchedCart.addProduct(product, { through: { quantity: newQuantity } })
    }).catch((error) => {
        console.log(error)
    })
}

const getCart = async (req, res) => {
    try {
        let data = await cartServices.cartproduct(req.body)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            EM: 'get cart error!',
            EC: -1,
            DT: ''
        })
    }
}

const Discount = async (req, res) => {
    try {
        let data = await productServices.getdiscount()
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })

    } catch (error) {
        console.log(error)
        return res.status(200).json({
            EM: 'get discount error!',
            EC: -1,
            DT: ''
        })
    }
}
const getDiscountId = async (req, res) => {
    try {
        let discountID = await productServices.getIDdiscount(req.params.id)
        return res.status(200).json({
            EM: discountID.EM,
            EC: discountID.EC,
            DT: discountID.DT
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            EM: 'get discount error!',
            EC: -1,
            DT: ''
        })
    }
}

const getPaginationProduct = async (req, res) => {
    try {
        let page = req.query.page;
        let limit = req.query.limit;
        let data = await productServices.getPaginationPRD(+page, +limit)
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

module.exports = {
    handlelogout, handleRegister, handleLogin, handleUpload, Discount, getDiscountId, getPaginationProduct,
    getProduct, PaginationProduct, DeleteProduct, getProductId, createproduct, AddCart, getCart
}