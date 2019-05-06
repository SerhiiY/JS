const images = document.querySelector('.images');

images.addEventListener('click', fn);

function fn(event) {
  const target = event.target;
  if (target.nodeName !== "IMG") return;
  return alert(target.src);
}
