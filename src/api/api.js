import axios from './axios'

// 首页
export const getMainList = () => {
    return axios.get('/api/mall')
}

// 全部商品
export const getGoodsList = (page, pageSize) => {
    return axios.get('/api/goods', {page, pageSize})
}

// 商品详情
export const getGoodsDetail = id => {
    return axios.get('/api/goods/' + id)
} 
