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
        // return Api({
        //     url: 'files/' + fields + '.csv',
        //     method: 'GET',
        //     responseType: 'blob', // important
        // }).then((response) => {
        //     const url = window.URL.createObjectURL(new Blob([response.data]));
        //     const link = document.createElement('a');
        //     link.href = url;
        //     link.setAttribute('download', 'file.pdf');
        //     document.body.appendChild(link);
        //     link.click();
        // })
    }
}