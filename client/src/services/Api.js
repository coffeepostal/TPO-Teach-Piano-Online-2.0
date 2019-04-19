//   Import Axios
import axios from 'axios'

//  Return the API settings, using Axios
export default() => {
    return axios.create({
        baseURL: `http://localhost:80`
    })
}