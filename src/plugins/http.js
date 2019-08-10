import axios from 'axios'

const baseURL = process.env.VUE_APP_API_URL || '/api'

const http = axios.create({
  baseURL
})

export default http
