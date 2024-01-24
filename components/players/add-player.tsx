
"use client";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProps,
  useDisclosure,
} from "@nextui-org/react";
import React, { FormEvent, useState } from "react";
import PlusIcon from "@/components/icons/tailwindCss//PlusIcon";
import { useMutation , gql } from "@apollo/client";
import toast from "react-hot-toast";
const CREATE_PLAYER = gql`
mutation createPlayer($input: PlayerInput!) {
  createPlayer(input: $input) {
    id
    name
    age
    photo
    nationality
    flag
    overall
    potential
    position
    value
    wage
    preferred_foot
    work_rate
    body_type
    international_reputation
    skill_moves
    weak_foot
    height
    weight
  }
}
`;

const UPDATE_PLAYER = gql`
  mutation updatePlayer($id: ID!, $playerInput: PlayerInput!) {
    updatePlayer(id: $id, playerInput: $playerInput) {
      id
      name
      age
      photo
      nationality
      flag
      overall
      potential
      position
      value
      wage
      preferred_foot
      work_rate
      body_type
      international_reputation
      skill_moves
      weak_foot
      height
      weight
      # Add other properties as needed for the updated player
    }
  }
`;


const useCreatePlayerMutation = () => {
  return useMutation(CREATE_PLAYER);
};
const useUpdatePlayerMutation = () => {
  return useMutation(UPDATE_PLAYER);
}


export const AddPlayer = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] =
    React.useState<ModalProps["scrollBehavior"]>("inside");


  const [playerInput, setPlayerInput] = useState({
    name: "",
    age: "",
    photo: "",
    nationality: "",
    flag: "",
    overall: 0,
    potential: 0,
    position: "",
    value: 0,
    wage: 0,
    preferred_foot: "",
    work_rate: "",
    body_type: "",
    international_reputation: "",
    skill_moves: "",
    weak_foot: "",
    height: 0,
    weight: 0,
  });

  const handleInputChange = (field: string, value: string) => {
    setPlayerInput((prevInput) => ({
      ...prevInput,
      [field]: value,
    }));
  };
  const [createPlayer] = useCreatePlayerMutation();

 
  const createPlayerHandler = async (e: FormEvent) => {
    e.preventDefault();
    console.log(playerInput);
  
    await  createPlayer({
      variables: {
        input: {
          name: playerInput.name,
          age: playerInput.age,
          photo: playerInput.photo,
          nationality: playerInput.nationality,
          flag: playerInput.flag,
          overall: playerInput.overall,
          potential: playerInput.potential,
          position: playerInput.position,
          value: playerInput.value,
          wage: playerInput.wage,
          preferred_foot: playerInput.preferred_foot,
          work_rate: playerInput.work_rate,
          body_type: playerInput.body_type,
          international_reputation: playerInput.international_reputation,
          skill_moves: playerInput.skill_moves,
          weak_foot: playerInput.weak_foot,
          height: playerInput.height,
          weight: playerInput.weight,
         },
      },
    });
  
   };

   const [updatePlayer] = useUpdatePlayerMutation();
  const updatePlayerHandler = async (e: FormEvent) => {
    e.preventDefault();
    console.log(playerInput);
    await updatePlayer({
      variables: {
        input: {
          name: playerInput.name,
          age: playerInput.age,
          photo: playerInput.photo,
          nationality: playerInput.nationality,
          flag: playerInput.flag,
          overall: playerInput.overall,
          potential: playerInput.potential,
          position: playerInput.position,
          value: playerInput.value,
          wage: playerInput.wage,
          preferred_foot: playerInput.preferred_foot,
          work_rate: playerInput.work_rate,
          body_type: playerInput.body_type,
          international_reputation: playerInput.international_reputation,
          skill_moves: playerInput.skill_moves,
          weak_foot: playerInput.weak_foot,
          height: playerInput.height,
          weight: playerInput.weight,
         },
      },
    });
  }
  const handelUpdatePlayer = () => {

    updatePlayerHandler;

    toast.success(`Player Updated ${playerInput.name}Successfully`);

    onClose();
  }


  const handleAddPlayer = () => {
   

      createPlayerHandler;

      toast.success(`Player Added ${playerInput.name}Successfully`);
     
    onClose();
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
          Add Player <PlusIcon />
        </p>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          scrollBehavior={scrollBehavior}
          placement="top-center"
        >
          <ModalContent>
            <ModalHeader
              className="flex flex-col items-center gap-1 "
              style={{
                textAlign: "center",
                alignItems: "center",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              Add Player
            </ModalHeader>
            <ModalBody>
              <Input
                label="Photo URL"
                variant="bordered"
                value={playerInput.photo}
                onChange={(e) => handleInputChange("photo", e.target.value)}
              />
              <div className="flex gap-4 items-center">
                <Input
                  label="Name"
                  variant="bordered"
                  value={playerInput.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
                <Input
                  label="Age"
                  type="text"
                  variant="bordered"
                  value={playerInput.age}
                  onChange={(e) => handleInputChange("age", e.target.value)}
                />
              </div>
              <div className="flex gap-4 items-center">
                <Input
                  label="Nationality"
                  variant="bordered"
                  value={playerInput.nationality}
                  onChange={(e) =>
                    handleInputChange("nationality", e.target.value)
                  }
                />
                <Input
                  label="Flag URL"
                  variant="bordered"
                  value={playerInput.flag}
                  onChange={(e) =>
                    handleInputChange("position", e.target.value)
                  }
                />
              </div>

              <div className="flex gap-4 items-center">
                <Input
                  label="Overall"
                  variant="bordered"
                  value={playerInput.overall?.toString()} // Convert the number to string
                  onChange={(e) => handleInputChange("overall", e.target.value)}
                />

                <Input
                  label="Potential"
                  variant="bordered"
                  value={playerInput.position}
                  onChange={(e) =>
                    handleInputChange("position", e.target.value)
                  }
                />
              </div>
              <div className="flex gap-4 items-center">
                <Input
                  label="Value"
                  type="number"
                  variant="bordered"
                  value={playerInput.value?.toString()}
                  onChange={(e) =>
                    handleInputChange("nationality", e.target.value)
                  }
                />
                <Input
                  label="Wage"
                  type="number"
                  variant="bordered"
                  value={playerInput.wage?.toString()}
                  onChange={(e) => handleInputChange("wage", e.target.value)}
                />
              </div>
              <Input
                label="Preferred Foot"
                variant="bordered"
                value={playerInput.preferred_foot}
                onChange={(e) =>
                  handleInputChange("preferred_foot", e.target.value)
                }
              />
              <Input
                label="Work Rate"
                variant="bordered"
                value={playerInput.work_rate}
                onChange={(e) => handleInputChange("work_rate", e.target.value)}
              />
              <Input
                label="Body Type"
                variant="bordered"
                value={playerInput.body_type}
                onChange={(e) => handleInputChange("body_type", e.target.value)}
              />
              <Input
                label="International Reputation"
                variant="bordered"
                value={playerInput.international_reputation}
                onChange={(e) =>
                  handleInputChange("international_reputation", e.target.value)
                }
              />
              <Input
                label="Skill Moves"
                variant="bordered"
                value={playerInput.skill_moves}
                onChange={(e) =>
                  handleInputChange("skill_moves", e.target.value)
                }
              />
              <Input
                label="Weak Foot"
                variant="bordered"
                value={playerInput.weak_foot}
                onChange={(e) => handleInputChange("weak_foot", e.target.value)}
              />
              <div className="flex gap-4 items-center">
                <Input
                  label="Height"
                  type="number"
                  variant="bordered"
                  value={playerInput.height?.toString()}
                  onChange={(e) => handleInputChange("height", e.target.value)}
                />
                <Input
                  label="Weight"
                  type="number"
                  variant="bordered"
                  value={playerInput.weight?.toString()}
                  onChange={(e) => handleInputChange("weight", e.target.value)}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onClick={onClose}>
                Close
              </Button>
              <Button color="primary" onClick={handleAddPlayer}>
                Add Player
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};
