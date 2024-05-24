// import axios from 'axios';
import axios from '@/setup/axios'

const register = (username: string, email: string, phonenumber: string, password: string) => {
    return axios.post('/api/v1/register', {
        username, email, phonenumber, password
    })
}

const loginUser = (ValueLogin: string, password: string) => {
    return axios.post('/api/v1/login', {
        ValueLogin, password
    })
}

const fetchAllusers = (page: any, limit: any) => {
    return axios.get(`/api/v1/user/read?page=${page}&limit=${limit}`)
}

const fetchCreate = (userData: any) => {
    return axios.post('/api/v1/user/create', { ...userData })
}

const fetchUpdateUser = () => {
    return axios.put('/api/v1/user/update')
}

const deleteUser = (user: any) => {
    return axios.delete('/api/v1/user/delete', { data: { id: user.id } })
}
const getUserAccount = () => {
    return axios.get('/api/v1/account')
}

export {
    register, loginUser, fetchAllusers, fetchCreate, fetchUpdateUser, deleteUser, getUserAccount
}