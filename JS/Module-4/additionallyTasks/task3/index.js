function countProps(object){
  const props = Object.keys(object);
  let i = 0;
  for(const prop of props){
    i += 1;
  }
  return i;
}

// Вызовы функции для проверки
console.log(
  countProps({})
); // 0

console.log(
  countProps({a: 1, b: 3, c: 'hello'})
); // 3
