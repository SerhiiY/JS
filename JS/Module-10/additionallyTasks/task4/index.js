const DELAY = 1000;
const quantity = 100;

function processOrder(number) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
    number < quantity ? resolve('Ваш заказ готов!') : reject('К сожалению на складе недостаточно товаров!');
    }, DELAY);
  });
}
// Вызовы функции для проверки
processOrder(50)
  .then(console.log) // Ваш заказ готов!
  .catch(console.log);

processOrder(500)
  .then(console.log) // К сожалению на складе недостаточно товаров!
  .catch(console.log);

processOrder("lorem")
  .then(console.log)
  .catch(console.log); // Некорректный ввод!
