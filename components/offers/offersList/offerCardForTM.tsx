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
import Rating from "@/components/rating";

//  id: "10",
// name: "Book Lover's Paradise",
// agency: {
//   id: "10",
//   name: "BookNook",
//   logoUrl: "https://example.com/booknook_logo.png",
//   website: "https://booknook.com",
//   sourceCodeUrl: "https://github.com/booknook",
// },
// description: "Dive into a world of literature with our curated collection of must-read books!",
// price: 90,
// date: "2024-03-25",
// rating: 4.9,
// offerType: "Book Sale",

// Define the Offer type
export interface Offer {
  id: string;
  name: string;
  agency: {
    id: string;
    name: string;
    adress: string;
  };
  description: string;
  price: number;
  date: string;
  rating: number;
  offerType: string;
}
interface OfferCardForTMProps {
  offer: Offer;
  className?: string;
}

const DELETE_OFFER = gql`
  mutation DeleteOffer($id: ID!) {
    deleteOffer(id: $id) {
      id
    }
  }
`;

const OfferCardForTM: React.FC<OfferCardForTMProps> = ({
  offer,
  className,
}) => {
  const [deleteOffer] = useMutation(DELETE_OFFER);
  const [rating, setRating] = useState<number>(0);

  const handleDelete = async (id: string) => {
    try {
      await deleteOffer({
        variables: { id },
      });
      toast.success("Offer deleted successfully");
    } catch (error) {
      toast.error("Error deleting offer");
    }
  };

  return (
    <div>
      <Card className={`max-w-[400px] ${className}`}>
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">{offer.agency.name}</p>
            <p className="text-small text-default-500">{offer.name}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="p-4 bg-gray-100 dark:bg-gray-900 rounded-md shadow-md mb-4">
            <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
              {offer.description}
            </p>
            <p className="text-lg font-bold text-orange-500 dark:text-orange-300">
              Price: ${offer.price}
            </p>
            {/* Add more details as needed */}
          </div>
        </CardBody>
        <Divider />
        <CardFooter className="flex justify-center">
          <div className="flex justify-center items-center gap-4">
            <Rating
              content="Offer Rating"
              initialRating={offer.rating}
              onChange={(rating) => console.log(`Selected rating: ${rating}`)}
              offerName={offer.name}
            />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default OfferCardForTM;
