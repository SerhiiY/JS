import EventEmitter from './services/event-emitter';

export default class View extends EventEmitter {
    constructor() {
        super();
        
        this.urlList = document.querySelector('.url-list');

    }

    init(newList) { // Отрисовывает карточки при загрузке страницы
        this.urlList.append(...newList);
    }

    createCard(card) { // Создает и возвращает новую карточку, используя данные из БД
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
        return listElem;
    }


    addCard(newCard) { // Отрисовывает карточки при ручном добавлении
        this.urlList.prepend(newCard);
    }

    removeCard(id) { // Удаляет карточку по ID со страницы
        const listItem = this.urlList.querySelector(`[data-id="${id}"]`);
        this.urlList.removeChild(listItem);
    }

    removeAllCards() {
        this.urlList.innerHTML = '';
    }
}