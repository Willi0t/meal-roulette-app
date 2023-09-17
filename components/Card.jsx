import React from "react";

function Card({ meals, onMealClick }) {
  return (
    <div className="flex w-full flex-wrap justify-center  ">
      {meals.length > 0 &&
        meals.map((item) => (
          <button
            onClick={() => onMealClick(item)}
            key={item.id}
            className="flex flex-col items-center m-2 w-2/5 min-h-[30vh] bg-white rounded-lg shadow-md"
          >
            <img
              src={item.picture}
              alt={item.title}
              className="w-full  object-cover rounded-t-lg"
            />
            <div className="flex justify-center flex-col grow w-full">
              <p className="flex items-center justify-center p-4 text-lg font-semibold ">
                {item.title}
              </p>
            </div>
          </button>
        ))}
    </div>
  );
}

export default Card;
