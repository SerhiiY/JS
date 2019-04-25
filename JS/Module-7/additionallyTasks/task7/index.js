function createBoxes(num) {
  let card = document.querySelector('#root');
  let acc = '';
  for(let i = 0; i < num; i++){
    acc += '<div></div>';
  }
  card.innerHTML += acc;
  console.log(card.children);
  let height = 30;
  let width = 30;
  for(let el of card.children) {
    let r = Math.floor(Math.random() * (256));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));
    let c='#' + r.toString(16) + g.toString(16) + b.toString(16);
    el.style.backgroundColor = c;
    el.style.display = 'block';
    el.style.height = `${height}px`;
    el.style.width = `${width}px`;
    height += 10;
    width += 10;
  }
  console.log(card);
}

createBoxes(7);
