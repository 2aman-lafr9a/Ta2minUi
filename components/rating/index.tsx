import React from "react";
import { Tooltip } from "@nextui-org/react";
import ReactStars from "react-rating-star-with-type";

interface RatingProps {
  content: string;
  size?: number;
  initialRating: number;
  onChange?: (rating: number) => void;
  offerName?: string;
  isDisplay?: boolean;
  isInput?: boolean;
}

const Rating: React.FC<RatingProps> = ({
  content,
  initialRating,
  onChange,
  offerName,
  isDisplay,
  isInput,
  size ,
}) => {
  const roundToHalfStar = (rating: number) => {
    const roundedRating = Math.floor(rating);
    return roundedRating;
  };

  const handleClick = (index: number) => {
    if (onChange && !isInput) {
      console.log(`Selected rating ${index } for offer ${offerName}`);
      onChange(index );
      console.log(`Selected rating ${index } for offer ${offerName}`);
    }
  };

  return (
    <div className=" ">
      <Tooltip content={initialRating}>
        <div className="stars">
          <div>
            <ReactStars
              value={ (initialRating)}
              isEdit={isInput}
              activeColors={["red", "#8568FC", "#9177FF", "#FFCE00", "orange"]}
              valueShow={true}
              size={size ? size : 23}
              onChange={(value) => handleClick(value)}
            />
          </div>
        </div>
      </Tooltip>
    </div>
  );
};

export default Rating;
