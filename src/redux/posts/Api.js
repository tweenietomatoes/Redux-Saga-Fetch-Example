import axios from 'axios'

const fetchPosts = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts');
}

const Api = {
    fetchPosts
}

export default Api
