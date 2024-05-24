import y from '@/styles/style.module.css'
import Image from 'next/image'
import Container from '@mui/material/Container'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Appfooter = () => {

    const pathname = usePathname()


    return (

        <div>
            {pathname !== '/Login' && pathname !== '/Register' && pathname !== '/Addmin' ?
                <>
                    <div className={y['space']}>
                        <Container>
                            <div className={y['content']}>
                                <div className="row">
                                    <div className="col-4">
                                        <h5><b>LOWQ SPORT - GIÀY BÓNG ĐÁ CHÍNH HÃNG</b></h5>
                                        <p>Địa chỉ: Số 35 Ngõ 7 Tân Mỹ, Quận Mỹ Đình 1, Thành phố Hà Nội</p>
                                        <p>Số điện thoại:  033 9400730 hoặc 0974651628 </p>
                                        <p>Email: longdohuu2908@gmail.com DL BIDV, Chi nhánh Khu Công Nghiệp Thạch Thất, TK: DO HUU LONG, STK: 4520359666</p>
                                        <div className='mx-5 row'>
                                            <Link className='col-2 nav-link mx-2' href='https://www.facebook.com/shootchannelvn/'>
                                                <Image
                                                    src='/Facebook.png'
                                                    width={50}
                                                    height={50}
                                                    alt='facebook'
                                                />
                                            </Link>
                                            <Link className=' col-4 nav-link' href='https://www.instagram.com/shootchannel.vn/'>
                                                <Image
                                                    className='mx-3'
                                                    src='/Intagram.png'
                                                    width={50}
                                                    height={50}
                                                    alt='Intagram'
                                                />
                                            </Link>
                                            <Link className='col-2 nav-link' href='https://www.tiktok.com/@shootchannel?_t=8YYU7r006WA&_r=1'>
                                                <Image
                                                    src='/Tiktok.png'
                                                    width={50}
                                                    height={50}
                                                    alt='Twitter'
                                                />
                                            </Link>

                                        </div>
                                    </div>
                                    <div className=" mx-3 col-2">
                                        <h5><b>GIỜ MỞ CỬA</b></h5>
                                        <p>Từ 9:00 - 21:00 tất cả các ngày trong tuần (Trừ các ngày lễ, ngày Tết theo quy định của nhà nước).</p>
                                    </div>
                                    <div className="mx-3 col-3">
                                        <h5><b>Chính sách</b></h5>
                                        <p>Chính sách bảo hành</p>
                                        <p>Chính sách đổi trả</p>
                                        <p>Chính sách giao hàng</p>
                                        <p>Chính sách bảo mật</p>
                                        <p>Hướng dẫn sử dụng phương thức trả góp</p>
                                        <p>Chương trình khách hàng thân thiết</p>
                                    </div>
                                    <div className="col-2">
                                        <Image
                                            src='/logo.png'
                                            width={200}
                                            height={300}
                                            alt='logo'
                                        />
                                    </div>
                                </div>
                            </div>

                        </Container>

                    </div>
                </>
                :
                <>
                </>
            }

        </div>

    )
}

export default Appfooter