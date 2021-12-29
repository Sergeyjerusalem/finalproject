import { t } from 'testcafe';


class PageObject {

    async compareText(obj, data) {
        await t.expect(obj.innerText).contains(data);
    }


    async compareTextForEach(obj, data) {
        for (let i = 0; i < await obj.count; i++) {
            for (let k = i; k < await data.length; k++) {
                await t.expect(await obj.nth(i++).innerText).eql(await data[k]);
            }
        }
    }

    async clickForEach(obj) {
        for (let i = 0; i < await obj.count; i++) {
            await t.click(obj.nth(i));
        }
    }

    async clickByTextParam (obj, par) {
        await t.click(obj.withText(par));
    }

    async checkExistance (obj) {
        const exist = await obj.exists;
        await t.expect(exist).ok();
    }

    async Type(obj, text) {
        t.typeText(obj, text);
    }




}
module.exports = PageObject;