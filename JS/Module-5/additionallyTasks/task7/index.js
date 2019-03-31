function getTotal(obj) {
  const arr = Object.values(obj);
  const total = arr.reduce((acc, el) => acc + el, 0);
  return total;
}

console.log(getTotal({ apples: 25, chicken: 60, milk: 15 })); // 100

console.log(getTotal({ bread: 10, apples: 25, milk: 15, cheese: 40 })); // 90

console.log(getTotal({ bread: 10, chicken: 60, cheese: 40 })); // 110
