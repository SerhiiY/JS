const users = [
  { name: 'Poly', age: 7, mood: 'happy' },
  { name: 'Mango', age: 4, mood: 'blissful'},
  { name: 'Ajax', age: 3, mood: 'tired' }
];

function getAllPropValues(objectsMas, key){ // Функция с аргументами "массив обьектов" и "ключ (свойство), который будем искать в обьектах и выводить его значение"
  const propValues = [];                    // Создаем пустой массив для записи в него значений ключей (свойств) обьектов
  let i = 0;                                // Обьявляем счетчик для элементов нового массива
  for(const object of objectsMas){          // Для каждого обьекта массива с обьектами
    if(object[key] !== undefined){          // Если значение ключа (свойства) обьекта не является неопределенным, то
      propValues[i] = object[key];          // Элементу нового массива с порядковым номером i присвоем это значение
      i += 1;
    }
  }
  return propValues;                        // Вернем новый массив из значений ключа обьектов
}

// Вызовы функции для проверки
console.log(
  getAllPropValues(users, 'name')
); // ['Poly', 'Mango', 'Ajax']

console.log(
  getAllPropValues(users, 'mood')
); // ['happy', 'blissful', 'tired']

console.log(
  getAllPropValues(users, 'active')
); // []
