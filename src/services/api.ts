import axios from 'axios'

const api = axios.create({
  baseURL: 'https://frontbreno.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api