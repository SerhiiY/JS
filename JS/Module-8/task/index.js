class Gallery {
  constructor({items, parentNode, defaultActiveItem = 1}){
    this.items = items;
    this.parentNode = parentNode.cloneNode(true);
    this.defaultActiveItem = defaultActiveItem;
    this.fullview = this.parentNode.querySelector('.fullview');
    this.preview = this.parentNode.querySelector('.preview');
    this.modalContent = this.parentNode.querySelector('.modal-content');
    this.modal = this.parentNode.querySelector('.js-modal-backdrop');

    this.preview.innerHTML = this.items.reduce((acc, {preview, fullview, alt}) => acc + `<li><img src=${preview} data-fullview=${fullview} alt=${alt}></li>`, '');
    this.fullview.innerHTML = this.items.reduce((acc, {preview, fullview, alt}) => acc + `<li class="hidden"><img src=${fullview} alt=${alt}></li>`, '');
    this.modalContent.innerHTML = this.items.reduce((acc, {preview, fullview, alt}) => acc + `<li class="hidden"><img src=${fullview} alt=${alt}></li>`, '');

    this.fullview.children[this.defaultActiveItem - 1].classList.add('active');
    this.modalContent.children[this.defaultActiveItem - 1].classList.add('active');

    this.setActiveImg = function(targetPreviewImg){
      let currentActiveImg = this.fullview.querySelector('.active');
      currentActiveImg.classList.remove('active');

      let nextActiveImg = this.fullview.querySelector(`[src="${targetPreviewImg.dataset.fullview}"]`);
      nextActiveImg.parentNode.classList.add('active');

      let currentActiveModal = this.modalContent.querySelector('.active');
      currentActiveModal.classList.remove('active');

      let nextActiveModal = this.modalContent.querySelector(`[src="${targetPreviewImg.dataset.fullview}"]`);
      nextActiveModal.parentNode.classList.add('active');
    };

    this.toFullview = function(event) {
      event.preventDefault();
      const target = event.currentTarget;
      this.setActiveImg(target);
    };

    this.openModal = function() {
      this.modal.classList.remove('modal-hidden');
    };

    this.closeModal = function() {
      // const target = event.target;
      // if(target !== modal) return;
      this.modal.classList.add('modal-hidden');
    };

    this.preview.addEventListener('click', this.toFullview.bind(this));
    // Если я кликаю на миниатюру, то убрать прячущий класс с фулл фото, ссылка на которое в дате миниатюры
    this.fullview.addEventListener('click', this.openModal.bind(this));
    this.modal.addEventListener('click', this.closeModal.bind(this));

  }
}

const galleryItems = [
      { preview: 'img/preview-1.jpg', fullview: 'img/fullview-1.jpg', alt: "alt text 1" },
      { preview: 'img/preview-2.jpg', fullview: 'img/fullview-2.jpg', alt: "alt text 2" },
      { preview: 'img/preview-3.jpg', fullview: 'img/fullview-3.jpg', alt: "alt text 3" },
      { preview: 'img/preview-4.jpg', fullview: 'img/fullview-4.jpg', alt: "alt text 4" },
      { preview: 'img/preview-5.jpg', fullview: 'img/fullview-5.jpg', alt: "alt text 5" },
      { preview: 'img/preview-6.jpg', fullview: 'img/fullview-6.jpg', alt: "alt text 6" },
    ];

// fullview.innerHTML = `<img src=${galleryItems[0].fullview} alt=${galleryItems[0].alt}>`;
// modalContent.innerHTML = `<img src=${galleryItems[0].fullview} alt=${galleryItems[0].alt}>`;


// function toFullview(event) {
//   event.preventDefault();
//   const target = event.target;
//   if(target !== preview){
//     fullview.innerHTML = `<img src=${target.dataset.fullview} alt=${target.alt}>`;
//     modalContent.innerHTML = `<img src=${target.dataset.fullview} alt=${target.alt}>`;
//   }
// }

let gallery1 = new Gallery({
  items: galleryItems,
  parentNode: document.querySelector('.image-gallery'),
  defaultActiveItem: 1
});

const container = document.querySelector('.container');

container.appendChild(gallery1.parentNode);
container.firstElementChild.classList.add('hidden');
