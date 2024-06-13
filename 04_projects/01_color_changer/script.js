const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

// console.log(buttons); // here we get Nodelist

buttons.forEach((button) => {
  //   console.log(button);
  button.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = e.target.id;
        break;
      case "blue":
        body.style.backgroundColor = e.target.id;
        break;
      case "white":
        body.style.backgroundColor = e.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = e.target.id;
        break;
      case "orange":
        body.style.backgroundColor = e.target.id;
        break;
      case "orchid":
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});
