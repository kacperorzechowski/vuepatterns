import axios from 'axios'

const baseURL = 'https://www.example-api.com'

export default () => {
    const axiosConfig = {
        baseURL
    }

    return axios.create(axiosConfig)
}
