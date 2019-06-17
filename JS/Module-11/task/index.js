const element = document.querySelector('#about').innerHTML.trim();

const laptops = [
  {
    size: 13,
    color: 'white',
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    favorite: true,
  },
  {
    size: 13,
    color: 'gray',
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    favorite: true,
  },
  {
    size: 13,
    color: 'black',
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    favorite: true,
  },
  {
    size: 15,
    color: 'white',
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    favorite: true,
  },
  {
    size: 15,
    color: 'gray',
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    favorite: true,
  },
  {
    size: 15,
    color: 'black',
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    favorite: true,
  },
  {
    size: 17,
    color: 'white',
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    favorite: true,
  },
  {
    size: 17,
    color: 'gray',
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    favorite: true,
  },
  {
    size: 17,
    color: 'black',
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    favorite: true,
  },
];

const template = Handlebars.compile(element);
const list = document.querySelector('.list');
let result = template(laptops);
list.innerHTML = result;

let filter = { size: [], color: [], release_date: [] }

const submit = document.querySelector('.submit');
const reset = document.querySelector('.reset');
const inputs = document.querySelectorAll('.checkbox');

let laptopsNew = laptops;
let i = 0;

submit.addEventListener('click', filterFn);

function pushFilters () { // Функция, добавляющая значения чекбоксов в массивы обьекта filter с названием чекбокса
  filter = { size: [], color: [], release_date: [] }
  let inputsArray = Array.from(inputs); // Преобразуем псевдомассив из чесбоксов в массив
  inputsArray.forEach(el => { // Для каждого элемента этого массива
    if(el.checked){ // Если галочка у чекбокса стоит, то
      filter[el.name].push(el.value); // В массив объекта filter с названием, как у выбранного чекбокса - записать значение чекбокса
      i++;
    }
  })
}

function checkFilters () {  // Функция для проверки на соответствие объекта в списке хотябы одному из фильтров
  let filterKeys = Object.keys(filter); // Создадим массив из ключей объекта filter
  let count = 0;
  let count1 = 0;
  laptopsNew.forEach(el => el.favorite = false);
  laptopsNew.forEach(laptop => {
    count = 0;
    count1 = 0;
    filterKeys.forEach(key => { // Для каждого ключа-массива объекта filter
      filter[key].length !== 0 ? count++ : {}; // Если массив не пуст, то +1 к счетчику количества задейств ключей-фильтров
      console.log(count);
      filter[key].forEach(keyEl => { // Для каждого элемента ключа-массива объекта filter выполнить
        laptop[key] == keyEl ? laptop.favorite = true : {}; // Если значение такое же, как у соотв ключа ноутбука, то true
      console.log(laptop.favorite);
      });
      laptop.favorite == true ? count1++ : {}; // Если хотя бы одно из значений совпало, плюсуем счетчик количества совпадающих фильтров
      console.log(count1);
      laptop.favorite = false; // Снова делаем объект false
    }); // Следующий ключ-массив объекта filter
      count === count1 ? laptop.favorite = true : laptop.favorite = false; // Если все фильтры совпали
  });
  laptopsNew.filter(elem => elem.favorite);
  console.log(laptopsNew);
}

function filterFn(event) { // Общая функция для фитрации списка
  event.preventDefault();
  pushFilters();
  console.log(filter);
  if(i === 0){
    laptopsNew.forEach(el => el.favorite = true);
  }else{
    checkFilters();
  };
  let resultNew = template(laptopsNew);
  list.innerHTML = resultNew;
} 