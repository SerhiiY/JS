let userLogin = prompt('Enter new user login:');
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let i = 0;

function isLoginValid(login) {                  // Функция на проверку соответствия логина длине
  if(login.length <= 16 && login.length >= 4){  // Если длина логина от 4 до 16 символов, то
    return true;
  }else{
    return false;
  }
}
console.log(isLoginValid(userLogin));           // Вывести результат работы функции с аргументом, введенным пользователем

function isLoginUnique(allLogins, login) {      // Функция на проверку отсутствия логина в массиве
  for(let value of allLogins) {                 // Для каждого элемента массива с логинами
    if(login === value) {                       // Если логин равен существующему элементу массива, то
      i += 1;                                   // Счетчик +1
    }
  }
  if(i > 0){                                    // Если счетчик >0, значит хотябы 1 из элементов совпал
    return false;
  }else{
    return true;
  }
}
console.log(isLoginUnique(logins, userLogin));   // Вывести результат работы функции с аргументами (массив, новый логин)

function addLogin(allLogins, login) {                       // Функция проверки и добавления логина в массив
  if(isLoginValid(login) === false){                        // Если логин не прошел проверку на длину
    alert('Ошибка! Логин должен быть от 4 до 16 символов'); // Выдать ошибку
  }else{
    if(isLoginUnique(allLogins, login) === false){          // Если логин не прошел проверку на уникальность
      alert('Такой логин уже используется!');               // Выдать,что уже используется
    }else{                                                  // Если все проверки пройдены
      allLogins.push(login);                                // Добаить логин в массив
      console.log(allLogins);                               // Вывести новый массив
      alert('Логин успешно добавлен!');                     // Вывести сообщение об успешном добавлении логина
    }
  }
}
console.log(addLogin(logins, userLogin));
// Вызовы функции для проверки
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
