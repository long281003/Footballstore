'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPaginate from 'react-paginate';
import x from '@/styles/style.module.css'
import { useState, useEffect, useContext } from 'react'
import { fetchDeleteProduct, fetchPagination, fetchProduct } from '@/services/productServices';
import { deleteUser, fetchAllusers } from '@/services/userService';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ModalUser from '@/components/ModalUser';
import ModalProduct from '@/components/ModalProduct';
const Admin = () => {

    //Products
    const [listProduct, setlistProduct] = useState([]);
    const [CurrentPageProduct, setCrurentPageProduct] = useState<number>(1)
    const [CurentLimitProduct, setCurentLimitProduct] = useState<number>(3)
    const [TotalPagesProduct, setTotalPagesProduct] = useState(0)
    const [ActionModal, setActionMadal] = useState('')

    useEffect(() => {
        fetchdata()
    }, [CurrentPageProduct])

    const fetchdata = async () => {
        const res = await fetchPagination(CurrentPageProduct, CurentLimitProduct)
        if (res && res.data && res.data.EC === 0) {
            setTotalPagesProduct(res.data.DT.totalPages)
            setlistProduct(res.data.DT.products)
        }
    }

    const handlePageClickProduct = async (event: any) => {
        setCrurentPageProduct(+event.selected + 1);
        // await fetchUser()
    }

    const hanldeDeleteProduct = async (user: any) => {
        let res = await fetchDeleteProduct(user)
        if (res && res.data && res.data.EM === 0) {
            await fetchdata()
            confirm(res.data.EM)
        } else {
            confirm(res.data.EM)
        }
    }

    //Users
    const [listUsers, setlistuser] = useState([]);
    const [CurrentPageUser, setCrurentPage] = useState<number>(1)
    const [CurentLimitUser, setCurentLimitUser] = useState<number>(3)
    const [TotalPages, setTotalPages] = useState(0)
    // const [dataModal, setDataModal] = useState<object>({})
    // const [data, setData] = useState(null)

    useEffect(() => {
        fetchUser()

    }, [CurrentPageUser])

    const fetchUser = async () => {
        let response = await fetchAllusers(CurrentPageUser, CurentLimitUser)
        if (response && response.data && response.data.EC === 0) {
            setTotalPages(response.data.DT.totalPage)
            setlistuser(response.data.DT.users)
        }
    }

    const handlePageClickUser = async (event: any) => {
        setCrurentPage(+event.selected + 1);
        // await fetchUser()
    }
    const hanldeDeleteUser = async (user: any) => {
        let res = await deleteUser(user)
        if (res && res.data && res.data.EM === 0) {
            await fetchUser()
            confirm(res.data.DT)
        } else {
            confirm(res.data.EM)
        }
    }


    return (
        <>
            <div>
                <div className='container'  >
                    <div className='manage-products-container'>
                        <div className='product-header'>
                            <div className='title my-3'>
                                <h3>Table Product</h3>
                            </div>
                            <div className={x['cach']}>
                                <ModalProduct />
                            </div>

                        </div>
                        <div className='product-body'>
                            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th scope='col'>No</th>
                                        <th scope="col">Id</th>
                                        {/* <th scope='col'>image</th> */}
                                        <th scope="col">name</th>
                                        <th scope="col">price</th>
                                        <th scope='col'>description</th>
                                        <th scope='col'>Group</th>
                                        <th scope='col'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listProduct && listProduct.length > 0 ? <>
                                        {listProduct.map((item: any, index: any) => {
                                            return (
                                                <tr key={`row-${index}`}>
                                                    <td>{(CurrentPageProduct - 1) * CurentLimitProduct + index + 1}</td>
                                                    <td>{item.id}</td>
                                                    {/* <td>{item.image ? item.image : ''}</td> */}
                                                    <td>{item.name}</td>
                                                    <td>{item.price}</td>
                                                    <td>{item.description}</td>
                                                    <td>{item.Group ? item.Group.name : ''}</td>
                                                    <td>
                                                        <span className={x['Edit']} title='Edit'><EditIcon /></span>
                                                        <span className={x['delete']} onClick={() => hanldeDeleteProduct(item)} title='Delete' ><DeleteIcon /></span>
                                                        <span></span>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </> : <tr><td>Not found </td></tr>}

                                </tbody>
                            </table>
                        </div>
                        {TotalPagesProduct > 0 &&
                            <div className='product-footer'>
                                <ReactPaginate
                                    nextLabel="next >"
                                    onPageChange={handlePageClickProduct}
                                    pageRangeDisplayed={3}
                                    marginPagesDisplayed={2}
                                    pageCount={TotalPagesProduct}
                                    previousLabel="< previous"
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
                    </div>
                </div>
            </div>

            <div className='container'  >
                <div className='manage-users-container'>
                    <div className='user-header'>
                        <div className='title my-3'>
                            <h3>Table Users</h3>
                        </div>
                        <div className={x['cach']}>
                            <ModalUser />
                        </div>
                    </div>
                    <div className='user-body'>
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th scope='col'>No</th>
                                    <th scope="col">Id</th>
                                    <th scope='col'>Username</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Group</th>
                                    <th scope='col'>action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listUsers && listUsers.length > 0 ? <>
                                    {listUsers.map((item: any, index: any) => {
                                        return (
                                            <tr key={`row-${index}`}>
                                                <td>{(CurrentPageUser - 1) * CurentLimitUser + index + 1}</td>
                                                <td>{item.id}</td>
                                                <td>{item.username}</td>
                                                <td>{item.email}</td>
                                                <td>{item.Group ? item.Group.name : ''}</td>
                                                <td>
                                                    <span className={x['Edit']} title='Edit'><EditIcon /></span>
                                                    <span className={x['delete']} title='Delete' onClick={() => hanldeDeleteUser(item)}><DeleteIcon /></span>
                                                    <span></span>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </> : <tr><td>Not found </td></tr>}
                            </tbody>
                        </table>
                    </div>
                    {TotalPages > 0 &&
                        <div className='use-footer'>
                            <ReactPaginate
                                nextLabel="next >"
                                onPageChange={handlePageClickUser}
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={2}
                                pageCount={TotalPages}
                                previousLabel="< previous"
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
                </div>
            </div>
        </>
    )
}

export default Admin