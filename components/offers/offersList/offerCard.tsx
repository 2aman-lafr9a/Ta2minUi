import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Tooltip } from "@nextui-org/react";
import { EditIcon } from "@/components/icons/table/edit-icon";
import { EyeIcon } from "@/components/icons/table/eye-icon";
import { DeleteIcon } from "@/components/icons/table/delete-icon";
import { gql, useMutation } from "@apollo/client";
import toast from "react-hot-toast";

interface OfferCardProps {
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

const OfferCard: React.FC<OfferCardProps> = ({ offer }) => {
  const [deleteOffer] = useMutation(DELETE_OFFER);

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
            <p className="text-base text-gray-700 dark:text-gray-300 mb-2">{offer.description}</p>
            <p className="text-lg font-bold text-orange-500 dark:text-orange-300">Price: {offer.price} ETH</p>
            {/* Add more details as needed */}
          </div>
        </CardBody>
        <Divider />
        <CardFooter className="flex justify-center">
          <div className="flex justify-center items-center gap-4">
            <div>
              <Tooltip content="Details">
                <button onClick={() => console.log("View player", offer.id)}>
                  <EyeIcon size={20} fill="#979797" />
                </button>
              </Tooltip>
            </div>
            <div>
              <Tooltip content="Edit player" color="secondary">
                <button onClick={() => console.log("Edit player", offer.id)}>
                  <EditIcon size={20} fill="#979797" />
                </button>
              </Tooltip>
            </div>
            <div>
              <Tooltip content="Delete player" color="danger">
                <button onClick={() => handleDelete(offer.id)}>
                  <DeleteIcon size={20} fill="#FF0080" />
                </button>
              </Tooltip>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default OfferCard;
