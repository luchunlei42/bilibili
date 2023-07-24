import axios from "axios";
import request from '@/utils/request'
const baseUrl = 'http://localhost:8090'
// 允许跨域

const http = request


const uploadVieo = (form)=>{
    return http.post('/apix/video/upload/frame', {form})
}

const getRecommendTags =(catId) =>{
    return http.get(`/apix/video/tag/${catId}`)
}

const getZoneTree = ()=>{
    return request.get('/apix/video/zone/tree')
}

/**
 * 根据文件的md5获取未上传完的任务
 * @param identifier 文件md5
 * @returns {Promise<AxiosResponse<any>>}
 */
const taskInfo = (identifier) => {
    return http.get(`/apix/video/minio/tasks/${identifier}`)
}

/**
 * 初始化一个分片上传任务
 * @param identifier 文件md5
 * @param fileName 文件名称
 * @param totalSize 文件大小
 * @param chunkSize 分块大小
 * @returns {Promise<AxiosResponse<any>>}
 */
const initTask = ({ identifier, fileName, totalSize, chunkSize }) => {
    return http.post('/apix/video/minio/tasks', {identifier, fileName, totalSize, chunkSize})
}

/**
 * 获取预签名分片上传地址
 * @param identifier 文件md5
 * @param partNumber 分片编号
 * @returns {Promise<AxiosResponse<any>>}
 */
const preSignUrl = ({ identifier, partNumber }) => {
    return http.get(`/apix/video/minio/tasks/${identifier}/${partNumber}`)
}

/**
 * 合并分片
 * @param identifier
 * @returns {Promise<AxiosResponse<any>>}
 */
const merge = (identifier) => {
    return http.post(`/apix/video/minio/tasks/merge/${identifier}`)
}

export {
    taskInfo,
    initTask,
    preSignUrl,
    merge,
    getZoneTree,
    getRecommendTags,
    uploadVieo,
}