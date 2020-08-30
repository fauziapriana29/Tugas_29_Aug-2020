import React from 'react'
import axios from '../../../node_modules/axios/dist/axios.js'

function deleteList(id) {

    let confirm = window.confirm('Are You Sure to Delete List ?')

    if( confirm == 'true') {
        axios.delete(`http://localhost:3000/list/${id}`).then((respone) => {
            window.alert('List Deleted')
        }).catch((error) => {
            window.alert('delete is error')
        })
    }else {
        window.alert('cancel to delete')
    }
}
export default deleteList