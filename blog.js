let getmenubtn = document.querySelector(".hamburger");
let getnavitems = document.querySelector(".nav-list");
let getnavlistitems = document.querySelectorAll(".navlist_items");
console.log(getnavlistitems);

getmenubtn.addEventListener("click", () => {
  getmenubtn.classList.toggle("active");
  getnavitems.classList.toggle("active");
});

getnavitems.addEventListener("click", () => {});
