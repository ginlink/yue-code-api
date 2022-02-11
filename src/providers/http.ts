import axios from 'axios';

export const httpProvider = axios.create({
  // baseURL: process.env.SERVER_API_URL,
  timeout: 5000,
});

httpProvider.interceptors.request.use(
  (config) => {
    return config;
  },

  () => {
    throw new Error('发起请求出错');
  },
);

httpProvider.interceptors.response.use(
  (data) => {
    if (data.status && +data.status === 200) {
      const res = data.data;

      return res;
    }
  },
  (err) => {
    if (err && err.response && err.response.status) {
      const status = err.response.status;

      switch (status) {
        case 504:
        case 404:
          console.log('[](服务器异常):');
          break;

        default:
          console.log('[](未知错误):');
      }
    }

    return Promise.reject(err);
  },
);
