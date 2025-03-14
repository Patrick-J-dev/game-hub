import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'65088788769744d88e88f4f4b07b0a29'
    }
})