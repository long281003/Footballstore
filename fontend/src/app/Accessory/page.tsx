'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import { Container } from 'react-bootstrap';
import { fetchProduct } from '@/services/productServices';
import y from '@/styles/style.module.css'
import { useDispatch } from 'react-redux';
import { add } from '@/redux/cartSlice';

interface Props {
    product: Product
}

const Accessory = (props: Props) => {
    const [product, setProduct] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProduct(data);
    }

    const handleAddcart = (product: any) => {
        dispatch(add(product))
    }
    return (
        <>
            <Container>
                {/* <div className='row'>
                    <h3>product</h3>
                    {product.map((item: any, index: any) => {
                        return (
                            <div className='col-lg-3 col-md-2 col-sm-3 my-4' key={`product-${item.id}`}>

                                <div className={y['card']}>
                                    <Link href={`/Ball/${item.id}`}>
                                        <img src={item.image} alt='imag' width={200} height={400} />
                                    </Link>
                                    <h1>{item.name}</h1>
                                    <p className={y['price']}>{item.price}</p>
                                    <p>{item.title}</p>
                                    <button onClick={() => handleAddcart(item)}>Add to Cart</button>
                                </div>
                            </div>
                        )
                    })}
                </div> */}


            </Container >
        </>
    )
}

export default Accessory