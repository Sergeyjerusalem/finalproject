import { Selector } from 'testcafe';


class PanelBlog {

     pbData = ['All posts', 'Artists', 'News', 'Downloads', 'Tutorials', 'Videos', 'Loop', 'One Thing'];
     container = Selector('section.panel-blog-categories.bg-dolphin');
     menuItem = this.container.find('a');

}
module.exports = PanelBlog;