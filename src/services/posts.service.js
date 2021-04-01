import axios from "axios";

const postsService = {
    getAll: async () => {
        const response = await axios.get('http://jsonplaceholder.typicode.com/posts');

        return response.data
    }
}

export default postsService