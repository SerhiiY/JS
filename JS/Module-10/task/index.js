let formGetAll = document.querySelector(".get-all"),
    formGet = document.querySelector(".get-by-id"),
    formAdd = document.querySelector(".add-user"),
    formRemove = document.querySelector(".remove-user"),
    formUpdate = document.querySelector(".update-user"),
    getUserInput = document.querySelector(".get-user-input"),
    removeUserInput = document.querySelector(".remove-user-input"),
    updateUserInput = document.querySelector(".update-user-input"),

    newUserName = document.querySelector('.new-user-name'),
    newUserAge = document.querySelector('.new-user-age'),

    updateUserName = document.querySelector('.update-user-name'),
    updateUserAge = document.querySelector('.update-user-age'),

    result = document.querySelector(".result"),
    API_URL = "https://test-users-api.herokuapp.com/users/";

formGetAll.addEventListener("submit", getAllUsers);
formGet.addEventListener("submit", getUserById);
formAdd.addEventListener("submit", addUser);
formRemove.addEventListener("submit", removeUser);
formUpdate.addEventListener("submit", updateUser);

function getAllUsers(event) {
    event.preventDefault();
    fetch(API_URL)                // Совершить запрос по ссылке
    .then( response => {                      // Для запроса по ссылке выполнить функцию
        if(response.ok) return response.json(); // Если ответ по запросу получен, то вернуть результат запроса в json объект
        clearInputs();        
        throw new Error('Response is not ok!'); // Если ответ не получен (ссылки не существует), то выдать ошибку с текстом
    })
    .then( el => {            // Для полученного объекта выполнить функцию
        result.innerHTML = "";
        el.data.forEach(el => { 
            result.innerHTML += `
            <div>
            <p style="min-width: 250px">ID: ${el.id}</p>
            <p style="min-width: 200px">Name: ${el.name}</p>
            <p style="min-width: 50px">Age: ${el.age}</p>
            </div>
            `;  // В div с классом result поместим следующие строки зо значениями ключей объекта
        });
    })
    .catch(error => console.error('Your fetch has an error!', error));
}

function getUserById(event) {
    event.preventDefault();
    fetch(API_URL + getUserInput.value)                // Совершить запрос по ссылке
    .then( response => {
        if(response.ok) return response.json(); // Если ответ по запросу получен, то вернуть результат запроса в json объект
        clearInputs();
        throw new Error('Response is not ok!'); // Если ответ не получен (ссылки не существует), то выдать ошибку с текстом
        })
    .then( el => { 
        if(el.data.id !== "undefined"){
            result.innerHTML = `
            <div>
            <p style="min-width: 250px">ID: ${el.data.id}</p>
            <p style="min-width: 200px">Name: ${el.data.name}</p>
            <p style="min-width: 50px">Age: ${el.data.age}</p>
            </div>
            `;  // В div с классом result поместим следующие строки зо значениями ключей объекта
        }else{
            alert('Такого пользователя не существует!')
        }
    })
    .catch(error => console.error('Your fetch has an error!', error, alert("Ошибка! Пользователя с таким id не существует")));
}


function addUser(event) {
    event.preventDefault();
    let newUser = {
    name: newUserName.value,
    age: newUserAge.value,
};
    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
        "Content-Type": "application/json",
        }
    })                // Совершить запрос на добавление пользователя в массив по ссылке
    .then( response => {
        if(response.ok) return response.json(); // Если ответ по запросу получен, то вернуть результат запроса в json объект
        clearInputs();
        throw new Error('Response is not ok!'); // Если ответ не получен (ссылки не существует), то выдать ошибку с текстом
    })
    .then( () => {
        clearInputs();
        alert("Пользователь успешно добавлен!");
    })
    .catch(error => console.error('Your fetch has an error!', error));
}

function removeUser(event) {
    event.preventDefault();
    fetch(API_URL + removeUserInput.value, {
        method: 'DELETE',
    })                // Совершить запрос об удалении пользователя с id "..." из массива по ссылке 
    .then( response => {
        if(response.ok) return response.json(); // Если ответ по запросу получен, то вернуть результат запроса в json объект
        clearInputs();        
        alert("Ошибка! Пользователя с таким id не существует");
        throw new Error('Response is not ok!'); // Если ответ не получен (ссылки не существует), то выдать ошибку с текстом
    })
    .then( () => {
        clearInputs();
        alert("Пользователь успешно удален!");
    })
    .catch(error => console.error('Your fetch has an error!', error));
}

function updateUser(event) {
    event.preventDefault();
    let newUser = {
        name: updateUserName.value,
        age: updateUserAge.value,
    };
    fetch(API_URL + updateUserInput.value, {
        method: 'PUT',
        body: JSON.stringify(newUser),
        headers: {
        "Content-Type": "application/json",
        }
    })                // Совершить запрос по ссылке
    .then( response => {
        if(response.ok) return response.json(); // Если ответ по запросу получен, то вернуть результат запроса в json объект
        clearInputs();
        alert("Ошибка! Пользователя с таким id не существует");
        throw new Error('Response is not ok!'); // Если ответ не получен (ссылки не существует), то выдать ошибку с текстом
    })
    .then( () => {
        clearInputs();
        alert("Данные пользователя успешно обновлены");
    })
    .catch(error => console.error('Your fetch has an error!', error));
}

function clearInputs () {
    result.innerHTML = "";
    newUserName.value = "";
    newUserAge.value = "";
    updateUserName.value = "";
    updateUserAge.value = "";
}