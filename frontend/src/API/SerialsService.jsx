import axios from "axios";

export default class SerialsService {
    static async getAll(currentPage) {
        const response = await axios
            .get(`https://jsonplaceholder.typicode.com/photos?_limit=30&_page=${currentPage}`)
        return response.data
    }
}