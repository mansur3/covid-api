import axios from "axios";


export const posts = axios.create({
    baseURL : "http://localhost:3001",
});

// export const comments = axios.create({
//     baseURL : "http://localhost:3001/comments", 
//     headers : {
//         authentication : "token123435",
//     }
// })