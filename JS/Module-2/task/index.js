let userInput;
const numbers = [];
let total = 0;
let i = -1;

do {
  userInput = prompt('Enter the number');     // Присваеваем переменной значение, введенное пользователем
  parseInt(userInput);                        // Проверяем введенные данные на целое число
  console.log(userInput);                     // Выводим значение переменной
  if(userInput != null){                      // Если пользователь не нажал кнопку отмена, то
    if(isNaN(userInput) === true) {           // Если переменная не является числом
      alert("You should enter the number!");  // Выдать сообщение - вы должны ввести число
    }else{                                    // В противном случае
      i += 1;                                 // +1 к порядковому номеру
      numbers[i] = Number(userInput);         // Присвоить число элементу массива с порядковым номером i
      console.log(numbers);
    }
  }
}while(userInput != null);                    // Выполнять до тех пор, пока пользователь не нажмет кнопку отмена

for(i = 0; i < numbers.length; i++){          // От 0-го порядкового номера до последнего (длина масива) с шагом 1
  total += numbers[i];                        // К общей сумме прибавить элемент массива
}

console.log(total);                           // Вывести сумму элементов массива
alert(`Общая сумма чисел равна ${total}`);
