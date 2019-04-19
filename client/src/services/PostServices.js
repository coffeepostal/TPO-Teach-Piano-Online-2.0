//  Import API from the services folder
import Api from '@/services/Api'

export default {
    addPost (params) {
        return Api().post('posts', params)
    }
}