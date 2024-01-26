  import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Tooltip,
} from "@nextui-org/react";
import StarIcon from "@/components/icons/tailwindCss/starIcon"; // Assuming you have a StarIcon component
import { gql, useMutation } from "@apollo/client";
import toast from "react-hot-toast";
import { DeleteIcon } from "@/components/icons/table/delete-icon";

interface RatingProps {
  content: string;
}

const Rating: React.FC<RatingProps> = ({ content }) => {
  return (
    <div className="flex justify-center items-center gap-4">
          
             <div>
              <Tooltip content={content}>
                <div className="rating">
                  <input

                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </Tooltip>
            </div>
                         
     </div>
  );
};

export default Rating;
