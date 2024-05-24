const db = require('../models/index')

// const CreateProduct = async (data) => {
//     try {

//         // const imagBuffer = fs.readFileSync(data.image)
//         let productdata = await db.Product.create({
//             name: data.name,
//             price: data.price,
//             description: data.description,
//             startDate: data.startDate,
//             groupId: data.groupId
//         })
//         return {
//             EM: 'success!',
//             EC: 0,
//             DT: productdata
//         }
//     } catch (error) {
//         console.log(error)
//         return {
//             EM: 'something wrong',
//             EC: 1,
//             DT: ''
//         }
//     }
// }
// const AddCart = async () => {
//     try {
//         let cart = await db.Cart.findOne({ userId });

//         if (cart) {
//             //cart exists for user
//             let itemIndex = cart.products.findIndex(p => p.productId == productId);

//             if (itemIndex > -1) {
//                 //product exists in the cart, update the quantity
//                 let productItem = cart.products[itemIndex];
//                 productItem.quantity = quantity;
//                 cart.products[itemIndex] = productItem;
//             } else {
//                 //product does not exists in cart, add new item
//                 cart.products.push({ productId, quantity, name, price });
//             }
//             cart = await cart.save();
//             return res.status(201).send(cart);
//         } else {
//             //no cart for user, create new cart
//             const newCart = await db.Cart.create({
//                 userId,
//                 products: [{ id, quantity, name, price }]
//             });

//             return res.status(201).send(newCart);
//         }
//     } catch (err) {
//         console.log(err);
//         res.status(500).send("Something went wrong");
//     }
// }

const Productid = async (idProduct) => {
    try {
        let productdata = await db.Product.findOne({
            where: { id: idProduct }
        })
        return {
            EM: 'success!',
            EC: 0,
            DT: productdata
        }
    } catch (error) {
        console.log(error)
        return {
            EM: 'wrong something',
            EM: 1,
            DT: ''
        }
    }
}

const readProduct = async () => {
    try {
        let productdata = await db.Product.findAll({
            attributes: ['id', 'name', 'description', 'image', 'price', 'groupId'],
            raw: true
        })
        return {
            EM: 'success!',
            EC: 0,
            DT: productdata
        }
    } catch (error) {
        console.log(error)
        return {
            EM: 'something wrong',
            EC: 1,
            DT: ''
        }
    }
}

const getPagination = async (page, limit) => {
    try {
        let offset = (page - 1) * limit
        let { count, rows } = await db.Product.findAndCountAll({
            attributes: ['id', 'image', 'name', 'price', 'description', 'groupId'],
            include: { model: db.Group, attributes: ['name', 'description'] },
            order: [['id', 'DESC']],
            offset: offset,
            limit: limit,
        })
        let totalPages = Math.ceil(count / limit)
        let Data = {
            totalRow: count,
            totalPages: totalPages,
            products: rows
        }
        return {
            EM: "success",
            EC: 0,
            DT: Data
        }
    } catch (error) {
        console.log(error)
        return {
            EM: "wrong server",
            EC: -1,
            DT: []
        }
    }
}
const getdelete = async (productId) => {
    try {
        let productdata = await db.Product.findOne({
            where: { id: productId },

        })
        if (productdata) {
            await productdata.destroy()
            return {
                EM: 'success!',
                EC: 0,
                DT: productdata
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
            EM: 'something wrong',
            EC: 1,
            DT: ''
        }
    }
}

module.exports = {
    readProduct, getPagination, getdelete, Productid,
}