let userLogin = prompt('Enter new user login:');
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

function isLoginValid(login) {                  // Функция на проверку соответствия логина длине
  return login.length <= 16 && login.length >= 4;
}

function isLoginUnique(logins, login) {      // Функция на проверку отсутствия логина в массиве
return !logins.includes(login);
}

function addLogin(logins, login) {                           // Функция проверки и добавления логина в массив
  if(!isLoginValid(login)){                                 // Если логин не прошел проверку на длину
    alert('Ошибка! Логин должен быть от 4 до 16 символов'); // Выдать ошибку
  }else{
    if(!isLoginUnique(logins, login)){                      // Если логин не прошел проверку на уникальность
      alert('Такой логин уже используется!');               // Выдать,что уже используется
    }else{                                                  // Если все проверки пройдены
      logins.push(login);                                   // Добаить логин в массив
      console.log(logins);                                  // Вывести новый массив
      alert('Логин успешно добавлен!');                     // Вывести сообщение об успешном добавлении логина
    }
  }
}
addLogin(logins, userLogin);
// // Вызовы функции для проверки
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
