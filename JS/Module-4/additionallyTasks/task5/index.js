function countTotalSalary(object){        // Обьявим функцию, которая считает общую зп работников
  const salaries = Object.values(object); // Обьявим массив salaries, состоящий из всех значений ключей (свойств) обьекта
  let totalMoney = 0;                     // Обьявим счетчик общей суммы зарплат
  for(const salary of salaries){          // Для каждого значения зарплаты массива со значениями зарплат
    totalMoney += salary;                 // Прибавить это значение к общей сумме
  }
  return totalMoney;                      // Вернуть общую сумму зарплат
}

// Вызовы функции для проверки
console.log(
  countTotalSalary({})
); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
); // 330
