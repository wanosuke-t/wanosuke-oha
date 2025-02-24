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

// モーダル
$("#js-modal-open").on("click", function (e) {
  e.preventDefault();
  // $("#js-about-modal").attr("open", true);
  $("#js-about-modal").showModal();
});

$(".js-modal-close").on("click", function (e) {
  e.preventDefault();
  $("#js-about-modal").close();
});

const modalOpen = document.getElementById("js-modal-open");
const modalClose = document.querySelectorAll(".js-modal-close");
const aboutModal = document.getElementById("js-about-modal");

if (modalOpen && aboutModal) {
  modalOpen.addEventListener("click", function (e) {
    e.preventDefault();
    aboutModal.showModal();
  });
}

modalClose.forEach(function (closeButton) {
  closeButton.addEventListener("click", function (e) {
    e.preventDefault();
    aboutModal.close();
  });
});

// スムーススクロール
$('#js-drawer-content a[href^="#"]').on("click", function (e) {
  drawerIcon.classList.remove("is-checked");
  drawerContent.classList.remove("is-checked");
});

$('a[href^="#"]').on("click", function (e) {
  e.preventDefault();
  const scrollSpeed = 1000;
  const targetId = $(this).attr("href");
  const targetElement = $("#" == targetId ? "html" : targetId);
  const targetPosition = targetElement.offset().top;

  if (targetElement.length) {
    $("html, body").animate(
      {
        scrollTop: targetPosition,
      },
      scrollSpeed,
      "swing"
    );
  }
});

// ページトップ

// $(window).on("scroll", function () {
//   if ($(this).scrollTop() > 100) {
//     $("#js-pagetop").addClass("is-show");
//   } else {
//     $("#js-pagetop").removeClass("is-show");
//   }
// });

const pageTop = document.querySelector("#js-pagetop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    pageTop.classList.add("is-show");
  } else {
    pageTop.classList.remove("is-show");
  }
});

// フワッと表示
const intersectionObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-in-view");
    } else {
      // entry.target.classList.remove("is-in-view");
    }
  });
});

const inViewItems = document.querySelectorAll(".js-in-view");

inViewItems.forEach(function (inViewItem) {
  intersectionObserver.observe(inViewItem);
});