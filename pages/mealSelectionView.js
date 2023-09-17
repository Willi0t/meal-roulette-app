import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import MealDetails from "../components/MealDetails";

function MealSelectionView() {
  const [meals, setMeals] = useState([]);
  const [displayedMeals, setDisplayedMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const fetchMeals = async () => {
    try {
      const response = await fetch(
        "https://playground.devskills.co/api/rest/meal-roulette-app/meals"
      );
      const data = await response.json();
      setMeals(data.meal_roulette_app_meals);
      console.log(data);
      // Display the first 4 meals initially
      setDisplayedMeals(data.meal_roulette_app_meals.slice(0, 4));
    } catch (error) {
      console.log("Error fetching meals:", error);
    }
  };

  const refreshMeals = () => {
    // Show the next 4 meals or start from the beginning if all have been shown
    setDisplayedMeals((prevDisplayedMeals) => {
      const currentIndex = meals.indexOf(prevDisplayedMeals[0]);
      const nextIndex = (currentIndex + 4) % meals.length;
      return meals.slice(nextIndex, nextIndex + 4);
    });
  };

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center lg:w-1/3 sm:w-full ">
      <h2 className="p-8 text-center flex items-center font-bold lg:text-5xl text-4xl">
        Meal suggestions
      </h2>
      <Card meals={displayedMeals} onMealClick={handleMealClick} />
      {selectedMeal ? (
        <MealDetails
          meal={selectedMeal}
          onClose={() => setSelectedMeal(null)}
        />
      ) : (
        <button
          onClick={refreshMeals}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 m-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Refresh
        </button>
      )}
    </div>
  );
}

export default MealSelectionView;
