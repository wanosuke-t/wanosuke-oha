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

$(".js-accordion").on("click", function (e) {
  e.preventDefault();
  $(this).parent(".qa-box").toggleClass("is-open");
  if ($(this).parent(".qa-box").hasClass("is-open")) {
    $(this).next().slideDown();
  } else {
    $(this).next().slideUp();
  }
});

// swiper
const swiper = new Swiper("#js-gallery-swiper", {
  spaceBetween: 82,

  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: "#js-gallery-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: "#js-gallery-next",
    prevEl: "#js-gallery-prev",
  },
});
