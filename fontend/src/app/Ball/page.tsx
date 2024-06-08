'use client'

import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPaginate from 'react-paginate';
import Link from 'next/link'
import { Container } from 'react-bootstrap';
import { fetchPaginationPRD, fetchProduct } from '@/services/productServices';
import { useDispatch } from 'react-redux';
import { add } from '@/redux/cartSlice';
import { fetchDiscount, fetchDiscountID } from '@/services/productServices'
import ModalDiscount from '../../components/ModalDiscount'

interface Props {
    product: Product
}

const Ball = (props: Props) => {
    const [product, setProduct] = useState([])
    const dispatch = useDispatch();

    const [discount, setdicount] = useState([]);
    const [show, setShow] = useState<boolean>(false)

    const [CurrentPageProduct, setCrurentPageProduct] = useState<number>(1)
    const [CurentLimitProduct, setCurentLimitProduct] = useState<number>(16)
    const [TotalPagesProduct, setTotalPagesProduct] = useState(0)

    const fetchAPI = async () => {
        const res = await fetchPaginationPRD(CurrentPageProduct, CurentLimitProduct)
        if (res && res.data && res.data.EC === 0) {
            setTotalPagesProduct(res.data.DT.totalPages)
            setProduct(res.data.DT.products)
        }
    }

    const handlePageClickProduct = async (event: any) => {
        setCrurentPageProduct(+event.selected + 1)
    }

    useEffect(() => {
        // fetchdata();
        // fetchApi()
        fetchAPI()
    }, [CurrentPageProduct])

    // const fetchdata = async () => {
    //     const res = await fetch("https://fakestoreapi.com/products");
    //     const data = await res.json();
    //     setProduct(data);
    // }

    // const fetchApi = async () => {
    //     const res = await fetchProduct();
    //     if (res && res.data.EC === 0) {
    //         console.log('res: ', res.data.DT)
    //         setProduct(res.data.DT);
    //     }
    // }

    const handleAddcart = (product: any) => {
        dispatch(add(product))
    }

    // DISCOUNT
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
        <>
            <Container>
                <div className='pt-5' >
                    <h3>DISCOUNT</h3>
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
                    <h3 className='py-5'>PRODUCT</h3>
                    <div className='flex flex-row '>
                        <div className="grid gap-3 grid-cols-4">
                            {product.map((item: any, index: any) => {
                                return (
                                    <div className="mx-1  text-gray-700 bg-white shadow bg-clip-border rounded-xl" key={`product-${item.id}`}>
                                        <Link href={`/Ball/${item.id}`} className='no-underline '>
                                            <div className="relative mx-3 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-30">
                                                <img
                                                    src={item.image}
                                                    alt={item.name} className="object-cover w-full h-full" />
                                            </div>
                                            <div className="p-2">
                                                <div className="flex items-center justify-between mb-2">
                                                    <p className="block font-sans pl-3 text-base text-black antialiased font-medium  text-blue-gray-900">
                                                        {item.name}
                                                    </p>
                                                    <p className="block font-sans pr-3 text-base text-red-500 antialiased font-medium text-blue-gray-900">
                                                        {item.price}
                                                    </p>
                                                </div>
                                                <p className="block pl-3 font-sans text-sm font-normal text-gray-600 opacity-75">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </Link>
                                        <div className="p-6 pt-0">
                                            <button
                                                className="align-middle font-bold text-center text-xs py-3 px-6 w-full hover:scale-105 bg-slate-200 rounded-xl hover:bg-slate-300"
                                                type="button">
                                                ADD TO CART
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>

            </Container >
            {TotalPagesProduct > 0 &&
                <div className='pt-12 flex items-center justify-center'>
                    <ReactPaginate
                        nextLabel=">>"
                        onPageChange={handlePageClickProduct}
                        pageRangeDisplayed={4}
                        marginPagesDisplayed={2}
                        pageCount={TotalPagesProduct}
                        previousLabel="<<"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                    />
                </div>
            }
        </>
    )
}

export default Ball