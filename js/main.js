// menu logic start
let header = document.getElementById("header");
let menu = document.getElementById("menu");
let menuBtn = document.getElementById("menuBtn");
let body = document.body;
menuBtn.onclick = () => {
  header.classList.toggle("active");
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
window.onclick = (e) => {
  if (e.target == menu) {
    header.classList.remove("active");
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
};
const mobileOnlySlider = () => {
  $(".hero__items-inner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
  });
};
// menu logic end

// slider logic start
if (window.innerWidth < 841) {
  mobileOnlySlider();
}
const resizeListener = (e) => {
  if (window.innerWidth < 841) {
    if (!$(".hero__items-inner").hasClass("slick-initialized")) {
      mobileOnlySlider();
    }
  } else {
    if ($(".hero__items-inner").hasClass("slick-initialized")) {
      $(".hero__items-inner").slick("unslick");
    }
  }
};
resizeListener();
$(window).resize(resizeListener);
// slider logic end

// modal logic start
const closeBtns = document.querySelectorAll(".modalClose").forEach((e) => {
  e.addEventListener("click", function (x) {
    var ModalId = x.target.dataset.modal;
    document.querySelector("#" + ModalId).classList.remove("active");
    document.body.classList.remove("active");
  });
});
const modalBtn = document.querySelectorAll(".modalBtn");
const modalItems = document.querySelectorAll(".modal");
const onTabClick = (modalBtns, modalItems, item) => {
  console.log("asd");
  item.addEventListener("click", (e) => {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (e.srcElement.classList.contains("active")) {
      e.srcElement.classList.remove("active");
    } else if (!currentBtn.classList.contains("active")) {
      modalBtns.forEach(function (item) {
        item.classList.remove("active");
      });
      modalItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentTab.classList.add("active");
      document.body.classList.add("active");
    }
  });

  window.addEventListener("click", (e) => {
    modalItems.forEach((black) => {
      if (black == e.target) {
        black.classList.remove("active");
        document.body.classList.remove("active");
      }
    });
  });
};
modalBtn.forEach((e) => {
  onTabClick(modalBtn, modalItems, e);
});

// modal logic end
