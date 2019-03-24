function isObjectEmpty(object){           // Функция проверки обьекта на отсутствие ключей (свойств)
  const props = Object.keys(object);      // Обьявим переменную props как массив, состоящий из ключей (свойств) обьекта
  if(Object.keys(object).length === 0){   // Если длинна массива = 0, то массив пустой
    return true;                          // Вернуть true
  }else{                                  // Если длинна массива больше 0, то массив содержий свойства
    return false;
  }
}

// Вызовы функции для проверки
console.log(
  isObjectEmpty({})
); // true

console.log(
  isObjectEmpty({a: 1})
); // false

console.log(
  isObjectEmpty({a: 1, b: 2})
); // false
