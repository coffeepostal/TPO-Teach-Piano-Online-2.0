//   Import Axios
import axios from 'axios'

//  Return the API settings, using Axios
export default() => {
    return axios.create({
        baseURL: `https://dev.teachpianoonline.pro:8888`
    })
}