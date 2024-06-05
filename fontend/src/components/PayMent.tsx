import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import y from '@/styles/style.module.css'
import x from '@/styles/payment.module.css'
import Container from '@mui/material/Container';
import { fetchDiscount, fetchDiscountID } from '@/services/productServices'
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

    const handleDiscount = async (discount: any) => {
        let res = await fetchDiscountID(discount)
        console.log("checK discount: ", res.data.DT)
    }


    return (

        <div className='container m-auto grid grid-cols md:grid-cols lg:grid-cols gap-4 '>
            <div className='flex flex-row '>
                <div className="grid gap-2 grid-cols-4">
                    {discount && discount.length > 0 ?
                        <>
                            {discount.map((item: any, index: any) => {
                                return (
                                    <div className=" " key={`discount-${item.id}`}>
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
                                                    <a className="text-black cursor-pointer" onClick={() => handleDiscount(item)}>
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
            </div>
            <div className='pt-5'>
                <div>
                    <h1 className='text-center '>Bạn đang tìm</h1>
                </div>
                <div className="flex flex-row py-4 item">
                    <div className="index-banner style1 ">
                        <a className="no-underline " href="#" title="GIÀY CỎ NHÂN TẠO (ĐẾ TF)">
                            <img className="dt-width-100 ls-is-cached lazyloaded" width="313" height="313" src="/banner_1.jpg?v=1820" alt="GIÀY CỎ NHÂN TẠO (ĐẾ TF)" />
                            <div className="caption">
                                <p className="font-bold text-black ">GIÀY CỎ NHÂN TẠO (ĐẾ TF)</p>
                                <span className="text-sm text-stone-400">Giày đá bóng dành cho mặt sân cỏ nhân <br /> tạo 5-7 người</span>
                            </div>
                        </a>
                    </div>
                    <div className="px-3">
                        <a className="no-underline" href="#" title="GIÀY CỎ TỰ NHIỆN (ĐẾ FG, AG, SG)">
                            <img className="dt-width-100 ls-is-cached lazyloaded" width="313" height="313" src="/banner_2.jpg?v=1820" alt="GIÀY CỎ TỰ NHIỆN (ĐẾ FG, AG, SG)" />
                            <div className="caption">
                                <p className="font-bold text-black ">GIÀY CỎ TỰ NHIỆN (ĐẾ FG, AG, SG)</p>
                                <span className="text-sm text-stone-400">Giày đá bóng dành cho mặt sân cỏ tự nhiên 11 <br /> người</span>
                            </div>
                        </a>
                    </div>
                    <div className="index-banner style1">
                        <a className="no-underline" href="#" title="GIÀY CỎ FUTSAL (ĐẾ IC)">
                            <img className="dt-width-100 ls-is-cached lazyloaded" width="313" height="313" src="/banner_3.jpg?v=1820" alt="GIÀY CỎ FUTSAL (ĐẾ IC" />
                            <div className="caption">
                                <p className="font-bold text-black ">GIÀY CỎ FUTSAL (ĐẾ IC)</p>
                                <span className="text-sm text-stone-400">Giày đá bóng dành cho sân xi măng và sân <br /> FUTSAL trong nhà tạo 5-7 người</span>
                            </div>
                        </a>
                    </div>
                    <div className="pl-4">
                        <a className="no-underline" href="#" title="GIÀY ĐÁ BÓNG GIÁ RẺ">
                            <img className="dt-width-100 ls-is-cached lazyloaded" width="313" height="313" src="/banner_4.webp?v=1820" alt="GIÀY ĐÁ BÓNG GIÁ RẺ" />
                            <div className="caption">
                                <p className="font-bold text-black ">GIÀY ĐÁ BÓNG GIÁ RẺ</p>
                                <span className="text-sm text-stone-400">Giày đá bóng chính hãng giá dưới 1.000.000 VND</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex flex-row'>
                    <div className="gird xs:gird-col-6 sm:gird-col-4 px-2 item">
                        <div className="index-banner style2">
                            <a className="hover-effect no-underline text-black" href="#" title="GIÀY ĐÁ BANH TRẺ EM">
                                <img className="dt-width-100 ls-is-cached lazyloaded" width="423" height="148" src="//theme.hstatic.net/1000061481/1001035882/14/index_banner_5.jpg?v=1820" alt="GIÀY ĐÁ BANH TRẺ EM" />
                                <p className="caption-title2 ">GIÀY ĐÁ BANH TRẺ EM<i className="fa fa-angle-right"></i></p>
                            </a>
                        </div>
                    </div>
                    <div className="gird xs:gird-col-6 sm:gird-col-4 px-2 item">
                        <div className="index-banner style2">
                            <a className="hover-effect no-underline text-black" href="https://neymarsport.com/collections/ao-bong-da-chinh-hang" title="ÁO BÓNG ĐÁ CHÍNH HÃNG">
                                <img className="dt-width-100 ls-is-cached lazyloaded" width="423" height="148" src="//theme.hstatic.net/1000061481/1001035882/14/index_banner_6.jpg?v=1820" alt="ÁO BÓNG ĐÁ CHÍNH HÃNG" />
                                <p className="caption-title2">ÁO BÓNG ĐÁ CHÍNH HÃNG<i className="fa fa-angle-right"></i></p>
                            </a>
                        </div>
                    </div>
                    <div className="gird xs:gird-col-6 sm:gird-col-4 px-2 item">
                        <div className="index-banner style2 ">
                            <a className="hover-effect no-underline text-black" href="https://www.neymarsport.com/collections/bong-da" title="QUẢ BÓNG ĐÁ">
                                <img className="dt-width-100 ls-is-cached lazyloaded" width="423" height="148" src="//theme.hstatic.net/1000061481/1001035882/14/index_banner_7.jpg?v=1820" alt="QUẢ BÓNG ĐÁ" />
                                <p className="caption-title2">QUẢ BÓNG ĐÁ<i className="fa fa-angle-right"></i></p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className="gird xs:gird-col-6 sm:gird-col-4 px-2 item">
                        <div className="index-banner style2">
                            <a className="hover-effect no-underline text-black" href="https://www.neymarsport.com/collections/vo-bong-da" title="VỚ BÓNG ĐÁ">
                                <img className="dt-width-100 ls-is-cached lazyloaded" width="423" height="148" src="//theme.hstatic.net/1000061481/1001035882/14/index_banner_8.jpg?v=1820" alt="VỚ BÓNG ĐÁ" />
                                <p className="caption-title2">VỚ BÓNG ĐÁ<i className="fa fa-angle-right"></i></p>
                            </a>
                        </div>
                    </div>
                    <div className="gird xs:gird-col-6 sm:gird-col-4 px-2 item">
                        <div className="index-banner style2">
                            <a className="hover-effect no-underline text-black" href="https://www.neymarsport.com/collections/boc-ong-dong" title="BẢO VỆ ỐNG ĐỒNG">
                                <img className="dt-width-100 ls-is-cached lazyloaded" width="423" height="148" src="//theme.hstatic.net/1000061481/1001035882/14/index_banner_9.jpg?v=1820" alt="BẢO VỆ ỐNG ĐỒNG" />
                                <p className="caption-title2">BẢO VỆ ỐNG ĐỒNG<i className="fa fa-angle-right"></i></p>
                            </a>
                        </div>
                    </div>
                    <div className="gird xs:gird-col-6 sm:gird-col-4 px-2 item">
                        <div className="index-banner style2">
                            <a className="hover-effect no-underline text-black" href="https://neymarsport.com/collections/phu-kien-ra-san" title="PHỤ KIỆN RA SÂN">
                                <img className="dt-width-100 ls-is-cached lazyloaded" width="423" height="148" src="//theme.hstatic.net/1000061481/1001035882/14/index_banner_10.jpg?v=1820" alt="PHỤ KIỆN RA SÂN" />
                                <p className="caption-title2">PHỤ KIỆN RA SÂN<i className="fa fa-angle-right"></i></p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-5'>
                <div className='py-4'>
                    <h1 className='text-center'>Thương hiệu</h1>
                </div>
                <div className='flex flex-row'>
                    <div className="gird xs:gird-col-6 sm:gird-col-4 px-2 ">
                        <div className="index-banner style2">
                            <a className="hover-effect no-underline text-black" href="https://www.neymarsport.com/collections/giay-da-banh-nike" title="GIÀY ĐÁ BANH NIKE">
                                <img className="dt-width-100 ls-is-cached lazyloaded" width="423" height="148" src="//theme.hstatic.net/1000061481/1001035882/14/brand_banner_1.jpg?v=1820" alt="GIÀY ĐÁ BANH NIKE" />
                                <p className="caption-title2 ">GIÀY ĐÁ BANH NIKE<i className="fa fa-angle-right"></i></p>
                            </a>
                        </div>
                    </div>
                    <div className="gird xs:gird-col-6 sm:gird-col-4 px-2 ">
                        <div className="index-banner style2">
                            <a className="hover-effect no-underline text-black" href="https://www.neymarsport.com/collections/giay-da-banh-adidas" title="GIÀY ĐÁ BANH ADIDAS">
                                <img className="dt-width-100 ls-is-cached lazyloaded" width="423" height="148" src="//theme.hstatic.net/1000061481/1001035882/14/brand_banner_2.jpg?v=1820" alt="GIÀY ĐÁ BANH ADIDAS" />
                                <p className="caption-title2">GIÀY ĐÁ BANH ADIDAS<i className="fa fa-angle-right"></i></p>
                            </a>
                        </div>
                    </div>
                    <div className="gird xs:gird-col-6 sm:gird-col-4 px-2 ">
                        <div className="index-banner style2">
                            <a className="hover-effect no-underline text-black" href="https://www.neymarsport.com/collections/giay-da-banh-puma" title="GIÀY ĐÁ BANH PUMA">
                                <img className="dt-width-100 ls-is-cached lazyloaded" width="423" height="148" src="//theme.hstatic.net/1000061481/1001035882/14/brand_banner_3.jpg?v=1820" alt="GIÀY ĐÁ BANH PUMA" />
                                <p className="caption-title2">GIÀY ĐÁ BANH PUMA<i className="fa fa-angle-right"></i></p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row  py-2'>
                    <div className="gird xs:gird-col-6 sm:gird-col-4 px-2 ">
                        <div className="index-banner style2">
                            <a className="hover-effect no-underline text-black" href="https://www.neymarsport.com/collections/giay-da-banh-mizuno" title="GIÀY ĐÁ BANH MIZUNO">
                                <img className="dt-width-100 ls-is-cached lazyloaded" width="423" height="148" src="//theme.hstatic.net/1000061481/1001035882/14/brand_banner_4.jpg?v=1820" alt="GIÀY ĐÁ BANH MIZUNO" />
                                <p className="caption-title2">GIÀY ĐÁ BANH MIZUNO<i className="fa fa-angle-right"></i></p>
                            </a>
                        </div>
                    </div>
                    <div className="gird xs:gird-col-6 sm:gird-col-4 px-2 ">
                        <div className="index-banner style2">
                            <a className="hover-effect no-underline text-black" href="https://www.neymarsport.com/collections/giay-da-banh-asics" title="GIÀY ĐÁ BANH ASICS">
                                <img className="dt-width-100 ls-is-cached lazyloaded" width="423" height="148" src="//theme.hstatic.net/1000061481/1001035882/14/brand_banner_5.jpg?v=1820" alt="GIÀY ĐÁ BANH ASICS" />
                                <p className="caption-title2">GIÀY ĐÁ BANH ASICS<i className="fa fa-angle-right"></i></p>
                            </a>
                        </div>
                    </div>
                    <div className="gird xs:gird-col-6 sm:gird-col-4 px-2 ">
                        <div className="index-banner style2">
                            <a className="hover-effect no-underline text-black" href="https://www.neymarsport.com/collections/giay-da-banh-kamito" title="GIÀY ĐÁ BANH KAMITO">
                                <img className="dt-width-100 ls-is-cached lazyloaded" width="423" height="148" src="//theme.hstatic.net/1000061481/1001035882/14/brand_banner_6.jpg?v=1820" alt="GIÀY ĐÁ BANH KAMITO" />
                                <p className="caption-title2">GIÀY ĐÁ BANH KAMITO<i className="fa fa-angle-right"></i></p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row py-2'>
                    <div className="gird xs:gird-col-6 sm:gird-col-4 px-2 ">
                        <div className="index-banner style2">
                            <a className="hover-effect no-underline text-black" href="https://neymarsport.com/collections/giay-da-banh-grandsport" title="GIÀY ĐÁ BANH GRANDSPORT">
                                <img className="dt-width-100 ls-is-cached lazyloaded" width="423" height="148" src="//theme.hstatic.net/1000061481/1001035882/14/brand_banner_7.jpg?v=1820" alt="GIÀY ĐÁ BANH GRANDSPORT" />
                                <p className="caption-title2">GIÀY ĐÁ BANH GRANDSPORT<i className="fa fa-angle-right"></i></p>
                            </a>
                        </div>
                    </div>
                    <div className="gird xs:gird-col-6 sm:gird-col-4 px-2 ">
                        <div className="index-banner style2">
                            <a className="hover-effect no-underline text-black" href="https://neymarsport.com/collections/giay-da-banh-x-munich" title="GIÀY ĐÁ BANH X MUNICH">
                                <img className="dt-width-100 ls-is-cached lazyloaded" width="423" height="148" src="//theme.hstatic.net/1000061481/1001035882/14/brand_banner_8.jpg?v=1820" alt="GIÀY ĐÁ BANH X MUNICH" />
                                <p className="caption-title2">GIÀY ĐÁ BANH X MUNICH<i className="fa fa-angle-right"></i></p>
                            </a>
                        </div>
                    </div>
                    <div className="gird xs:gird-col-6 sm:gird-col-4 px-2 ">
                        <div className="index-banner style2">
                            <a className="hover-effect no-underline text-black" href="https://neymarsport.com/collections/giay-da-banh-joma" title="GIÀY ĐÁ BANH JOMA">
                                <img className="dt-width-100 ls-is-cached lazyloaded" width="423" height="148" src="//theme.hstatic.net/1000061481/1001035882/14/brand_banner_9.jpg?v=1820" alt="GIÀY ĐÁ BANH JOMA" />
                                <p className="caption-title2">GIÀY ĐÁ BANH JOMA<i className="fa fa-angle-right"></i></p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className="gird xs:gird-col-6 sm:gird-col-4 px-2 ">
                        <div className="index-banner style2">
                            <a className="hover-effect no-underline text-black" href="https://neymarsport.com/collections/giay-da-banh-desporte" title="GIÀY ĐÁ BANH DESPORTE">
                                <img className="dt-width-100 ls-is-cached lazyloaded" width="423" height="148" src="//theme.hstatic.net/1000061481/1001035882/14/brand_banner_10.jpg?v=1820" alt="GIÀY ĐÁ BANH DESPORTE" />
                                <p className="caption-title2">GIÀY ĐÁ BANH DESPORTE<i className="fa fa-angle-right"></i></p>
                            </a>
                        </div>
                    </div>
                    <div className="gird xs:gird-col-6 sm:gird-col-4 px-2 ">
                        <div className="index-banner style2">
                            <a className="hover-effect no-underline text-black" href="https://neymarsport.com/collections/giay-da-banh-zocker" title="GIÀY ĐÁ BANH ZOCKER">
                                <img className="dt-width-100 ls-is-cached lazyloaded" width="423" height="148" src="//theme.hstatic.net/1000061481/1001035882/14/brand_banner_11.jpg?v=1820" alt="GIÀY ĐÁ BANH ZOCKER" />
                                <p className="caption-title2">GIÀY ĐÁ BANH ZOCKER<i className="fa fa-angle-right"></i></p>
                            </a>
                        </div>
                    </div>
                    <div className="gird xs:gird-col-6 sm:gird-col-4 px-2 ">
                        <div className="index-banner style2">
                            <a className="hover-effect no-underline text-black" href="https://neymarsport.com/collections/giay-da-banh-nms" title="GIÀY ĐÁ BANH NMS">
                                <img className="dt-width-100 ls-is-cached lazyloaded" width="423" height="148" src="//theme.hstatic.net/1000061481/1001035882/14/brand_banner_12.jpg?v=1820" alt="GIÀY ĐÁ BANH NMS" />
                                <p className="caption-title2">GIÀY ĐÁ BANH NMS<i className="fa fa-angle-right"></i></p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div>
                    <h1 className='text-center pb-4'>Chọn giày theo vị trí</h1>
                </div>
                <div className="flex flex-row">
                    <div className="index-banner style1">
                        <a className="hover-effect no-underline text-black" href="#" title="Hậu vệ">
                            <img className="dt-width-100 ls-is-cached lazyloaded" width="313" height="313" src="//theme.hstatic.net/1000061481/1001035882/14/position_banner_1.jpg?v=1820" alt="Hậu vệ" />
                            <div className="caption">
                                <div className="font-bold">Hậu vệ</div>
                                <span className="caption-sub text-stone-400">Phòng ngự, Chắc chắn</span>
                            </div>
                        </a>
                    </div>
                    <div className="index-banner style1 px-3">
                        <a className="hover-effect no-underline text-black" href="#" title="Tiền vệ trung tâm">
                            <img className="dt-width-100 ls-is-cached lazyloaded" width="313" height="313" src="//theme.hstatic.net/1000061481/1001035882/14/position_banner_2.jpg?v=1820" alt="Tiền vệ trung tâm" />
                            <div className="caption">
                                <div className="font-bold">Tiền vệ trung tâm</div>
                                <span className="caption-sub text-stone-400">Kiểm soát, chuyền bóng</span>
                            </div>
                        </a>
                    </div>
                    <div className="index-banner style1">
                        <a className="hover-effect no-underline text-black" href="#" title="Tiền vệ cánh">
                            <img className="dt-width-100 ls-is-cached lazyloaded" width="313" height="313" src="//theme.hstatic.net/1000061481/1001035882/14/position_banner_3.jpg?v=1820" alt="Tiền vệ cánh" />
                            <div className="caption">
                                <div className="font-bold">Tiền vệ cánh</div>
                                <span className="text-stone-400">Tốc độ, đột phá</span>
                            </div>
                        </a>
                    </div>
                    <div className="index-banner style1 px-3">
                        <a className="hover-effect  no-underline text-black" href="#" title="Tiền đạo">
                            <img className="dt-width-100 ls-is-cached lazyloaded" width="313" height="313" src="//theme.hstatic.net/1000061481/1001035882/14/position_banner_4.jpg?v=1820" alt="Tiền đạo" />
                            <div className="caption">
                                <div className="font-bold">Tiền đạo</div>
                                <span className="caption-sub text-stone-400">Dứt điểm, chính xác</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PayMent