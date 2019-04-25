const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];

let body = document.querySelector('body'),
    movie = document.querySelector('.movie'),
    container = document.querySelector('.movies'),
    movieBody = document.querySelector('.movie__body'),
    movieLink = document.createElement('a');

movieBody.appendChild(movieLink);

function createMovieCard (newMovie) {
  let movieNew = movie.cloneNode(true);

  movieNew.querySelector('.movie__image').src = newMovie.img;
  movieNew.querySelector('.movie__description').innerHTML = newMovie.text;
  movieNew.querySelector('.movie__title').innerHTML = newMovie.title;
  movieNew.querySelector('a').innerHTML = newMovie.link;
  container.appendChild(movieNew);
}

function createCards(posts) {
  for(let post of posts) {
    createMovieCard(post);
  }
}

createCards(posts);
