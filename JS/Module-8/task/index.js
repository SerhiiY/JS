let fullview = document.querySelector('.fullview'),
    preview = document.querySelector('.preview'),
    modalContent = document.querySelector('.modal-content'),
    modal = document.querySelector('.js-modal-backdrop');

const galleryItems = [
      { preview: 'img/preview-1.jpg', fullview: 'img/fullview-1.jpg', alt: "alt text 1" },
      { preview: 'img/preview-2.jpg', fullview: 'img/fullview-2.jpg', alt: "alt text 2" },
      { preview: 'img/preview-3.jpg', fullview: 'img/fullview-3.jpg', alt: "alt text 3" },
      { preview: 'img/preview-4.jpg', fullview: 'img/fullview-4.jpg', alt: "alt text 4" },
      { preview: 'img/preview-5.jpg', fullview: 'img/fullview-5.jpg', alt: "alt text 5" },
      { preview: 'img/preview-6.jpg', fullview: 'img/fullview-6.jpg', alt: "alt text 6" },
    ];

preview.innerHTML = galleryItems.reduce((acc, el) => acc + `<li><img src=${el.preview} data-fullview=${el.fullview} alt=${el.alt}></li>`, '');
fullview.innerHTML = galleryItems.reduce((acc, el) => acc + `<li class="hidden"><img src=${el.fullview} alt=${el.alt}></li>`, '');
modalContent.innerHTML = galleryItems.reduce((acc, el) => acc + `<li class="hidden"><img src=${el.fullview} alt=${el.alt}></li>`, '');

fullview.firstChild.classList.add('active');
modalContent.firstChild.classList.add('active');

// fullview.innerHTML = `<img src=${galleryItems[0].fullview} alt=${galleryItems[0].alt}>`;
// modalContent.innerHTML = `<img src=${galleryItems[0].fullview} alt=${galleryItems[0].alt}>`;

preview.addEventListener('click', toFullview);
// Если я кликаю на миниатюру, то убрать прячущий класс с фулл фото, ссылка на которое в дате миниатюры

function toFullview(event) {
  event.preventDefault();
  const target = event.target;
  if(target.nodeName !== "LI" && target.nodeName !== "IMG") return;
  setActiveImg(target);
}

function setActiveImg(targetPreviewImg){

  let currentActiveImg = fullview.querySelector('.active');
  currentActiveImg.classList.remove('active');

  let nextActiveImg = fullview.querySelector(`[src="${targetPreviewImg.dataset.fullview}"]`);
  nextActiveImg.parentNode.classList.add('active');

  let currentActiveModal = modalContent.querySelector('.active');
  currentActiveModal.classList.remove('active');

  let nextActiveModal = modalContent.querySelector(`[src="${targetPreviewImg.dataset.fullview}"]`);
  nextActiveModal.parentNode.classList.add('active');

}

// function toFullview(event) {
//   event.preventDefault();
//   const target = event.target;
//   if(target !== preview){
//     fullview.innerHTML = `<img src=${target.dataset.fullview} alt=${target.alt}>`;
//     modalContent.innerHTML = `<img src=${target.dataset.fullview} alt=${target.alt}>`;
//   }
// }

fullview.addEventListener('click', openModal);
modal.addEventListener('click', closeModal);

function openModal() {
  modal.classList.remove('modal-hidden');
}

function closeModal() {
  // const target = event.target;
  // if(target !== modal) return;
  modal.classList.add('modal-hidden');
}
