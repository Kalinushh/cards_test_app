function apiMeal() {
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    .then((res) => res.json())
    .then((data) => {
      const obj = data.meals.map((item) => {
        return {
          id: Number(item.idMeal),
          name: item.strMeal,
          image: item.strMealThumb,
          category: item.strCategory,
          area: item.strArea,
          instructions: item.strInstructions,
        };
      });
      return console.log(obj);
    })
    .catch((err) => console.log(err));
}

apiMeal();
