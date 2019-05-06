let menu = document.querySelector('.menu');

menu.addEventListener('click', fn);

function fn(event) {
  event.preventDefault();
  const target = event.target;
  if(target.nodeName !== "A") return;
  setActiveLink(target);
}

function setActiveLink(nextActiveLink){
  const currentActiveLink = menu.querySelector('a.active');
  if(currentActiveLink){
    currentActiveLink.classList.remove('active');
  }
  nextActiveLink.classList.add('active');
}
