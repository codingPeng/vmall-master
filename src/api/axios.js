import axios from 'axios'

axios.defaults.url = 'http://localhost:3000'
axios.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest'
}
axios.defaults.timeout = 20000

let cancel, promiseArr = {}
const CancelToken = axios.CancelToken

// 请求拦截
axios.interceptors.request.use(config => {
    if (promiseArr[config.url]){
        promiseArr[config.url]('操作取消')
        promiseArr[config.url] = cancel
    } else {
        promiseArr[config.url] = cancel
    }
    return config
}, err => {
    return Promise.reject(err)
})

// 响应拦截
axios.interceptors.response.use(response => {
    return response
}, err => {
    return Promise.reject(err)
})

export default {
    // get
    get(url, params) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url,
                params,
                cancelToken: new CancelToken(c => {
                    cancel = c
                })
            }).then(res => resolve(res))
        })
    },
    // post
    post(url, params) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url,
                data: params,
                cancelToken: new CancelToken(c => {
                    cancel = c
                })
            }).then(res => resolve(res))
        })
    }
}
