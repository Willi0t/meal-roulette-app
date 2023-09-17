import React, { useEffect, useState, useRef } from "react";

function MealDetails({ meal, onClose }) {
  const [mealDetails, setMealDetails] = useState(null);
  const mealDetailsRef = useRef(null);

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const response = await fetch(
          `https://playground.devskills.co/api/rest/meal-roulette-app/meals/${meal.id}`
        );
        const data = await response.json();
        setMealDetails(data.meal_roulette_app_meals_by_pk);
      } catch (error) {
        console.log("Error fetching meal details:", error);
      }
    };

    if (meal) {
      fetchMealDetails();
    }

    // Add a click event listener to the document
    const handleDocumentClick = (e) => {
      if (
        mealDetailsRef.current &&
        !mealDetailsRef.current.contains(e.target)
      ) {
        onClose();
      }
    };

    document.addEventListener("click", handleDocumentClick);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [meal, onClose]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center">
      {mealDetails ? (
        <div
          className="flex flex-col relative bg-white rounded-lg shadow-md lg:w-1/5 lg:min-h-[40vh] w-2/3 sm:rounded-md"
          ref={mealDetailsRef}
        >
          <button
            className="absolute top-2 right-2 text-gray-600"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <img
            src={mealDetails.picture}
            alt={mealDetails.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <div className="flex flex-col lg:grow items-center justify-center p-2">
            <p className="lg:text-xl font-semibold text-center sm:text-lg">
              {mealDetails.title}
            </p>
            <h3 className="lg:text-lg font-semibold mt-2 text-gray-600 mb-2 sm:mt-3 sm:text-base sm:mb-3">
              Ingredients:
            </h3>
            <p className="lg:text-base text-xs">{mealDetails.ingredients}</p>
          </div>
        </div>
      ) : (
        <p>Loading meal details...</p>
      )}
    </div>
  );
}

export default MealDetails;
