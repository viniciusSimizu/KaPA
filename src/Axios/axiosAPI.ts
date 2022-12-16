import {Axios} from 'axios'
import {cfgApi} from "../Configs/cfgApi";

const {apiUrl} = cfgApi

export const axiosAPI = new Axios({
    baseURL: apiUrl
})