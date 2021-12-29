const Ui = require('../app/ui/ui');
const chai = require('chai');
const Api = require('./api/api');


class App {
   
    get expect() {
        return chai.expect;
    }

    ui = new Ui();
    api = new Api();
}

module.exports = new App();