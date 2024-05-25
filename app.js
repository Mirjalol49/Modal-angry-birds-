// Get all character items
const itemElements = document.querySelectorAll(".characters-item");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const modalName = document.querySelector(".modal-name");
const modalContent = document.querySelector(".modal-content");
const closeBtn = document.querySelector(".modal-closebtn");

// Close function
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

// Open function
function openModal(name, content) {
  modalName.textContent = name;
  modalContent.textContent = content;
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

// Loop through each character item
itemElements.forEach((item) => {
  const name = item.dataset.name;
  const content = item.dataset.description;

  item.addEventListener("click", () => openModal(name, content));
});

// Close modal when overlay or close button is clicked
overlay.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);

// Adjust viewport height for mobile devices
function adjustViewport() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

window.addEventListener("resize", adjustViewport);
window.addEventListener("orientationchange", adjustViewport);
adjustViewport();
