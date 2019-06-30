import uuid from 'uuid-v4';
import axios from 'axios';

export default class Model {
    constructor(items = []){
        this.items = items;
    }

    init() {
        this.items = JSON.parse(localStorage.getItem("urlArr"));
    }

    addItem(text) {
        const item = {
            id: uuid(),
            url: text,
        }

        this.items.unshift(item);
        localStorage.setItem("urlArr", JSON.stringify(this.items));
        return item;
    }

    updateItem(id, props) {
        const item = this.items.find(item => item.id === id);
        const keys = Object.keys(props);
        keys.forEach(key => (item[key] = props[key]));

        localStorage.setItem("urlArr", JSON.stringify(this.items));

    }

    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
        localStorage.setItem("urlArr", JSON.stringify(this.items));

    }

    removeAllItems() {
        this.items = [];
        localStorage.setItem("urlArr", JSON.stringify(this.items));
    }
}