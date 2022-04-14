import axios from "axios";
import { getFromStorage } from "../utils";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api',
});

export default instance
// "https://sproj-bds.herokuapp.com/api" ||