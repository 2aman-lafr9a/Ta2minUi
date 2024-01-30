import React, { useState } from "react";
import { Tooltip } from "@nextui-org/react";
import ReactStars from "react-rating-star-with-type";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

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
  size,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tempRating, setTempRating] = useState<number>(initialRating);
  const [isRating, setIsRating] = useState<boolean>(false);

  const handleOpen = () => {
    onOpen();
  };

  const roundToHalfStar = (rating: number) => {
    const roundedRating = Math.floor(rating);
    return roundedRating;
  };

  const handleAccept = async () => {
    if (onChange) {
      onChange(tempRating);
    }

    onClose();
  };

  const handleClick = (index: number) => {
    setTempRating(index);

    setIsRating(true);

    onOpen();
  };

  return (
    <div className=" ">
      <Tooltip content={initialRating}>
        <div className="stars">
          <div>
            <ReactStars
              value={tempRating}
              isEdit={isInput && !isRating}
              activeColors={["red", "#8568FC", "#9177FF", "#FFCE00", "orange"]}
              valueShow={true}
              size={size ? size : 23}
              onChange={(value) => handleClick(value)}
            />
          </div>
        </div>
      </Tooltip>
      <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Are you sure you want to rate this offer?
              </ModalHeader>
              <ModalBody>
                <div className="flex jusstify-center" style={
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }
                }>
                  <ReactStars
                    value={tempRating}
                    isEdit={isInput && !isRating}
                    activeColors={[
                      "red",
                      "#8568FC",
                      "#9177FF",
                      "#FFCE00",
                      "orange",
                    ]}
                    valueShow={true}
                    size={size ? size : 23}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" variant="light" onPress={onClose}>
                  No
                </Button>
                <Button color="primary" onPress={handleAccept}>
                  YES im sure
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Rating;
