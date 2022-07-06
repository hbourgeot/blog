const bar = document.querySelector(".bar-icon");
const links = document.querySelector(".navbar");
bar.addEventListener("click", () => {
  if (links.style.left === "0px") links.style.left = "-100%";
  else links.style.left = "0";
});
window.onscroll = scrollable;
let scrollBef = window.scrollY;
function scrollable() {
  let scrollAft = window.scrollY;
  if (scrollBef > scrollAft) links.style.left = "-100%";
  else links.style.left = "-100%";
}
