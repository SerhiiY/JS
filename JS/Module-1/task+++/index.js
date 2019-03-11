let sharm = 15;   //количество свободніх мест в группах
let hurgada = 25;
let taba = 6;
let group;        //этой переменной будем присваивать имя группы
let toBeInGroup;  //этой переменной будет присваиваться значение true или false
                  // - хочет или не хочет человек записаться в эту группу
let userNumber;
do{
  userNumber = prompt('Введите количество необходимых мест:');
  if(isNaN(userNumber) || userNumber === "") {
  //если число меньше нуля или число не целое или данные не являются числом, то
    alert('Ошибка ввода!');
  }
}while(isNaN(userNumber) || userNumber === "");

if(userNumber == null || userNumber == 0) {
//если была нажата кнопка отмена, то
  alert('Нам очень жаль, приходите еще!');
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

  if (group === "none") {
    console.log(alert('Извините, столько мест нет ни в одной группе!'));
  } else {
      toBeInGroup = confirm(`В группе ${group} есть место. Желаете принять участие?`);
      if(toBeInGroup === true) {
        console.log(alert(`Приятного путешествия в групе ${group}`));
      } else {
        console.log(alert('Нам очень жаль, приходите еще!'));
      }
    }
  }
