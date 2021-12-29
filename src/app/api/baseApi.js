const axios = require('axios');
const printer = require('../../config/logger/logger')

class BaseApi {
    constructor() {
        this.axios = axios;
        this.axios.defaults.baseURL = 'https://www.ableton.com';
    }
    

    async get(url) {
        const data = {
            method: 'Get',
            url,
        }

        try {
        const resp = await this.axios(data);
        printer.print('method',`GET ${this.axios.defaults.baseURL}${url}request is completed with status code ${resp.status}`);
        return resp;
        } catch (err) {
            if(err.response){
            printer.print('WARN',`${this.axios.defaults.baseURL}${url}request is completed with status code ${err.response.status}`);
            return err.response;
            }
            printer.print('ERROR',`GET ${this.axios.defaults.baseURL}${url}request is completed with error ${err.message}`);
            throw err;
        }
    }
}

module.exports = BaseApi;