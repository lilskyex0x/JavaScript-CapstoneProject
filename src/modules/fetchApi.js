
const  fetchMeals = async () => {
    const response = await fetch('https://themealdb.com/api/json/v1/1/search.php?s');
    return await response.json();
  }
  
  export default fetchMeals;

const getMeals = async () => {
  const response = await fetch(
    "https://themealdb.com/api/json/v1/1/search.php?s"
  );
  const data = await response.json();
  return data.meals;
};

export { getMeals };

