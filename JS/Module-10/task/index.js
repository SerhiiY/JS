let   formGetAll = document.querySelector(".get-all"),
      formGet = document.querySelector(".get-by-id"),
      formAdd = document.querySelector(".add-user"),
      formRemove = document.querySelector(".remove-user"),
      formUpdate = document.querySelector(".update-user"),
      getUserInput = document.querySelector(".get-user-input"),
      removeUserInput = document.querySelector(".remove-user-input"),
      updateUserInput = document.querySelector(".update-user-input"),
      result = document.querySelector(".result"),
        API_URL = "https://jsonplaceholder.typicode.com/users/";

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
      throw new Error('Response is not ok!'); // Если ответ не получен (ссылки не существует), то выдать ошибку с текстом
    })
    .then( data => {            // Для полученного объекта выполнить функцию
      result.innerHTML = "";
      console.log(data);
      data.forEach(el => { 
      result.innerHTML += `
      <div>
      <p style="width: 50px">${el.id}</p>
      <p style="width: 250px">${el.name}</p>
      <p style="width: 250px">${el.phone}</p>
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
      throw new Error('Response is not ok!'); // Если ответ не получен (ссылки не существует), то выдать ошибку с текстом
      result.textContent = "Ошибка! Пользователя с таким id не существует";
    })
    .then( el => { 
      console.log(el);
      result.innerHTML = `
      <div>
      <p style="width: 50px">ID: ${el.id}</p>
      <p style="width: 250px">Name: ${el.name}</p>
      <p style="width: 250px">Phone: ${el.phone}</p>
      </div>
      `;  // В div с классом result поместим следующие строки зо значениями ключей объекта
    })
    .catch(error => console.error('Your fetch has an error!', error));
}

const newUser = {
  name: "Porter Robinson",
  phone: "000-222-444-333-555",
  website: "www.clonemyid.com",
};

function addUser(event) {
  event.preventDefault();
  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
    "Content-Type": "application/json",
    }
  })                // Совершить запрос на добавление пользователя в массив по ссылке
    .then( response => {
      if(response.ok) return response.json(); // Если ответ по запросу получен, то вернуть результат запроса в json объект
      throw new Error('Response is not ok!'); // Если ответ не получен (ссылки не существует), то выдать ошибку с текстом
    })
    .then( data => { 
      console.log(data);
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
      throw new Error('Response is not ok!'); // Если ответ не получен (ссылки не существует), то выдать ошибку с текстом
      result.textContent = "Ошибка! Пользователя с таким id не существует";
    })
    .then( data => {
      console.log(data);
      alert("Пользователь успешно удален!");
    })
    .catch(error => console.error('Your fetch has an error!', error));
}

function updateUser(event) {
  event.preventDefault();
  fetch(API_URL + updateUserInput.value, {
    method: 'PUT',
    body: JSON.stringify(newUser),
    headers: {
    "Content-Type": "application/json",
    }
  })                // Совершить запрос по ссылке
    .then( response => {
      if(response.ok) return response.json(); // Если ответ по запросу получен, то вернуть результат запроса в json объект
      throw new Error('Response is not ok!'); // Если ответ не получен (ссылки не существует), то выдать ошибку с текстом
    })
    .then( data => {
      console.log(data);
      alert("Данные пользователя успешно обновлены");
    })
    .catch(error => console.error('Your fetch has an error!', error));
}
