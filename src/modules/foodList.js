import { getMeals } from "./fetchApi.js";

const createFoodList = async () => {
  const foodListElement = document.querySelector(".food-list");
  const meals = await getMeals();

  meals.forEach((meal) => {
    foodListElement.innerHTML += `
      <div class='grid-item'>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}"  width="250px" height="200px">
        <div class='small-buttons'>
          <p>${meal.strMeal} <i class="fa fa-heart-o"></i></p>
          <button class="comment-btn" data-modal-target="#modal" data-title="${meal.strMeal}" data-details="${meal.strInstructions}" data-image="${meal.strMealThumb}">Comments</button>
          <br><br>
          <button>Reserve</button>
        </div>
      </div>
      <br>
    `;
  });

  return meals;
};

export { createFoodList };
