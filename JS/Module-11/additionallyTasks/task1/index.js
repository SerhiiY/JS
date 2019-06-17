const element = document.querySelector('#about').innerHTML.trim();

const products = [
  { name: "Apples", quantity: 50 },
  { name: "Grapes", quantity: 44 },
  { name: "Cheese", quantity: 128 },
  { name: "Milk", quantity: 93 }
];

const template = Handlebars.compile(element);

const result = template(products);

const productsBox = document.querySelector('.products');

productsBox.innerHTML = result;
