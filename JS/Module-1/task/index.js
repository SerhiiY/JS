const adminLogin = 'admin';
const adminPassword = '13243546';

let login = prompt('Введите имя пользователя:');
if (login === null) {
  console.log(alert('Отменено пользователем!'));
} else if (login !== adminLogin) {
  console.log(alert('Доступ запрещен, неверный логин!'));
} else {
  let password = prompt('Введите пароль:');
  if (password === null) {
    console.log(alert('Отменено пользователем!'));
  } else if (password !== adminPassword) {
    console.log(alert('Доступ запрещен, неверный пароль!'));
  } else {
    console.log(alert('Добро пожаловать!'));
  }
}

// let sharm = 15;
// let hurgada = 25;
// let taba = 6;
// let group;
// let toBeInGroup;
//
// let userNumber = prompt('Введите количество необходимых мест:');
//
// if (userNumber < 0 || Math.round(userNumber) !== userNumber || typeof(userNumber) !== Number) {
//   console.log(alert('Ошибка ввода!'));
// } else if (userNumber === null) {
//   console.log(alert('Нам очень жаль, приходите еще!'));
// } else {
//   switch (group) {
//     case "taba":
//       userNumber <= taba;
//       break;
//     case "sharm":
//       userNumber <= sharm;
//       break;
//     case "hurgada":
//       userNumber <= hurgada;
//       break;
//     default:
//       group = "none";
//   }
//   if (group === "none") {
//     console.log(alert('Извините, столько мест нет ни в одной группе!'));
//   } else {
//     toBeInGroup = confirm(`В группе ${group} есть место. Желаете принять участие?`);
//     if (toBeInGroup === true) {
//     console.log(alert(`Приятного путешествия в групе ${group}`));
//     } else {
//       console.log(alert('Нам очень жаль, приходите еще!'));
//     }
//   }
// }
