document.getElementById("title");
document.getElementById("title").id;
document.getElementById("title").className;
document.getElementById("title").getAttribute("id");
document.getElementById("title").getAttribute("class");
document.getElementById("title").setAttribute("class", "test heading");

const title = document.getElementById("title");

title.style.backgroundColor = "rgb(255,255,0)";
title.style.color = "#000";
title.style.padding = "12px";
title.style.borderRadius = "18px";

title.textContent; // display visible and hidden part ('DOM Learning on Chai aur code test text')
title.innerHTML; // display complete html part ('DOM Learning on Chai aur code <span style="display: none;">test text</span>')
title.innerText; // display on visible part ('DOM Learning on Chai aur code')

document.querySelector("h2");
document.querySelectorAll("h2");
document.querySelector("#title");
document.querySelector(".heading");
document.querySelector('input[type="password"]');
document.querySelector("p:first-child");

const myUl = document.querySelector("ul");
const firstLi = myUl.querySelector("li");
firstLi.style.color = "pink";
firstLi.innerText = "new value";

document.querySelector("ul").querySelector("#list3").style.color = "brown";

const fullLi = document.querySelectorAll("li");

fullLi.forEach((li) => {
  li.style.backgroundColor = "#353535";
});

fullLi[2].style.backgroundColor = "wheat";

const tempCollection = document.getElementsByClassName("list_item");
const tempArray = Array.from(tempCollection);

tempArray.forEach((li) => {
  li.style.padding = "10px";
});

const course = document.querySelectorAll(".course");
course.forEach((li) => {
  li.style.color = "blue";
  li.style.backgroundColor = "pink";
  li.style.padding = "5px";
  li.innerText = "formated paras";
});
