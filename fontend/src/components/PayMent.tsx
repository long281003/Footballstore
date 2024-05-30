import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import y from '@/styles/style.module.css'
import x from '@/styles/payment.module.css'
import Container from '@mui/material/Container';
import { fetchDiscount } from '@/services/productServices'
import ModalDiscount from './ModalDiscount'
const PayMent = () => {
    const [discount, setdicount] = useState([]);
    const [show, setShow] = useState<boolean>(false)
    const [MaCode, setMaCode] = useState('')
    const [description, setDescription] = useState('')
    const [condition, setCondition] = useState('')


    useEffect(() => {
        // console.log(discount);
        getdicount();
    }, []);

    const getdicount = async () => {
        let res = await fetchDiscount()
        if (res && res.data.EC === 0) {
            setdicount(res.data.DT)
        }
    }


    return (

        <div className='container m-auto grid grid-cols md:grid-cols lg:grid-cols gap-4'>
            <div className='flex flex-row'>
                <div className="grid gap-2 grid-cols-4">
                    {discount && discount.length > 0 ?
                        <>
                            {discount.map((item: any, index: any) => {
                                return (
                                    <div className="col-12 " key={`discount-${item.id}`}>
                                        <div className="relative bg-white shadow flex h-full">
                                            <div className="py-3 pl-2 ">
                                                <a href="https://neymarsport.com/products/adidas-x-speedportal-1-tf-own-your-football-shock-pink-footwear-white-core-black"
                                                    title="https://neymarsport.com/products/adidas-x-speedportal-1-tf-own-your-football-shock-pink-footwear-white-core-black">
                                                    <img className="img-fluid" src={`${item.image}?v=1806`} alt="coupon_1_img.png" loading="lazy" width="150" />
                                                </a>
                                            </div>
                                            <div className="py-4 pl-3">
                                                <div className="coupon_head">
                                                    <h3 className="text-base text-red-500">NHẬP MÃ: {item.MaCode}</h3>
                                                    <div className="text-stone-500">{item.description}</div>
                                                </div>
                                                <div >
                                                    <a className="text-black cursor-pointer" data-coupon="GZ2440/100K">
                                                        <ModalDiscount
                                                            blogs={discount}
                                                            show={show}
                                                            setShow={setShow}
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                        :
                        <>
                        </>
                    }
                </div>

                {/* <div className={y['product']}>
                    <Link href='/Shose' className={y['link']}>
                        <Image
                            src='/Giay.png'
                            width={200}
                            height={155}
                            alt='Giày'
                        />
                        <div className={x['button-add']}>
                            <button className={x['action']}>Giày</button>
                        </div>
                    </Link>

                </div>
                <div className={y['product']}>
                    <Link href='/Ball' className={y['link']}>
                        <Image
                            src='/Bong.png'
                            width={200}
                            height={155}
                            alt='Bóng'
                        />
                        <div className={x['button-add']}>
                            <button className={x['action']}>Bong</button>
                        </div>
                    </Link>

                </div>
                <div className={y['product']}>
                    <Link className={y['link']} href='/Cup'>
                        <Image
                            src='/Cup.png'
                            width={200}
                            height={155}
                            alt='Cup'
                        />
                        <div className={x['button-add']}>
                            <button className={x['action']}>Huy chương</button>
                        </div>
                    </Link>

                </div>

                <div className={y['product']}>
                    <Link href='/Accessory' className={x['link']}>
                        <Image
                            src='/Phukien.png'
                            width={200}
                            height={155}
                            alt='Phụ kiện'
                        />
                        <div className={x['button-add']}>
                            <button className={x['action']}>Phụ kiện</button>
                        </div>
                    </Link>


                </div>

                <div className={y['product']}>
                    <Link href='/Clothes' className={y['link']}>
                        <Image
                            src='/QuanAo.png'
                            width={200}
                            height={155}
                            alt='Quần áo'
                        />
                        <div className={x['button-add']}>
                            <button className={x['action']}>Quần áo</button>
                        </div>
                    </Link>
                </div> */}
            </div>
        </div>


    )
}
export default PayMent