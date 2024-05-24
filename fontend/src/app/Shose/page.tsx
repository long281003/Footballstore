'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Container } from 'react-bootstrap';
import y from '@/styles/style.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '@/redux/cartSlice';
import { fetchProduct } from '@/services/productServices';

const Shose = () => {

    const [product, setProduct] = useState([]);
    const dispatch = useDispatch();
    const cartItem = useSelector((state: any) => {
        return state.cart
    })

    const getFetchApi = async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProduct(data);
    }

    const fetchApi = async () => {
        const res = await fetchProduct();
        if (res && res.data.EC === 0) {
            setProduct(res.data.DT);
        }
    }

    useEffect(() => {
        // getFetchApi();
        fetchApi();

    }, [])

    const handleAddCart = (item: any) => {
        dispatch(add(item));
    }

    return (
        <>
            <Container>
                <div className='row'>
                    <h3>product</h3>
                    {product.map((item: any, index: any) => {
                        return (
                            <div className='col-lg-3 col-md-2 col-sm-3 my-4' key={`product-${item.id}`}>

                                <div className={y['card']}>
                                    <Link href={`/shose/${item.id}`}>
                                        <img src={item.image} alt='img' width={200} height={250} />
                                    </Link>
                                    <h1>{item.title}</h1>
                                    <p className={y['price']}>{item.price}</p>
                                    <p>{item.title}</p>
                                    <button onClick={() => handleAddCart(item)}>Add to Cart</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Container >
        </>
    )
}

export default Shose