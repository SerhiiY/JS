import "../css/style.css";
import Model from './model';
import View from './view';
import Controller from './controller';
import EventEmitter from './services/event-emitter';

const view = new View();
const model = new Model();

new Controller(model, view);

// let urlArr = JSON.parse(localStorage.getItem("urlArr")); // Преобразовать объект (массив), который хранится на диске в формате JSON в JS объект (массив) и записать в переменную

// let result = template(urlArr); // Записать в переменную обработанный шаблонизатором массив
// urlList.innerHTML = result; // Записать в urlList результат

// if(urlArr == null){ // Если массива не существует
//     urlArr = []; // Переменная будет массивом
//     localStorage.setItem("urlArr", JSON.stringify(urlArr)); // Добавить в локальное хранилище преобразованный в JSON строку массив с ключем "urlArr"
// }

// urlRemoveAllBtn.addEventListener('click', urlRemoveAllFn);

// function urlAddFn(evt){ // Функция добавления нового URL в список
//     evt.preventDefault(); // Предотвратить перезагрузку старницы
//     let pattern = /^(?:(?:https?|ftp|telnet):\/\/(?:[a-z0-9_-]{1,32}(?::[a-z0-9_-]{1,32})?@)?)?(?:(?:[a-z0-9-]{1,128}\.)+(?:com|net|org|mil|edu|arpa|ru|gov|biz|info|aero|inc|name|[a-z]{2})|(?!0)(?:(?!0[^.]|255)[0-9]{1,3}\.){3}(?!0|255)[0-9]{1,3})(?:\/[a-z0-9.,_@%&?+=\~\/-]*)?(?:#[^ \'\"&<>]*)?$/i;
//     const result = pattern.test(urlInput.value);
//     if(result){ // Выполнить функцию добавления со значением input'a в который вписываем новый URL
//     addFn(urlInput.value);
//     }else{
//     alert('Ссылка не корректная, пожалуйста, проверьте написание');
//     };
//     urlInput.value = ''; // Обнулить значение input'а после добавления URL'a
// }

// function addFn (url) {
//     urlArr.unshift({url: url}); // В начало JS массива записать объект с ключем "url" и его значением url
//     result = template(urlArr); // Обработать массив шаблонизатором и записать в переменную
//     urlList.innerHTML = result; // Вывести результат

//     localStorage.setItem("urlArr", JSON.stringify(urlArr)); // Записать в локальное хранилище новый массив, преобразованный в JSON
// }

// urlList.addEventListener('click', removeFn); // Полю с сылками добавить слушателя

// function removeFn (event) {
//     const target = event.target; // Присваиваем переменной текущую ссылку на объект, по которому кликнули
//     if(target.nodeName == 'BUTTON'){ // Если кликнули по кнопке
//         let arrEl = urlArr.find(el => el.url == target.nextElementSibling.textContent); // arrEl - элемент массива с таким же значением ключа url, как и у <p>, которая находится рядом с соответствующей кнопкой
//         let index = urlArr.indexOf(arrEl); // Найдем индекс этого элемента в массиве
//         if (index !== -1) urlArr.splice(index, 1); // Удалим элемент с таким индексом, если он есть в массиве

//         result = template(urlArr); // Снова шаблонизируем данные массива
//         urlList.innerHTML = result; // Выведем результат
//         localStorage.setItem("urlArr", JSON.stringify(urlArr)); // Запишем новый массив в локальное хранилище
//     }
// }

// function urlRemoveAllFn (evt) { // Функция для удаления всех URL
//     evt.preventDefault();
//     localStorage.removeItem("urlArr"); // Удалить из локального хранилища массив
//     urlArr = []; // Очистить JS массив
//     localStorage.setItem("urlArr", JSON.stringify(urlArr)); // Записать пустой массив в локальное хранилище
//     result = template(urlArr); // Шаблонизатор
//     urlList.innerHTML = result; // Отрисовка
// }
