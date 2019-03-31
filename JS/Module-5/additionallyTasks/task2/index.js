const guests = [
  { name: "Mango", age: 20, isActive: true },
  { name: "Poly", age: 18, isActive: false },
  { name: "Ajax", age: 30, isActive: true },
  { name: "Chelsey", age: 45, isActive: false }
];

function getPropValues(arr, prop) {
  const props = arr.map(value => value = value[prop]);
  return props;
}

// Вызовы функции для проверки
console.log( getPropValues(guests, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]
console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]
