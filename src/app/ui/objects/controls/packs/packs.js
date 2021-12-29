import { Selector } from 'testcafe';


class Packs {


    genreFilterButton = Selector('div.filters__expand-tags.icon-arrow');

    instrumentItem = Selector('div.filters__tags.bg-dolphin > div:nth-child(2)> div');
    genreItem = Selector('div.filters__tags.bg-dolphin > div:nth-child(1)>div');
    packItem = Selector('div.four-up.with-padding.with-equal-height > div> div > div.pack-teaser__media');

    packTitle = Selector('.pack-details__title');

}
module.exports = Packs;