import { useState, useEffect } from "react";
import { fetchProduct } from '@/services/productServices';
import z from '@/styles/css.module.css'
const CartPreview = () => {
    const [items, setItem] = useState([])
    useEffect(() => {
        // console.log('asd', product) 
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const responsive = await fetchProduct()
        if (responsive.data && responsive.data.EC === 0) {
            setItem(responsive.data.DT)
        }
    }

    return (
        <div className=''>
            <ul className={z["cart-items"]}>
                {items.map((product: any, index: any) => {
                    return (
                        <li className={z["cart-item"]} key={product.id}>
                            <img className={z["product-image"]} src={'/Giay.png'} />
                            <div className={z["product-info"]}>
                                <p className={z["product-name"]}>{product.name}</p>
                                <p className={z["product-price"]}>{product.price}</p>
                            </div>
                            <div className={z["product-total"]}>
                                <p className={z["quantity"]}>

                                </p>
                                <p className={z["amount"]}></p>
                            </div>
                            <button
                                className={z["product-remove"]}
                            >
                                ×
                            </button>
                        </li>
                    );
                })}
            </ul>
            <div className="action-block">
                <button
                    type="button"

                >
                    PROCEED TO CHECKOUT
                </button>
            </div>
        </div>
    );
};

export default CartPreview;
