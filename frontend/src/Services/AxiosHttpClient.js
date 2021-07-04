import Axios from 'axios';

export default class AxiosHttpClient {
    configs = {
        baseURL: 'http://localhost:3333',
        headers: {'Content-Type': 'application/json'}
    };
    client = Axios.create(this.configs);

    constructor() {
        this.client.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            if (401 === error.response.status) {
                window.location.href = "/login";
            } else {
                return Promise.reject(error);
            }
        });
    }

    async get(path, params) {
        return await this.client.get(path, {...this.configs, params});
    }

    async post(path, payload, params) {
        return await this.client.post(path, payload, {...this.configs, params});
    }

    async put(path, payload, params) {
        return await this.client.put(path, payload, {...this.configs, params});
    }

    async patch(path, payload, params) {
        return await this.client.patch(path, payload, {...this.configs, params});
    }

    async delete(path, params) {
        return await this.client.delete(path, {...this.configs, params});
    }
}