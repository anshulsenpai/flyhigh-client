import axios from "axios"

const BASE_URL = "http://localhost:3000"
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDA0ODZlZGVkNTg0NWQ5MDBhY2Y2N2UiLCJpYXQiOjE2NzgwMTgzMTl9.JrirB5qzyuns7KxtLQWtXO2sEkjcbWD0FcAtkaEtuuE"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})


// export const userRequest = axios.create({
//     baseURL: BASE_URL,
//     headers : {"auth-token" : TOKEN}
// });