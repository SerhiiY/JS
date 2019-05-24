const  form = document.querySelector(".search-form"),
       userTable = document.querySelector(".users-table"),
       API_URL = "https://jsonplaceholder.typicode.com/users/";

form.addEventListener("submit", fetchUsers);

function fetchUsers(event) {
  event.preventDefault();
  fetch(API_URL)                // Совершить запрос по ссылке
    .then( response => {                      // Для запроса по ссылке выполнить функцию
      if(response.ok) return response.json(); // Если ответ по запросу получен, то вернуть результат запроса в json объект
      throw new Error('Response is not ok!'); // Если ответ не получен (ссылки не существует), то выдать ошибку с текстом
    })
    .then( data => {                          // Для полученного объекта выполнить функцию
        data.forEach(el => {
        userTable.innerHTML += `
        <div>
        <p style="width: 180px">${el.name}</p>
        <p style="width: 220px">${el.email}</p>
        <p style="width: 130px">${el.address.city}</p>
        <p style="width: 170px">${el.company.name}</p>
        <p style="width: 100px">${el.website}</p>
        </div>
        `;  // В div с классом result поместим следующие строки зо значениями ключей объекта
        });
    })
    .catch(error => console.error('Your fetch has an error!', error));
}
