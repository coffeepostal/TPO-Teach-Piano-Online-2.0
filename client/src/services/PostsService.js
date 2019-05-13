//  Import API from the services folder
import Api from '@/services/Api'

export default {
    fetchPosts() {
        return Api().get('posts')
    },

    addPost(params) {
        return Api().post('posts', params)
    },

    deletePost(id) {
        return Api().delete('posts/' + id)
    },

    exportCSV(fields) {
        return Api().get('export/' + fields)
    },

    downloadCSV(fields) {
        return Api().get('csv/' + fields)
    }
}