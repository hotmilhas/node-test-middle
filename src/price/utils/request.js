const requestify = require('requestify');

class Request {


    async get(url) {

        let options = {
            method: 'GET'
        };

        let response = await requestify.request(url, options);

        return response.getBody();

    }

    async post(dolarValue) {

        let options = {
            method: 'POST'
        };

        let response = await requestify.request(url, options);

        if (response.code == 200) {
            return response.getBody();
        }
    }
}

module.exports = new Request()