// $("#js-drawer-icon").on("click", function (e) {
//   e.preventDefault();
//   $(this).toggleClass("is-checked");
//   $("#js-drawer-content").toggleClass("is-checked");
// });

const drawerIcon = document.getElementById("js-drawer-icon");
const drawerContent = document.getElementById("js-drawer-content");

if (drawerIcon && drawerContent) {
  drawerIcon.addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle("is-checked");
    drawerContent.classList.toggle("is-checked");
  });
}
