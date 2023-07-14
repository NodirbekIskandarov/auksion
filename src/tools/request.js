import axios from 'axios'
import humps from 'humps'

// export const domain = 'http://95.130.227.129/'
// export const domain = 'http://192.168.1.157:8000/'
export const domain = 'https://domi.uz/'
// export const socketDomain = '95.130.227.129:8000'
export const socketDomain = '192.168.1.157:8000'
//  Add Base URL and change snake_case to camelCase
const baseAxios = axios.create({
    baseURL: `${domain}`,
    transformResponse: [
        ...axios.defaults.transformResponse,
        humps.camelizeKeys,
    ],
    transformRequest: [
        humps.decamelizeKeys,
        ...axios.defaults.transformRequest,
    ],
})

baseAxios.interceptors.request.use((config) => ({
    ...config,
    params: humps.decamelizeKeys(config.params),
}))

export default baseAxios
