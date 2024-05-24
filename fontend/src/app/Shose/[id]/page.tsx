'use client'

import { Container } from "@mui/material"
import x from '@/styles/style.module.css'
import z from '@/styles/payment.module.css'
import useSWR, { Fetcher } from "swr";
import { useEffect, useState } from "react"
import Image from "next/image"
import axios from "axios";
import { Button } from "react-bootstrap";
const ViewDetailbog = ({ params }: { params: { id: string } }) => {

    const [number, setNumber] = useState<number>(1)
    const [selectedSize, setSelectedSize] = useState(null);

    const increaseQuantity = () => {
        setNumber(number + 1)
    }

    const decreaseQuantity = () => {
        if (number > 1) {
            setNumber(number - 1)
        }
    }

    const fetcher: Fetcher<IBlog, string> = (url: string) => fetch(url).then((res) => res.json());
    const fetchered: Fetcher<Product, string> = (url: string) => axios.get(url).then(res => res.data.DT)
    const { data, error, isLoading } = useSWR(
        `http://localhost:8000/api/v1/product/read/${params.id}`,
        fetchered,
        // {
        //     revalidateIfStale: false,
        //     revalidateOnFocus: false,
        //     revalidateOnReconnectsdfghjklswz: false
        // }
    );

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }
    return (


        <Container>

            <div className="row ">

                <div className="content-center col-sm-6 mt-3 mx-3 d-flex">
                    <ul className="content-style mx-3">
                        <div className="inner">
                            <li className={z['li']}>
                                <a href=""><Image width={100} height={100} src={'/Giay.png'} alt="" /></a>
                            </li>
                            <li className={z['li']}>
                                <a href=""><Image width={100} height={100} src={'/Giay.png'} alt="" /></a>
                            </li>
                            <li className={z['li']}>
                                <a href=""><Image width={100} height={100} src={'/Giay.png'} alt="" /></a>
                            </li>
                            <li className={z['li']}>
                                <a href=""><Image width={100} height={100} src={'/Giay.png'} alt="" /></a>
                            </li>
                            <li className={z['li']}>
                                <a href=""><Image width={100} height={100} src={'/Giay.png'} alt="" /></a>
                            </li>
                        </div>
                    </ul>
                    <div className={x['left']}>
                        <Image
                            width={420}
                            height={450}
                            src={`/${data?.image}`}
                            alt=""
                        />
                    </div>
                </div>
                <div className="content-right col-sm-5 mt-3">
                    <h3>{data?.name}</h3>
                    <hr className="w-1000" />
                    <p>{data?.description}</p>
                    <div><h3>{data?.price}</h3></div>
                    <hr />
                    <hr />
                    <h5>SIZE</h5>
                    <div className="d-flex flex-row bd-highlight mb-3">
                        <div>
                            <input className={z['variant']} type="radio" name="option1" value={'39'} />
                            <label htmlFor='swatch' className={z['size']}>39</label>
                        </div>
                        <div>
                            <input className={z['variant']} type="radio" name="option2" value={'40'} />
                            <label htmlFor='swatch' className={z['size']}>40</label>
                        </div>
                        <div>
                            <input className={z['variant']} type="radio" name="option3" value={'40.5'} />
                            <label htmlFor='swatch' className={z['size']}>40.5</label>
                        </div>
                        <div>
                            <input className={z['variant']} type="radio" name="option4" value={'41'} />
                            <label htmlFor='swatch' className={z['size']}>41</label>
                        </div>
                        <div>
                            <input className={z['variant']} type="radio" name="option5" value={'41.5'} />
                            <label htmlFor='swatch' className={z['size']}>41.5</label>
                        </div>
                        <div>
                            <input className={z['variant']} type="radio" name="option6" value={'42'} />
                            <label htmlFor='swatch' className={z['size']}>42</label>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div className={z['soluong']}>
                            <h5>Số lượng</h5>
                            <input type="button" className={z['minus']} onClick={decreaseQuantity} value={'-'} />
                            <input type="text" value={number} onChange={(e) => setNumber(+e.target.value)} className={z['number']} />
                            <input type="button" value={'+'} className={z['plus']} onClick={increaseQuantity} />
                            <Button className=" btn btn-dark mx-2">THÊM VÀO RỎ HÀNG</Button>
                            <Button className=" btn btn-dark" >MUA NGAY</Button>
                        </div>
                        <div className="d-flex">
                            <div className={z['btn']}>
                                <span className={z['Buy ']}><strong>MUA NGAY</strong></span><br />
                                <span className={z['note']}>Giao Tận nơi Hoặc Tại Cửa hàng</span>
                            </div>
                            <div className={z['btn-1']}>
                                <span className={z['Buy ']}><strong>TRẢ GÓP</strong></span><br />
                                <span className={z['note']}>Visa, Master, JCB</span>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </Container>
    )
}

export default ViewDetailbog