const authors = [
  "Aristotle",
  "Henry David Thoreau",
  "Wayne Dyer",
  "Desmond Tutu",
  "Johann Wolfgang von Goethe",
  "George Bernard Shaw",
];

const options = {
  strings: [
    "Quality is not an act, it is a habit.",
    "What is called genius is the abundance of life and health.",
    "Go for it now. The future is promised to no one.",
    "Do your little bit of good where you are; it's those little bits of good put together that overwhelm the world.",
    "Every day we should hear at least one little song, read one good poem, see one exquisite picture, and, if possible, speak a few sensible words.",
    "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.",
  ],
  preStringTyped: function (arrayPos) {
    const elem = document.getElementsByClassName("cite")[0];
    console.log(elem);
    elem.innerHTML = authors[arrayPos];
  },
  typeSpeed: 40,
  showCursor: false,
  loop: true,
};

const typed = new Typed(".quote", options);
document.getElementById;
