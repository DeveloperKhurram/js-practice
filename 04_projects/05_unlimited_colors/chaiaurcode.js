let body = document.querySelector("body");

const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let startInterval;

const startColorChange = () => {
  startInterval = setInterval(() => {
    document.body.style.backgroundColor = randomColor();
  }, 1000);
};
const stopColorChange = () => {
  clearInterval(startInterval);
};

document.querySelector("#start").addEventListener("click", startColorChange);
document.querySelector("#stop").addEventListener("click", stopColorChange);
