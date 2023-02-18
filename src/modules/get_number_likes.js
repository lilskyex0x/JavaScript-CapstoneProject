
import fetchMeals from "./fetchApi";
import fetchLikes from "./likeApi";
import postLike from "./number_of_likes";

const createFoodList = async () => {
    const foodListElement = document.querySelector('.food-list');
    const data = await fetchMeals();
  
    for (const meal of data.meals) {
      const likesData = await fetchLikes(meal.idMeal);
      const likes = likesData.length > 0 ? likesData[0].likes : 0;
  
      const mealElement = document.createElement('div');
      mealElement.classList.add('grid-item');
      mealElement.innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="250px" height="200px">
        <div class='small-buttons'>
          <p>${meal.strMeal} <i class="fa fa-heart-o" data-meal-id="${meal.idMeal}" data-likes="${likes}"></i> <span>${likes} likes</span></p>
          <button>Comments</button>
          <br><br>
        </div>
      `;
      foodListElement.appendChild(mealElement);
  
      const likeButton = mealElement.querySelector('i');
      likeButton.addEventListener('click', async (event) => {
        event.preventDefault();
        const mealId = event.target.getAttribute('data-meal-id');
        const likesElement = event.target.nextElementSibling;
        let likes = parseInt(event.target.getAttribute('data-likes'));
  
        likes++;
        likesElement.innerText = `${likes} likes`;
        event.target.setAttribute('data-likes', likes);
  
        try {
          await postLike(mealId);
        } catch (error) {
          console.error(`Failed to post like for meal ${mealId}:`, error);
          likes--;
          likesElement.innerText = `${likes} likes`;
          event.target.setAttribute('data-likes', likes);
        }
      });
    }
  }
  
  export default createFoodList;