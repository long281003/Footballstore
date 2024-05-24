'use client'
import AddIcon from '@mui/icons-material/Add';
import z from '@/styles/css.module.css'
import { useEffect, useState } from "react"
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from 'react-bootstrap';
import { fetchCart, fetchProduct } from '@/services/productServices';
import { useDispatch, useSelector } from 'react-redux';
import { remove, updateQuantity, updateTotalPrice } from '@/redux/cartSlice';
const Cart = () => {
    const [listCart, setListCart] = useState([])
    const [number, setNumber] = useState<number>(1)
    const dispatch = useDispatch();
    const cartItem = useSelector((state: any) => {
        return state.cart
    })
    const { items, totalPrice } = useSelector((state: any) => {
        return state.cart
    })

    const handleRemoveItem = (id: any, price: any, quantity: any) => {
        dispatch(remove({ id, price, quantity }));
    };

    const handleUpdateQuantity = (id: any, quantity: any, price: any) => {
        dispatch(updateQuantity({ id, quantity }));

        const item = items.find((item: any) => item.id === id);
        const prevQuantity = item.quantity;
        const newQuantity = quantity;
        const diffQuantity = newQuantity - prevQuantity;
        const itemPrice = price;

        dispatch({
            type: "basket/updateTotalPrice",
            payload: itemPrice * diffQuantity,
        });
    };
    const fetchDataCart = async () => {
        const res = await fetchCart()
        if (res.data && res.data.EC === 0) {
            setListCart(res.data.DT)
        }
    }
    useEffect(() => {
        fetchDataCart()
    }, [])
    // const increaseQuantity = () => {
    //     setNumber(number + 1)
    // }

    // const decreaseQuantity = () => {
    //     if (number > 1) {
    //         setNumber(number - 1)
    //     }
    // }

    return (
        <>
            <section className="h-100 h-custom" >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <h1 className="fw-bold mb-5 text-black">Shopping Cart</h1>
                        <div className="col-12">
                            <div className="card card-registration card-registration-2" >
                                <div className="card-body p-0">
                                    <div className="row g-0">
                                        <div >
                                            <div className="p-5">
                                                <div className="d-flex mb-5">
                                                    <h6 className=" text-muted">3 items</h6>
                                                    <h6 className={z['Quantity']}>Quantity</h6>
                                                    <h6 className={z['Price']}>Price</h6>
                                                    <h6 className={z['Total']}>option</h6>
                                                </div>
                                                <hr className="my-4" />
                                                {/* {cartItem && cartItem.length > 0 ?
                                                    <> */}
                                                {items.map((item: any, index: any) => {
                                                    return (
                                                        <div key={`index-${item.id}`}>
                                                            <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                                <div className="col-md-1 col-lg-1 col-xl-2">
                                                                    <img
                                                                        src={item.image}
                                                                        className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                                                </div>
                                                                <div className="col-md-2 col-lg-2 col-xl-2 me-5">
                                                                    <h6 className="text-muted">{item.title}</h6>
                                                                </div>
                                                                <div className="col-md-2 col-lg-2 col-xl-2 d-flex me-5">
                                                                    <button className="btn btn-link px-2" onClick={() =>
                                                                        handleUpdateQuantity(item.id, item.quantity - 1, item.price)
                                                                    }
                                                                        disabled={item.quantity === 1}>
                                                                        <RemoveIcon />
                                                                    </button>

                                                                    <input id="form1" min="0" name="quantity" value={item.quantity} type="text"
                                                                        className="form-control form-control-sm text-center" />

                                                                    <button className="btn btn-link px-2" onClick={() =>
                                                                        handleUpdateQuantity(item.id, item.quantity + 1, item.price)}>
                                                                        <AddIcon />
                                                                    </button>
                                                                </div>
                                                                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1 me-5">
                                                                    <h6 className="my-2">{item.price * item.quantity} </h6>
                                                                </div>
                                                                <Button className="col-md-1 col-lg-1 col-xl-1 text-danger pe-auto" title='Delete' onClick={() => handleRemoveItem(item.id, item.price, item.quantity)}>
                                                                    <DeleteIcon />
                                                                </Button>
                                                            </div>

                                                            <hr className="my-4" />

                                                        </div>
                                                    )
                                                })}
                                                {/* </>
                                                    :
                                                    <>
                                                        Not found
                                                    </>
                                                } */}
                                                <div className="pt-5">
                                                    <h6 className="mb-0"><a href="#!" className="text-body"><i
                                                        className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
export default Cart