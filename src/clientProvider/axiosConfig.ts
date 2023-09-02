import axios from "axios";

const API_URL = "https://api.coingecko.com/api/v3";

const instance = axios.create({
    baseURL: API_URL,
});

export default instance;