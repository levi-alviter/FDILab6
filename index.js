const buttons = [...document.querySelectorAll(".buttons-button")];
const img = document.querySelector(".section-img");

const images = [
  {
    img: "./assets/chappy.png",
    alt: "Happy Creeper",
  },
  {
    img: "./assets/cangry.png",
    alt: "Angry Creeper",
  },
  {
    img: "./assets/csleep.png",
    alt: "Sleepy Creeper"
  }
];

buttons.forEach((item,index) => {
  item.addEventListener('click',(e) => {
    img.src = images[index].img;
    img.alt = images[index].alt;
  });
});