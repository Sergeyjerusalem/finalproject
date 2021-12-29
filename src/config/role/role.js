import { Role } from 'testcafe';
const app = require('../../app/app');

class User {

    registeredUser = Role('https://www.ableton.com/en/login/?next=/', async t => {
        await t
        .typeText(app.ui.loginform.user, 'jijj4395@gmail.com')
        .typeText(app.ui.loginform.password.nth(0), 'lol123')
        .click(app.ui.loginform.loginButton.nth(0));
    });
}

module.exports = new User();