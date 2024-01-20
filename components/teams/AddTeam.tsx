import React from "react";
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
import PlusIcon from "../tabletail/PlusIcon";
import { users } from "../tabletail/data";


/// importing the API_GATEWAY_URL from the .env.local file
const API_GATEWAY_URL = process.env.API_GATEWAY_URL;


// Define the FormData type based on your team example
type FormData = {
  name: string;
  country: string;
  status: string;
  age: string;
  avatar: string;
  email: string;
  owner: string;
};

export const AddTeam = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { register, handleSubmit, reset } = useForm<FormData>(); // Initialize react-hook-form

  // Handle form submission with an async function that takes event and form data
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // Log the submitted data to the console
    console.log("Added Team:", data);
    /// open the file '../tabletail/data.ts' and add the data to the 'teams' array as a json object
    //
    users.push({
      id: users.length + 1,
      name: data.name,
      country: data.country,
      status: data.status,
      age: data.age,
      avatar: data.avatar,
      email: data.email,
      owner: data.owner,
    });

    const teamDescription = `Country: ${data.country}, Status: ${data.status}, Age: ${data.age}, Email: ${data.email}`;


    toast.success(`Team ${data.name} Added successfully`);
  };

  return (
    <div>
      <>
        <p
          onClick={onOpen}
          className="bg-foreground text-background"
          style={{
            cursor: "pointer",
            padding: "2px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
          }}
        >
          Add Team <PlusIcon />
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
                  className="flex flex-col items-center gap-1 "
                  style={{
                    textAlign: "center",
                    alignItems: "center",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  Add Team
                </ModalHeader>
                <ModalBody>
                  {/* Use react-hook-form's register to bind input fields to the form state */}
                  <Input
                    label="Name"
                    {...register("name")}
                    variant="bordered"
                  />
                  <Input
                    label="Country"
                    {...register("country")}
                    variant="bordered"
                  />
                    <Input
                    label="Owner"
                    {...register("owner")}
                    variant="bordered"
                  />
                  <Input label="Age" {...register("age")} variant="bordered" />
                  <Input
                    label="Avatar"
                    {...register("avatar")}
                    variant="bordered"
                  />
                  <Input
                    label="Email"
                    {...register("email")}
                    variant="bordered"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onClick={onClose}>
                    Close
                  </Button>
                  {/* Use handleSubmit to trigger the onSubmit function */}
                  <Button
                    color="primary"
                    onPress={() => handleSubmit(onSubmit)()}
                    onClick={onClose}
                  >
                    Add Team
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};
