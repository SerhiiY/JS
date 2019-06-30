import Model from "../js/model";

describe('Model of cards', () => {
    let testModel;
    beforeEach(() => {
        testModel = new Model();
    });
    it('Should create card instance', () => {
        expect(testModel instanceof Model).toBe(true);
    });

    it('Should init data from local storage to array', () => {
        localStorage.setItem("urlArr", JSON.stringify([{id: 111, url: "www.com"}]));
        testModel.init();
        expect(testModel.items).toEqual([{id: 111, url: "www.com"}]);
    });
    it('Should add new item to array and write to local storage', () => {
        localStorage.setItem("urlArr", JSON.stringify([{id: 111, url: "www.com"}]));
        testModel.init();
        testModel.addItem({url: "qqq.com"});
        expect(testModel.items[0].url).toHaveProperty("url", "qqq.com");
        const data = JSON.parse(localStorage.getItem("urlArr"));
        expect(data[0].url).toHaveProperty("url", "qqq.com");
    });
    it('Should remove item from array and local storage', () => {
        localStorage.setItem("urlArr", JSON.stringify([{id: 111, url: "www.com"}, {id: 222, url: "qqq.com"}, {id: 333, url: "zzz.com"}]));
        testModel.init();
        testModel.removeItem(111);
        const data = JSON.parse(localStorage.getItem("urlArr"));
        expect(data).toEqual([{id: 222, url: "qqq.com"}, {id: 333, url: "zzz.com"}]);
        expect(testModel.items).toEqual([{id: 222, url: "qqq.com"}, {id: 333, url: "zzz.com"}]);

    });
        it('Should remove all items from array and local storage', () => {
        localStorage.setItem("urlArr", JSON.stringify([{id: 111, url: "www.com"}, {id: 222, url: "qqq.com"}]));
        testModel.init();
        testModel.removeAllItems();
        const data = JSON.parse(localStorage.getItem("urlArr"));
        expect(data).toEqual([]);
        expect(testModel.items).toEqual([]);
    });

    it('Should check if url is valid', () => {
        expect(testModel.checkUrl("www")).toBe(false);
        expect(testModel.checkUrl("www.com.ua")).toBe(true);
        expect(testModel.checkUrl("www.com.ua/folder/folder?html")).toBe(true);
    });

})