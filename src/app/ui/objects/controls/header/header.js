import { Selector } from 'testcafe';


class Header {
    menuItem = Selector('#main-nav-content > ul > li');
    headerData = ['Live', 'Push', 'Link', 'Shop', 'Packs', 'Help', 'More', 'Try Live for free', 'Account',''];
}
module.exports = Header;