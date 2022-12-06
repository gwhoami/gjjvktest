const { default: axios } = require("axios");

const Instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

// Instance.interceptors.request.use((config) => {
//     config.headers['Content-Type'] = 'application/json';
//     return config;
// }, (error) => {
//     return Promise.reject(error);
// });

export const apiPostCall = (path, params) => {
    return Instance.post(path, params).then(res => res.data)
    .catch(Err => {
        return {isError: true, Error: Err}
    });
}

export const apiGetCall = (path, params) => {
    return Instance.get(path, {params: {...params}}).then(res => res.data)
    .catch(Err => {
        return {isError: true, Error: Err}
    });
}