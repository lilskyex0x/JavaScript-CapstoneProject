import _ from "lodash";
import "./style.css";
import { createFoodList } from "./modules/foodList";
import { openModal, closeModal, clickOutsideToCloseModal } from "./modules/modal.js";


import createFoodList from "./modules/get_number_likes";  

document.addEventListener('DOMContentLoaded', createFoodList);
const initializeApp = async () => {
  await createFoodList();
  const commentButtons = document.querySelectorAll(".comment-btn");
  commentButtons.forEach((button) => {
    button.addEventListener("click", () => {
      openModal(button);
    });
  });
  const closeButtons = document.querySelectorAll(".close-button");
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      closeModal(button);
    });
  });
  clickOutsideToCloseModal();
};

initializeApp();

