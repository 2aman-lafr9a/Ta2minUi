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

interface OfferCardForTMProps {
  offer: {
    id: string;
    agency: {
      name: string;
    };
    name: string;
    description: string;
    price: number;
    // Add more properties as needed
  };
}

const DELETE_OFFER = gql`
  mutation DeleteOffer($id: ID!) {
    deleteOffer(id: $id) {
      id
    }
  }
`;

const OfferCardForTM: React.FC<OfferCardForTMProps> = ({ offer }) => {
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
      <Card className="max-w-[400px]">
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
            <Rating content="Offer Rating" />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default OfferCardForTM;
