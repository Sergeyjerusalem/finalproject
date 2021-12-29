const Header = require('./objects/controls/header/header');
const LoginForm = require('./objects/controls/login/login');
const PanelBlog = require('./objects/controls/panelBlog/panelBlog');
const PageObject = require('./objects/pageObject');
const MainNavLink = require('./objects/controls/mainNavLink/mainNavLink');
const Packs = require('./objects/controls/packs/packs');
const Help = require('./objects/controls/help/help')

class Ui extends PageObject {
    super() {

    }
    mainnavlink = new MainNavLink();
    header = new Header();
    loginform = new LoginForm();
    panelblog = new PanelBlog();
    packs = new Packs();
    help = new Help();
    


}


module.exports = Ui;