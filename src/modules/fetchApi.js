const  fetchMeals = async () => {
    const response = await fetch('https://themealdb.com/api/json/v1/1/search.php?s');
    return await response.json();
  }
  
  export default fetchMeals;

