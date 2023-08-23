import React from "react";
import { StarIcon } from "@heroicons/react/24/outline";
const RatingStars = () => {
  return (
    <div className="flex flex-row justify-start items-center gap-2">
      <div className="flex flex-row justify-start items-center">
        <StarIcon className="h-6 w-6" fill="#FFC633" stroke="#FFC633" />
        <StarIcon className="h-6 w-6" fill="#FFC633" stroke="#FFC633" />
        <StarIcon className="h-6 w-6" fill="#FFC633" stroke="#FFC633" />
        <StarIcon className="h-6 w-6" fill="#FFC633" stroke="#FFC633" />
        <StarIcon className="h-6 w-6" fill="#FFC633" stroke="#FFC633" />
      </div>
      <div>
        <span>5/5</span>
      </div>
    </div>
  );
};

export default RatingStars;
