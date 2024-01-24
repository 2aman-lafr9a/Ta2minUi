import React, { FormEvent } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import PlusIcon from "../icons/tailwindCss/PlusIcon";
import { gql, useMutation } from "@apollo/client";

interface FormData {
  name: string;
  agency: string;
  description: string;
  price: string;
  date: string;
  rating: string;
  offerType: string;
}

interface Offer {
  name: string;
  agency: string;
  description: string;
  price: number;
  date: string;
  rating: number;
  offerType: string;
}

const CREATE_OFFER = gql`
  mutation CreateOffer($input: CreateOfferInput!) {
    createOffer(input: $input) {
      id
      name
      agency {
        id
        name
        description
        plan
      }
      description
      price
      date
      rating
      offerType
    }
  }
`;

export const AddOffer = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [createOffer] = useMutation(CREATE_OFFER);
  const [offer, setOffer] = React.useState<Offer>({
    name: "",
    agency: "",
    description: "",
    price: 0,
    date: "",
    rating: 0,
    offerType: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setOffer({ ...offer, [field]: value });
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      // Assuming you want to log the offer before creating it
      console.log("Offer to be added:", offer);

      // Call the mutation to create the offer using the form data
      await createOffer({
        variables: {
          input: {
            name: data.name,
            agency: data.agency,
            description: data.description,
            price: parseFloat(data.price),
            date: data.date,
            rating: parseFloat(data.rating),
            offerType: data.offerType,
          },
        },
      });

      // Optionally, you can reset the form and close the modal
      reset();
      onOpenChange();
    } catch (error) {
       toast.error("Error adding offer. Please try again.");
    }
  };

  return (
    <>
      <div>
        <p
          onClick={onOpen}
       
          style={{
            cursor: "pointer",
            padding: "2px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
          }}
        >
          Add Offer <PlusIcon />
        </p>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader
                  className="flex flex-col items-center gap-1"
                  style={{
                    textAlign: "center",
                    alignItems: "center",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  Add Offer
                </ModalHeader>
                <ModalBody>
                  <Input
                    label="Name"
                    {...register("name")}
                    variant="bordered"
                    onChange={(e) => handleInputChange("name", e.target.value)}
                  />
                  <Input
                    label="Description"
                    {...register("description")}
                    variant="bordered"
                    onChange={(e) => handleInputChange("description", e.target.value)}
                  />
                  <Input
                    label="Price"
                    {...register("price")}
                    variant="bordered"
                    onChange={(e) => handleInputChange("price", e.target.value)}
                  />
                  <Input
                    type="date"
                    label="Date"
                    {...register("date")}
                    variant="bordered"
                    onChange={(e) => handleInputChange("date", e.target.value)}
                  />
                  <Input
                    label="Rating"
                    {...register("rating")}
                    variant="bordered"
                    onChange={(e) => handleInputChange("rating", e.target.value)}
                  />
                  <Input
                    label="Offer Type"
                    {...register("offerType")}
                    variant="bordered"
                    onChange={(e) => handleInputChange("offerType", e.target.value)}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onClick={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onClick={handleSubmit(onSubmit)}>
                    Add Offer
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};
