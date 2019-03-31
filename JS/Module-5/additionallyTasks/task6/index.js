const guests = [
  { id: 1, name: 'Mango', age: 20 },
  { id: 2, name: 'Poly', age: 18 },
  { id: 3, name: 'Ajax', age: 30 },
  { id: 4, name: 'Chelsey', age: 45 }
];

function getGuestById(arr, id){
  const guest = arr.find(el => el.id === id);
  return guest;
}

// Вызовы функции для проверки
console.log(
  getGuestById(guests, 3)
); // {id: 3, name: 'Ajax', age: 30}

console.log(
  getGuestById(guests, 1)
); // {id: 1, name: 'Mango', age: 20}

console.log(
  getGuestById(guests, 5)
); // undefined
