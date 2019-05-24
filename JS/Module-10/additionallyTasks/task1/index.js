const  input = document.querySelector("input"),
       form = document.querySelector(".search-form"),
       result = document.querySelector(".result"),
       API_URL = "https://restcountries.eu/rest/v2/name/";

form.addEventListener("submit", fetchCountryData);

function fetchCountryData(event) {
  event.preventDefault();
  fetch(API_URL + input.value)                // Совершить запрос по ссылке
    .then( response => {                      // Для запроса по ссылке выполнить функцию
      if(response.ok) return response.json(); // Если ответ по запросу получен, то вернуть результат запроса в json объект
      throw new Error('Response is not ok!'); // Если ответ не получен (ссылки не существует), то выдать ошибку с текстом
    })
    .then( data => {                          // Для полученного объекта выполнить функцию
        result.innerHTML = `
        <h1>${data[0].name}</h1>
        <p>${data[0].capital}</p>
        <p>${data[0].currencies[0].name}</p>
        <img src="${data[0].flag}" alt="" style="width: 100px">
        `;  // В div с классом result поместим следующие строки зо значениями ключей объекта
    })
    .catch(error => console.error('Your fetch has an error!', error));
}
