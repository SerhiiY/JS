const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  cheese: 30,
  chicken: 40
};

const orderA = {
  bread: 2,
  apples: 4,
  chicken: 1
};

const orderB = {
  bread: 1,
  milk: 2,
  cheese: 2,
  apples: 1
};

const orderC = {
  bread: 2,
  cheese: 2
};

function getTotal(products, order){
  let acc = 0;
  const orderKeys = Object.keys(order);
  const total = orderKeys.reduce((acc, el) => acc + products[el] * order[el], 0);
  return total;
}

// Вызовы функции для проверки
console.log(getTotal(products, orderA)); // 140
console.log(getTotal(products, orderB)); // 120
console.log(getTotal(products, orderC)); // 80
