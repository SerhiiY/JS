export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.model.init();
        this.view.init(this.model.items);

        this.view.on('add', this.addCard.bind(this));
        this.view.on('remove', this.removeCard.bind(this));
        this.view.on('removeAll', this.removeAllCards.bind(this));
    }

    addCard(text) {
        const item = this.model.addItem(text);
        this.view.addCard(item);
    }

    removeCard(id) {
        this.model.removeItem(id);
        this.view.removeCard(id);
    }

    removeAllCards() {
        this.model.removeAllItems();
        this.view.removeAllCards();
    }

}