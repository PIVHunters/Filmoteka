import axios from "axios";

export default class NewsService {
    static async getAll(currentPage) {
        const response = await axios
            .get(`https://jsonplaceholder.typicode.com/photos?_limit=18&_page=${currentPage}`)
        return response.data
    }
}