import EventEmitter from './services/event-emitter';

export default class View extends EventEmitter {
    constructor() {
        super();
        
        this.urlAddForm = document.querySelector(".url-add-form");
        this.urlInput = this.urlAddForm.querySelector('.url-input');
        this.urlAddBtn = this.urlAddForm.querySelector('.url-add-btn');
        this.urlRemoveAllBtn = this.urlAddForm.querySelector('.url-remove-all-btn');
        this.urlList = document.querySelector('.url-list');

        this.urlAddForm.addEventListener('submit', this.handleAdd.bind(this));
        this.urlRemoveAllBtn.addEventListener('click', this.removeAllCards.bind(this));
    }

    handleAdd(evt) {
        evt.preventDefault();

        const {value} = this.urlInput;

        if(value === '') return;

        const pattern = /^(?:(?:https?|ftp|telnet):\/\/(?:[a-z0-9_-]{1,32}(?::[a-z0-9_-]{1,32})?@)?)?(?:(?:[a-z0-9-]{1,128}\.)+(?:com|net|org|mil|edu|arpa|ru|gov|biz|info|aero|inc|name|[a-z]{2})|(?!0)(?:(?!0[^.]|255)[0-9]{1,3}\.){3}(?!0|255)[0-9]{1,3})(?:\/[a-z0-9.,_@%&?+=\~\/-]*)?(?:#[^ \'\"&<>]*)?$/i;
        const result = pattern.test(value);
        if(result){
            this.emit('add', value);
        }else{
            alert('Ссылка не корректная, пожалуйста, проверьте написание');
        };
    }

    createCard(card) {
        const listElem = document.createElement('li');
        listElem.dataset.id = card.id;
        listElem.classList.add('url-list-elem');

        const button = document.createElement('button');
        button.textContent = 'Удалить';
        button.dataset.action = 'remove';
        button.classList.add('button');

        const text = document.createElement('p');
        text.textContent = card.url;
        text.classList.add('url');

        listElem.append(button, text);

        this.appendEventListeners(listElem);

        return listElem;
    }


    addCard(card) {
        const newCard = this.createCard(card);

        this.urlAddForm.reset();

        this.urlList.appendChild(newCard);
    }

    appendEventListeners(listElem) {
        const removeBtn = listElem.querySelector('[data-action="remove"]');
        removeBtn.addEventListener('click', this.handleRemove.bind(this));
    }

    handleRemove({target}) {
        const listElem = target.closest('.url-list-elem'); 
        this.emit('remove', listElem.dataset.id);
    }

    removeCard(id) {
        const listItem = this.urlList.querySelector(`[data-id="${id}"]`);
        this.urlList.removeChild(listItem);
    }

    handleRemoveAll() {
        this.emit('removeAll');
    }

    removeAllCards() {
        this.urlList.innerHTML = '';
    }
}