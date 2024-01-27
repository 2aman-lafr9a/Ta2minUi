"use client";

import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Divider, Spinner } from "@nextui-org/react";
import OfferCardForTM, { Offer } from "../offers/offersList/offerCardForTM";
import { motion } from "framer-motion";
import { useWindowSize } from "@/components/hooks/useWindowSize";
import PlayerCard from "@/components/players/playerCard";
import Link from "next/link";
import { HouseIcon } from "@/components/icons/breadcrumb/house-icon";
import { UsersIcon } from "@/components/icons/breadcrumb/users-icon";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

// Import the GraphQL query for fetching offers
const sampleOffers = [
  {
    id: "1",
    name: "Special Offer",
    agency: {
      id: "1",
      name: "Awesome Agency",
      adress: "2651365651237413248",
    },
    description:
      "Amazing offer for you! Amazing offer for you! Amazing offer for you! Amazing offer for you!",
    price: 100,
    date: "2024-01-24",
    rating: 5,
    offerType: "Discount",
  },
  {
    id: "2",
    name: "Exclusive Deal",
    agency: {
      id: "2",
      name: "Innovative Solutions",
      adress: "2651365651237413248",
    },
    description: "Don't miss out on this exclusive deal! Limited time offer!",
    price: 75,
    date: "2024-02-10",
    rating: 4.8,
    offerType: "Special Discount",
  },
  {
    id: "3",
    name: "Tech Bonanza",
    agency: {
      id: "3",
      name: "TechGenius",
      adress: "2651365651237413248",
    },
    description: "Get the latest tech at unbelievable prices. Limited stock!",
    price: 120,
    date: "2024-02-15",
    rating: 4.5,
    offerType: "Flash Sale",
  },
  {
    id: "4",
    name: "Wellness Package",
    agency: {
      id: "4",
      name: "HealthHub",
      adress: "2651365651237413248",
    },
    description: "Invest in your health with our exclusive wellness package!",
    price: 150,
    date: "2024-02-20",
    rating: 4.7,
    offerType: "Healthcare Discount",
  },
  {
    id: "5",
    name: "Gadget Extravaganza",
    agency: {
      id: "5",
      name: "TechWiz",
      adress: "2651365651237413248",
    },
    description:
      "Explore the latest gadgets at unbeatable prices. Limited stock available!",
    price: 200,
    date: "2024-03-01",
    rating: 4.9,
    offerType: "Tech Discount",
  },
  {
    id: "6",
    name: "Fashion Frenzy",
    agency: {
      id: "6",
      name: "StyleHub",
      adress: "2651365651237413248",
    },
    description:
      "Revamp your wardrobe with our exclusive fashion collection. Trendy styles for everyone!",
    price: 80,
    date: "2024-03-05",
    rating: 4.7,
    offerType: "Fashion Sale",
  },
  {
    id: "7",
    name: "Adventure Package",
    agency: {
      id: "7",
      name: "TravelEase",
      adress: "2651365651237413248",
    },
    description:
      "Embark on an unforgettable adventure with our travel package. Explore new horizons!",
    price: 300,
    date: "2024-03-10",
    rating: 4.8,
    offerType: "Travel Deal",
  },
  {
    id: "8",
    name: "Home Essentials",
    agency: {
      id: "8",
      name: "HomeCraft",
      adress: "2651365651237413248",
    },
    description:
      "Upgrade your living space with our quality home essentials. Make your home a haven!",
    price: 150,
    date: "2024-03-15",
    rating: 4.6,
    offerType: "Home Improvement",
  },
  {
    id: "9",
    name: "Fitness Boost",
    agency: {
      id: "9",
      name: "FitLife",
      adress: "2651365651237413248",
    },
    description:
      "Achieve your fitness goals with our exclusive fitness equipment and training plans!",
    price: 120,
    date: "2024-03-20",
    rating: 4.5,
    offerType: "Fitness Sale",
  },
  {
    id: "10",
    name: "Book Lover's Paradise",
    agency: {
      id: "10",
      name: "BookNook",
      adress: "2651365651237413248",
    },
    description:
      "Dive into a world of literature with our curated collection of must-read books!",
    price: 90,
    date: "2024-03-25",
    rating: 4.9,
    offerType: "Book Sale",
  },
  // ... R
  // ... Repeat the structure for the remaining offers
];

const top5Recommended = sampleOffers.slice(0, 6);

const player = {
  id: "1",
  name: "Lionel Messi",
  age: "34",
  photo: "https://i.pravatar.cc/150?u=lionel-messi",
  nationality: "Argentina",
  flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1280px-Flag_of_Argentina.svg.png",
  overall: 94,
  potential: 94,
  position: "Forward",
  value: 150000000,
  wage: 750000,
  preferred_foot: "Left",
  work_rate: "Medium/High",
  body_type: "Lean",
  international_reputation: "5",
  skill_moves: "4",
  weak_foot: "4",
  height: 170,
  weight: 72,
};

// RecomendationPage component
const RecomendationPage: React.FC = () => {
  // Use the GraphQL query to fetch offers
  //   const { loading, error, data } = useQuery(GET_OFFERS);

  //   if (loading) {
  //     // Loading state
  //     return (
  //       <div>
  //         <Spinner className="flex justify-center items-center" color="primary" size="lg" />
  //       </div>
  //     );
  //   }

  //   if (error || !data || !data.getOffers) {
  //     // Error state
  //     return <div>Error loading offers. Please try again later.</div>;
  //   }

  //   // Sample: Assume the top 5 recommended offers have the highest ratings
  //   const top5Recommended = data.getOffers.slice(0, 5);

  //   // Sample: The rest of the offers
  //   const otherOffers = data.getOffers.slice(5);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

  const handleOfferClick = (offer: Offer) => {
    setSelectedOffer(offer);
    onOpen();
  };

  const handleAccept = () => {
    console.log(
      `Offer clicked: ${selectedOffer?.name}, address of the agency: ${selectedOffer?.agency.adress}`
    );
    onClose();
  };

  return (
    <>
      <div className="my-14 lg:px-6 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
        <ul className="flex">
          <li className="flex gap-2">
            <HouseIcon />
            <Link href={"/"}>
              <span>Home</span>
            </Link>
            <span> / </span>{" "}
          </li>

          <li className="flex gap-2">
            <UsersIcon />
            <span>Players</span>
            <span> / </span>{" "}
          </li>
          <li className="flex gap-2">
            <span>Recomendations </span>
          </li>
        </ul>
        <div className="max-w-4xl m-auto px-8">
          <div className="flex justify-center m-5">
            <motion.div
              whileHover={{
                scale: [1, 1.1, 1, 1.1, 1],
                rotate: [0, -5, 5, -5, 5, 0],
              }}
              drag
              dragConstraints={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}
              dragElastic={1}
              animate={
                selectedOffer
                  ? { rotate: [0, -5, 5, -5, 5, 0], scale: [1, 1.1, 1, 1.1, 1] }
                  : {}
              }
              transition={{ duration: 0.6 }}
            >
              <PlayerCard player={player} />
            </motion.div>
          </div>
          <h2 className="text-2xl font-semibold m-8">
            The Most Recommended Offers{" "}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 m-8">
            {top5Recommended.map((offer, index) => (
              <motion.div
                key={offer.id}
                whileHover={{ scale: 1.1 }}
                drag
                dragConstraints={{
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
                dragElastic={1}
                whileTap={{
                  scale: 1.1,
                  rotate: 5,
                }}
                animate={
                  selectedOffer === offer
                    ? {
                        rotate: [0, -5, 5, -5, 5, 0],
                        scale: [1, 1.1, 1, 1.1, 1],
                      }
                    : {}
                }
                transition={{ duration: 0.6 }}
                onClick={() => handleOfferClick(offer)}
              >
                <OfferCardForTM
                  offer={offer}
                  className={
                    index === top5Recommended.length - 1
                      ? "col-start-3 flex justify-center "
                      : ""
                  }
                />
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <Divider />

          {/* Display the rest of the offers */}
          <h2 className="text-2xl font-semibold m-6">Other Offers</h2>
          <div className="gap-5 grid grid-cols-2 sm:grid-cols-3">
            {sampleOffers.map((offer) => (
              <motion.div
                key={offer.id}
                whileHover={{ scale: 1.1 }}
                drag
                dragConstraints={{
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
                dragElastic={1}
                whileTap={{
                  scale: 1.1,
                  rotate: 5,
                }}
                animate={
                  selectedOffer === offer
                    ? {
                        rotate: [0, -5, 5, -5, 5, 0],
                        scale: [1, 1.1, 1, 1.1, 1],
                      }
                    : {}
                }
                transition={{ duration: 0.6 }}
                onClick={() => handleOfferClick(offer)}
              >
                <OfferCardForTM offer={offer} />
              </motion.div>
            ))}
          </div>
        </div>
        {/* Display the top 5 recommended offers */}
      </div>
      <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Terms and Conditions
              </ModalHeader>
              <ModalBody>
                <p>
                  Please read the terms and conditions carefully before
                  accepting the offer.
                </p>
                {/* Display your terms and conditions here */}
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" variant="light" onPress={onClose}>
                  Decline
                </Button>
                <Button color="primary" onPress={handleAccept}>
                  Accept
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default RecomendationPage;
