// import axios from '../setup/axios'
// import { loginFailed, loginStart, loginSuccess } from './authSlice'


// export const login = async (ValueLogin: string, password: string, dispatch: any) => {
//     dispatch(loginStart());
//     try {
//         const res = await axios.post('/api/v1/login', {
//             ValueLogin, password
//         })
//         dispatch(loginSuccess(res.data.DT))

//     } catch (error) {
//         dispatch(loginFailed())
//     }
// }