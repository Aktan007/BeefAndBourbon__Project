var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 7000,
  },
});

const modal = document.getElementById("modal");
const btn = document.getElementById("btn");

function openModal(){
  modal.style.display = "flex";
}

function closeModal(){
  modal.style.display = "none";
}

btn.onclick = openModal;

window.onclick = function(e) {
  if (e.target == modal) {
    closeModal();
  }
}
