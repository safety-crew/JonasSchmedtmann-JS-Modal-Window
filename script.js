"use strict";

// Identifiers to change state based on.
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btn = document.querySelector(".close-modal");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// Function to open a modal
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Select all 'Show Modal' buttons and add event listener to them
for (let index = 0; index < btnsOpenModal.length; index++) {
  btnsOpenModal[index].addEventListener("click", openModal);
}

// Function to close already open modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// To close the modal using the 'X' button
btnCloseModal.addEventListener("click", closeModal);

// To close the modal by click on the overlay around the modal
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
