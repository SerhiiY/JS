let add = document.querySelector('[data-action="add"]'),
    sub = document.querySelector('[data-action="sub"]'),
    result = document.querySelector('.value');


class Counter {
  constructor(onChange){
    this.value = 0;
    this.onChange = onChange;
  }

  increment() {
    this.value++;
    onChange(this.value);
  }

  decrement() {
    this.value--;
    onChange(this.value);
  }
}

function onChange(value){
  result.textContent = value;
}

const counter = new Counter(onChange);

add.addEventListener('click', counter.increment.bind(counter));
sub.addEventListener('click', counter.decrement.bind(counter));
