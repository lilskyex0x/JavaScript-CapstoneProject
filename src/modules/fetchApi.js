const getMeals = async () => {
  const response = await fetch(
    "https://themealdb.com/api/json/v1/1/search.php?s"
  );
  const data = await response.json();
  return data.meals;
};

export { getMeals };
