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
