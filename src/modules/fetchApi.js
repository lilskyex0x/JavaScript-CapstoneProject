const createFoodList = async () => {
    const foodListElement = document.querySelector('.food-list');
    const response = await fetch('https://themealdb.com/api/json/v1/1/search.php?s');
    const data = await response.json();
    data.meals.forEach(meal => {
        foodListElement.innerHTML += `
            <div class='grid-item'>
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}"  width="250px" height="200px">
                <div class='small-buttons'>
                    <p>${meal.strMeal} <i class="fa fa-heart-o"></i></p>
                    <button>Comments</button>
                    <br><br>
                    <button>Reserve</button>
                </div>
                
            </div>
            <br>
        `;
    });
};
export default createFoodList
