var link = document.querySelector(".pop-up");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal__close");
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});