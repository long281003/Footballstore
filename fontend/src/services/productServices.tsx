// import axios from "axios";
import axios from '@/setup/axios'

const fetchProduct = () => {
    return axios.get('/api/v1/product/read')
}

const fetchCreateProduct = (productData: any) => {
    return axios.post('/api/v1/product/create', { ...productData })
}

const fetchPagination = (page: any, limit: any) => {
    return axios.get(`/api/v1/product/PaginationProduct?page=${page}&limit=${limit}`)
}

const fetchDeleteProduct = (product: any) => {
    return axios.delete('/api/v1/product/delete', { data: { id: product.id } })
}
const fetchCart = () => {
    return axios.get('/api/v1/product/read_cart')
}
const fetchDiscount = () => {
    return axios.get('/api/v1/product/read_discount')
}
const fetchDiscountID = (discount: any) => {
    return axios.get(`/api/v1/product/discountID/${discount.id}`)
}
export {
    fetchProduct, fetchPagination, fetchDeleteProduct, fetchCreateProduct, fetchCart,
    fetchDiscount, fetchDiscountID
}