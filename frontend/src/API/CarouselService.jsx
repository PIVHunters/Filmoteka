import axios from "axios";

export default class CarouselService {
    static async getAll() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=8')
        return response.data
    }
}