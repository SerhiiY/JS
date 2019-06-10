const  form = document.querySelector(".search-form"),
       result = document.querySelector(".result"),
       input = document.querySelector('.input')
       API_URL = "https://jsonplaceholder.typicode.com/users/";

form.addEventListener("submit", fetchUsers);

function fetchUsers(event) {
  event.preventDefault();
  fetch(API_URL + input.value)                // Совершить запрос по ссылке
    .then( response => {
      if(response.ok) return response.json(); // Если ответ по запросу получен, то вернуть результат запроса в json объект
      throw new Error('Response is not ok!'); // Если ответ не получен (ссылки не существует), то выдать ошибку с текстом
      result.textContent = "Ошибка! Пользователя с таким id не существует";
    })
    .then( el => {
        result.innerHTML = `
        <div>
        <p>ID: ${el.id}</p>
        <p>Name: ${el.name}</p>
        <p>E-mail: ${el.email}</p>
        <p>City: ${el.address.city}</p>
        <p>Company: ${el.company.name}</p>
        <p>Website: ${el.website}</p>
        </div>
        `;  // В div с классом result поместим следующие строки зо значениями ключей объекта
    })
    .catch(error => console.error('Your fetch has an error!', error));
}
