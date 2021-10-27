import axios from "axios";


export const Res = axios.create({
    baseURL : "https://api.github.com/search/users",
});