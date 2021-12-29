import { Selector } from 'testcafe';


class Help {

     searchField = Selector('.search-form__field');
     searchResults = Selector('.search-results__items li');
     submitButton = Selector('input.button.search-form__button');

     articleTitle = Selector('article > div > div > h1')

     articles = Selector('div:nth-child(3) > div > div > p:nth-child(1) > a')

}
module.exports = Help;