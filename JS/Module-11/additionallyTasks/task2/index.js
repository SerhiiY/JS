const element = document.querySelector('#about').innerHTML.trim();

const posts = [
  {
    title: "Phasellus volutpat metus",
    text:
      "Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Ut leo.",
    favourite: true
  },
  {
    title: "Nulla consequat massa",
    text:
      "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    favourite: false
  },
  {
    title: "In enim justo",
    text:
      "Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Suspendisse eu ligula. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus.",
    favourite: true
  },
  {
    title: "Vestibulum ante ipsum",
    text:
      "Vestibulum suscipit nulla quis orci. Praesent venenatis metus at tortor pulvinar varius. Nulla sit amet est. Suspendisse eu ligula sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien.",
    favourite: false
  }
];


const template = Handlebars.compile(element);

const result = template(posts);

const postsBox = document.querySelector('.posts');

postsBox.innerHTML = result;
