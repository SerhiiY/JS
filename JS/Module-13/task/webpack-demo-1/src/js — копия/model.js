import uuid from 'uuid-v4';
import axios from 'axios';

export default class Model {
    constructor(items = []){
        this.items = items;
    }

    addItem(text) {
        const item = {
            id: uuid(),
            url: text,
        }

        this.items.push(item);
        return item;
    }

    updateItem(id, props) {
        const item = this.items.find(item => item.id === id);

        const keys = Object.keys(props);

        keys.forEach(key => (item[key] = props[key]));
    }

    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
    }

    removeAllItems() {
        this.items = [];
    }
}