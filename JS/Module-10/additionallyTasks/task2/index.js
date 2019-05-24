const  input = document.querySelector("input"),
       form = document.querySelector(".search-form"),
       result = document.querySelector(".result"),
       API_URL = "https://api.github.com/users/SerhiiY";

form.addEventListener("submit", fetchUserData);

function fetchUserData(event) {
  event.preventDefault();
  fetch(API_URL + input.value)                // Совершить запрос по ссылке
    .then( response => {                      // Для запроса по ссылке выполнить функцию
      if(response.ok) return response.json(); // Если ответ по запросу получен, то вернуть результат запроса в json объект
      throw new Error('Response is not ok!'); // Если ответ не получен (ссылки не существует), то выдать ошибку с текстом
    })
    .then( el => {                          // Для полученного объекта выполнить функцию
        result.innerHTML = `
        <h1>Username: ${el.login}</h1>
        <p>Bio: ${el.bio}</p>
        <p>Public repos: ${el.public_repos}</p>
        <p>Avatar:</p>
        <img src="${el.avatar_url}" alt="" style="width: 200px">
        `;  // В div с классом result поместим следующие строки зо значениями ключей объекта
    })
    .catch(error => console.error('Your fetch has an error!', error));
}
