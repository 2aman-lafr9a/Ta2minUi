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
import PlusIcon from "../icons/tailwindCss/PlusIcon";
import { users } from "./teamsTable/data";
import { gql, useMutation } from "@apollo/client";


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


const CREATE_TEAM = gql`
  mutation CreateTeam($input: CreateTeamInput!) {
    createTeam(input: $input) {
      id
      name
      description
      owner
    }
  }
`;


export const AddTeam = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { register, handleSubmit, reset } = useForm<FormData>(); // Initialize react-hook-form
  const [createTeam] = useMutation(CREATE_TEAM);

  const handleCreateTeam = async (input: any) => {
    try {
      await createTeam({
        variables: { input },
      });
      toast.success("Team created successfully");
    } catch (error) {
      toast.error("Error creating team");
    }
  }
  
  // Handle form submission with an async function that takes event and form data
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // Log the submitted data to the console
    console.log("Added Team:", data);
     

    const teamDescription = `Country: ${data.country}, Status: ${data.status}, Age: ${data.age}, Email: ${data.email}`;
      
    const team = {
      name: data.name,
      description: teamDescription,
      owner: data.owner,
    };
    handleCreateTeam(team);
    toast.success(`Team ${data.name} Added successfully`);
  };

  return (
    <div>
      <>
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
