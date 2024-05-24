import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import y from '@/styles/style.module.css'
import x from '@/styles/payment.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from '@mui/material/Container';
const PayMent = () => {

    return (
        <div className='content'>
            <Container>
                <div className='row'>
                    <div className={y['product']}>
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
                    </div>
                </div>
            </Container>
        </div>


    )
}
export default PayMent