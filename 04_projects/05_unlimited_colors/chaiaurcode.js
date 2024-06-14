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
  let changeBgColor = () => {
    document.body.style.backgroundColor = randomColor();
  };

  if (!startInterval) {
    startInterval = setInterval(changeBgColor, 1000);
  }
};
const stopColorChange = () => {
  clearInterval(startInterval);
  startInterval = null;
};

document.querySelector("#start").addEventListener("click", startColorChange);
document.querySelector("#stop").addEventListener("click", stopColorChange);
