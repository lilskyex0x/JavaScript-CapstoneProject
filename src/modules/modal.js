const openModal = (button) => {
  const modalId = button.dataset.modalTarget;
  const modal = document.querySelector(modalId);
  const modalTitle = modal.querySelector(".modal-title");
  modalTitle.innerHTML = button.dataset.title;
  const modalDetails = modal.querySelector(".modal-details");
  modalDetails.innerHTML = button.dataset.details;
  const mealImage = modal.querySelector(".meal-image");
  mealImage.src = button.dataset.image;
  mealImage.alt = button.dataset.title;
  modal.style.display = "block";
};

const closeModal = (button) => {
  const modal = button.parentElement.parentElement;
  modal.style.display = "none";
};

const clickOutsideToCloseModal = () => {
  window.addEventListener("click", (event) => {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  });
};

export { openModal, closeModal, clickOutsideToCloseModal };
