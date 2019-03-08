// Task 5
const min = 1;
const max = 100;

for(let i = min; i <= max; i++) { // От min до max включительно с шагом 1 выполнить
  if(i % 3 === 0) { // Если число делится без остатка на 3
    console.log('Fizz');
  } else if(i % 5 === 0) { // Если число делится без отатка на 5
    console.log('Buzz');
  } else { // Все остальные числа
    console.log(i);
  }
}
