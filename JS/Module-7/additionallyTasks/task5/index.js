let inputs = document.querySelectorAll('input');
// Присваиваем переменной inputs NodeList всех узлов-элементов input
inputsArr = Array.prototype.slice.call(inputs);
//  Приобразуем NodeList в массив

function collectInputData(input) {
let result = input.filter(el => el.checked).map(el => el = el.value);
// Перебираем каждый элемент массива input получая массив result со значениями поля checked
return result;
}

console.log(collectInputData(inputsArr));
