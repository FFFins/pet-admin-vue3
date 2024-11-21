import { AxiosResponse, InternalAxiosRequestConfig } from './types'
import { ElMessage } from 'element-plus'
import { SUCCESS_CODE, TRANSFORM_REQUEST_DATA } from '~/constants'
import { useUserStoreWithOut } from '~/store/modules/user'

export function objToFormData(obj: Recordable) {
    const formData = new FormData()
    Object.keys(obj).forEach((key) => {
        formData.append(key, obj[key])
    })
    return formData
}

const defaultRequestInterceptors = (config: InternalAxiosRequestConfig) => {
    console.log(config.data)
    if (
        config.method === 'post' &&
        config.headers['Content-Type'] === 'application/x-www-form-urlencoded'
    ) {
    } else if (
        TRANSFORM_REQUEST_DATA &&
        config.method === 'post' &&
        config.headers['Content-Type'] === 'multipart/form-data' &&
        !(config.data instanceof FormData)
    ) {
        config.data = objToFormData(config.data)
    }
    if (config.method === 'get' && config.params) {
        let url = config.url as string
        url += '?'
        const keys = Object.keys(config.params)
        for (const key of keys) {
            if (config.params[key] !== void 0 && config.params[key] !== null) {
                url += `${key}=${encodeURIComponent(config.params[key])}&`
            }
        }
        url = url.substring(0, url.length - 1)
        config.params = {}
        config.url = url
    }
    console.log(config.data)
    return config
}

const defaultResponseInterceptors = (response: AxiosResponse) => {
    console.log(response.data)
    if (response?.config?.responseType === 'blob') {
        return response
    } else if (response.data.code === SUCCESS_CODE) {
        console.log('response:',response.data)
        return response.data
    } else {
        ElMessage.error(response?.data?.message)
        if (response?.data?.code === 401) {
            const userStore = useUserStoreWithOut()
            userStore.removeToken();
        }
    }
}

export { defaultResponseInterceptors, defaultRequestInterceptors }
