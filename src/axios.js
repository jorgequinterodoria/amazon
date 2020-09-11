import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://us-central1-fir-7cda1.cloudfunctions.net/api'
})

export default instance