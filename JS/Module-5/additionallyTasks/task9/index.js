function isGuestsActive(arr){
  const all = arr.every(el => el.active);
  return all;
}

// Вызовы функции для проверки
console.log(
  isGuestsActive([
    { name: "Mango", active: true },
    { name: "Poly", active: false },
    { name: "Ajax", active: true }
  ])
); // false

console.log(
  isGuestsActive([
    { name: "Mango", active: true },
    { name: "Poly", active: true },
    { name: "Ajax", active: true }
  ])
); // true

console.log(
  isGuestsActive([
    { name: "Mango", active: true },
    { name: "Poly", active: true },
    { name: "Ajax", active: false }
  ])
); // false
