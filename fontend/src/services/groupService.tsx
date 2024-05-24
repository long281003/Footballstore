// import axios from "axios";
import axios from '@/setup/axios'


const fetchGroup = () => {
    return axios.get('/api/v1/group/read')
}

export {
    fetchGroup
}