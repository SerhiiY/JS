class Hamburger {
  constructor(size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];

    this.SIZES = {
      SIZE_SMALL: {
        price: 30,
        calories: 50,
      },
      SIZE_LARGE: {
        price: 40,
        calories: 70,
      },
    };

    this.STUFFINGS = {
      STUFFING_CHEESE: {
        price: 10,
        calories: 10,
      },
      STUFFING_SALAD: {
        price: 5,
        calories: 5,
      },
      STUFFING_MEAT: {
        price: 15,
        calories: 20,
      },
    };

    this.TOPPINGS = {
      TOPPING_SPICE: {
        price: 10,
        calories: 5,
      },
      TOPPING_SAUCE: {
        price: 10,
        calories: 5,
      },
    }
  }

  addTopping(topping) {
    if(this._toppings.indexOf(topping) === -1){
      this._toppings.push(topping);
    }
  }

  removeTopping(topping) {
    if(this._toppings.indexOf(topping) !== -1){
      this._toppings.splice(this._toppings.indexOf(topping), 1);
    }
  }
   get toppings () {
     return this._toppings;
   }

  getToppings() {
    return this._toppings;
  }

  getSize() {
    return this._size;
  }

  get size() {
    return this._size;
  }

  getStuffing() {
    return this._stuffing;
  }

  get stuffing() {
    return this._stuffing;
  }

  get price () {
    let sum = 0;
    this._toppings.forEach(el => {
      sum += this.TOPPINGS[el].price
    });
    return +(this.SIZES[this._size].price + this.STUFFINGS[this._stuffing].price + sum);
  }

  calculatePrice() {
    let sum = 0;
    this._toppings.forEach(el => {
      sum += this.TOPPINGS[el].price
    });
    return +(this.SIZES[this._size].price + this.STUFFINGS[this._stuffing].price + sum);
  }

  get calories() {
    let sum = 0;
    this._toppings.forEach(el => {
      sum += this.TOPPINGS[el].calories
    });
    return +(this.SIZES[this._size].calories + this.STUFFINGS[this._stuffing].calories + sum);
  }

  calculateCalories() {
    let sum = 0;
    this._toppings.forEach(el => {
      sum += this.TOPPINGS[el].calories
    });
    return +(this.SIZES[this._size].calories + this.STUFFINGS[this._stuffing].calories + sum);
  }

  static get SIZE_SMALL () {
    return 'SIZE_SMALL';
  }

  static get SIZE_LARGE () {
    return 'SIZE_LARGE';
  }

  static get STUFFING_CHEESE () {
    return 'STUFFING_CHEESE';
  }

  static get STUFFING_SALAD () {
    return 'STUFFING_SALAD';
  }

  static get STUFFING_MEAT () {
    return 'STUFFING_MEAT';
  }

  static get TOPPING_SPICE () {
    return 'TOPPING_SPICE';
  }

  static get TOPPING_SAUCE () {
    return 'TOPPING_SAUCE';
  }

}
/*
  Размеры, виды добавок и начинок объявите как статические поля класса.
  Добавьте отсутсвующие поля по аналогии с примером.
*/

// Маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// Спросим сколько там калорий
console.log("Calories: ", hamburger.calculateCalories());

// Сколько стоит?
console.log("Price: ", hamburger.calculatePrice());

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?
console.log("Price with sauce: ", hamburger.calculatePrice());

console.log("Calories: ", hamburger.calculateCalories());

// Проверить, большой ли гамбургер?
console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);

// Смотрим сколько добавок
console.log(`Hamburger has ${hamburger._toppings.length} toppings`); // 1
