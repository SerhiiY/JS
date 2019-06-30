export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.urlAddForm = document.querySelector(".url-add-form");
        this.urlInput = this.urlAddForm.querySelector('.url-input');
        this.urlAddBtn = this.urlAddForm.querySelector('.url-add-btn');
        this.urlRemoveAllBtn = this.urlAddForm.querySelector('.url-remove-all-btn');

        this.urlRemoveAllBtn.addEventListener('click', this.removeAllCards.bind(this));
        this.urlAddForm.addEventListener('submit', this.handleAdd.bind(this));

        this.init();
    }

    init() { // Отрисовывает весь список при загрузке старницы, используя БД
        this.model.init();
        const cards = this.model.items;
        const newList = cards.map(card => this.createCard(card));
        this.view.init(newList);
    }

    handleAdd(evt) { // Добавляет новые данные в БД, если они соответствуют требованиям, создает и отрисовывает карточку с новыми данными, ID, лисенерами
        evt.preventDefault();

        const text = this.urlInput.value;
        if(text === '') return;

        const result = this.model.checkUrl(text);
        if(result){
            const addedCard = this.addCard(text);
            this.view.addCard(addedCard);
        }else{
            alert('Ссылка не корректная, пожалуйста, проверьте написание');
        };
    }

    addCard(text) { // Добавляет новые данные в БД и возвращает готовую для отрисовки карточку с новыми данными, ID, лисенерами
        const item = this.model.addItem(text);

        this.urlAddForm.reset();

        return this.createCard(item);
    }

    createCard(item) { // Создает и возвращает готовую для отрисовки карточку с данными, ID, лисенерами
        const newCard = this.view.createCard(item);
        this.appendEventListeners(newCard);
        return newCard;
    }

    appendEventListeners(newCard) { // Добавляет лисенеры для кнопок карточки (удаление)
        const removeBtn = newCard.querySelector('[data-action="remove"]');
        removeBtn.addEventListener('click', this.handleRemove.bind(this));
    }
    // newCard = listElem
    handleRemove({target}) { // Удаляет карточку по ID
        const listElem = target.closest('.url-list-elem'); 
        this.removeCard(listElem.dataset.id);
    }

    removeCard(id) { // Удаляет карточку по ID из БД и со страницы
        this.model.removeItem(id);
        this.view.removeCard(id);
    }

    removeAllCards() {
        this.model.removeAllItems();
        this.view.removeAllCards();
    }
}