// Get all character items
const itemElements = document.querySelectorAll(".characters-item");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

const modalContent = document.querySelector(".modal-content");
const closeBtn = document.querySelector(".modal-closebtn");

// Close function
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  document.body.classList.remove("modal-open");
  document.body.style.overflow = "auto";
}

// Open function
function openModal(content) {
  modalContent.textContent = content;
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.body.classList.add("modal-open");
  document.body.style.overflow = "hidden";
}

// Loop through each character item
itemElements.forEach((item) => {
  const content = item.dataset.description;

  item.addEventListener("click", () => openModal(content));
});

// Close modal when overlay or close button is clicked
overlay.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);
