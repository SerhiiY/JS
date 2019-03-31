const guests = [
  { name: "Mango", age: 20, isActive: true },
  { name: "Poly", age: 18, isActive: false },
  { name: "Ajax", age: 30, isActive: true },
  { name: "Chelsey", age: 45, isActive: false }
];


function getGuestsOlderThan(arr, age) {
  const olderGuests = arr.filter(el => el.age > age);
  return olderGuests;
}
// Вызовы функции для проверки
console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey

console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]

console.log(getGuestsOlderThan(guests, 55)); // []
