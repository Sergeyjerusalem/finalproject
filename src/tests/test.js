const app = require('../app/app');
const user = require('../config/role/role')

fixture(`Getting Started`)
    .page`https://www.ableton.com/`
    .beforeEach(async t => {
        await t.useRole(user.registeredUser)
    });


test('Test 1 Checking the text of the PanelBlog', async t => {
    await t.scrollIntoView(app.ui.panelblog.container)
    await app.ui.compareTextForEach(await app.ui.panelblog.menuItem, await app.ui.panelblog.pbData);


});

test('Test 2, Checking the text of the header', async t => {

    await app.ui.compareTextForEach(await app.ui.header.menuItem, await app.ui.header.headerData)


});

test('Test 3, checking the text of the main navigation and its workability.', async t => {
    await t
        .scrollIntoView(app.ui.panelblog.container)
        .click(app.ui.panelblog.menuItem.nth(3))

    await app.ui.clickForEach(app.ui.mainnavlink.menuItem)
    await app.ui.compareTextForEach(await app.ui.mainnavlink.menuItem, await app.ui.mainnavlink.mainNavLinkData)



});

test('Test 4 Checking the behaviour with packs', async t => {
    await t
        .click(app.ui.header.menuItem.nth(4))
        .click(app.ui.packs.genreFilterButton)
        .wait(2000)
    await app.ui.clickByTextParam(app.ui.packs.instrumentItem, 'Loops');
    await app.ui.clickByTextParam(app.ui.packs.genreItem, 'Cinematic');

    await t
        .scrollIntoView(app.ui.packs.packItem.nth(52))
        .click(app.ui.packs.packItem.nth(52))
    await app.ui.checkExistance(app.ui.packs.packTitle)

});

test('Test 5 Checking the behaviour with test', async t => {
    await t.click(app.ui.header.menuItem.nth(5));
    await app.ui.Type(app.ui.help.searchField, 'installation');
    await t
        .wait(2000)
        .click(app.ui.help.submitButton)
        .click(app.ui.help.searchResults.nth(1))
    await app.ui.checkExistance(app.ui.help.articleTitle)


});


test('first api test', async t => {
    const resp = await app.api.link.getSummary('en/live/');
    app.expect(resp.status).to.equal(200);
});


test('second api test', async t => {
    const resp = await app.api.link.getSummary('/en/push/');
    app.expect(resp.status).to.equal(200);
});

test('third api test', async t => {
    const resp = await app.api.link.getSummary('/en/packs/');
    app.expect(resp.status).to.equal(200);
});


