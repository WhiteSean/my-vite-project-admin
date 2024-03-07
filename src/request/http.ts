import axios from "axios";
import { Message } from '@arco-design/web-vue';

const http = axios.create({
  baseURL: '',
  timeout: 10000
});

http.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    Message.error('请求异常');
    return Promise.reject(err);
  }
);

http.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    Message.error('请求异常');
    return Promise.reject(err);
  }
);

export default http;

export const successResponse = (data: unknown) => {
  return {
    data,
    status: 'ok',
    msg: '请求成功',
    code: 2000,
  };
};

export const failResponse = (data: unknown, msg: string, code = 5000) => {
  return {
    data,
    status: 'fail',
    msg: msg || '请求失败',
    code,
  };
};