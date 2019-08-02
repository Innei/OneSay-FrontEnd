import axios from 'axios'

const baseURL = 'http://localhost:8001/api'

const http = axios.create({
    baseURL
})

export default http