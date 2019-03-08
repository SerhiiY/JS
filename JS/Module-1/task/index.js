// const adminLogin = 'admin';
// const adminPassword = '13243546';
//
// let login = prompt('Введите имя пользователя:');
// if (login === null) {
//   console.log(alert('Отменено пользователем!'));
// } else if (login !== adminLogin) {
//   console.log(alert('Доступ запрещен, неверный логин!'));
// } else {
//   let password = prompt('Введите пароль:');
//   if (password === null) {
//     console.log(alert('Отменено пользователем!'));
//   } else if (password !== adminPassword) {
//     console.log(alert('Доступ запрещен, неверный пароль!'));
//   } else {
//     console.log(alert('Добро пожаловать!'));
//   }
// }

let sharm = 15;   //количество свободніх мест в группах
let hurgada = 25;
let taba = 6;
let group;        //этой переменной будем присваивать имя группы
let toBeInGroup;  //этой переменной будет присваиваться значение true или false
                  // - хочет или не хочет человек записаться в эту группу
let userNumber = prompt('Введите количество необходимых мест:');

if (userNumber < 0 || Math.round(userNumber) != userNumber) {
//если число меньше нуля или число не целое или данные не являются числом, то
  console.log(alert('Ошибка ввода!'));
} else if (userNumber === null) {
//если была нажата кнопка отмена, то
  console.log(alert('Нам очень жаль, приходите еще!'));
} else {
    if(userNumber <= taba) {
      group = "taba";
    } else if(userNumber <= sharm) {
      group = "sharm";
    } else if(userNumber <= hurgada) {
      group = "hurgada";
    } else {
      group = "none";
    }
  }
  if (group === "none") {
    console.log(alert('Извините, столько мест нет ни в одной группе!'));
  } else {
      toBeInGroup = confirm(`В группе ${group} есть место. Желаете принять участие?`);
      if (toBeInGroup === true) {
        console.log(alert(`Приятного путешествия в групе ${group}`));
      } else {
        console.log(alert('Нам очень жаль, приходите еще!'));
      }
    }
