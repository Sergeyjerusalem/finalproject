import { Selector } from 'testcafe';


class MainNavLink {

     mainNavLinkData = ['All posts', 'Artists', 'News', 'Downloads', 'Tutorials', 'Videos', 'Loop', 'One Thing'];
     container = Selector('#js-headroom > nav:nth-child(3) > ul ');
     menuItem = this.container.find('li');

}
module.exports = MainNavLink;