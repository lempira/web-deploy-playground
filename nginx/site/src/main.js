// import Typed from "typed.js";
const authors = [
  "Author 1",
  "Author 2",
  "Author 3",
  "Author 4",
  "Author 5",
  "Author 6",
  "Author 7",
  "Author 8",
  "Author 9",
  "Author 10",
  "Author 11",
  "Author 12",
  "Author 13",
  "Author 14",
  "Author 15",
  "Author 16",
  "Author 17",
  "Author 18",
  "Author 19",
  "Author 20",
  "Author 21",
  "Author 22",
  "Author 23",
  "Author 24",
];

const options = {
  strings: [
    "Turn away from the crowd and its fruitless pursuit of fame and gold.",
    "Never look back as you close your door to the sorry tumult of greed and ambition.",
    "Wipe away your tears of failure and misfortune.",
    "Be at peace. Already it is later than you think, for your earthly life, at best, is only the blink of an eye between two eternities.",
    "Be unafraid. Nothing here can harm you except yourself.",
    "Do that which you dread and cherish those victories with pride.",
    "Concentrate your energy. To be everywhere is to be no where.",
    "Be jealous of your time, since it is your greatest treasure.",
    "Reconsider your goals. Before you set your heart too much on anything, examine how happy they are who already possess what you desire.",
    "Love your family and count your blessings. Reflect on how eagerly they would be sought if you did not have them.",
    "Put aside your impossible dreams and complete the task at hand no matter how distasteful. All great achievements come from working and waiting.",
    "Be patient. God's delays are never God's denials. Hold on. Hold fast.",
    "What you sow, good or evil, that you will reap.",
    "Never blame your conditions on others. You are what you are through your choice alone.",
    "Learn to live with honest poverty, if you must, and turn to more important matters than transporting gold to your grave.",
    "Anxiety is the rust of life; when you add tomorrow's burdens to today's their weight becomes unbearable.",
    "Always learn from others. He who teaches himself has a fool for a master.",
    "Be careful. Do not overload your conscience. Conduct your life as if it were spent in an arena filled with tattlers.",
    "Avoid boasting. If you see anything in you that puffs you up with pride look closer and you will find more than enough to make you humble.",
    "Be wise. Realize that all people are not created equal, for there is no equality in nature, yet no one was ever born whose work was not born with him or her.",
    "Work every day as if it were your first, yet tenderly treat the lives you touch as if they will all end at midnight.",
    "Seek out those in need. Learn that he or she who delivers with one hand will always gather with two.",
    "Be of good cheer. Above all, remember that very little is needed to make a happy life.",
    "Look up. Reach out. Cling simply to God and journey quietly on your pathway to forever with charity and a smile.",
  ],
  preStringTyped: function (arrayPos) {
    const elem = document.getElementsByClassName("cite")[0];
    console.log(elem);
    elem.innerHTML = authors[arrayPos];
  },
  typeSpeed: 40,
};

const typed = new Typed(".quote", options);
document.getElementById;
