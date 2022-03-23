const bar = document.getElementById("main");
const menu = document.getElementById("menu");
let state=true;
bar.addEventListener("click", () => {
   menu.classList.toggle("visible");
 bar.classList.toggle("bar2");
}
);
