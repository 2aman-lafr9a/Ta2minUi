import { gql, useQuery } from "@apollo/client";
import { Spinner } from "@nextui-org/react";
import { OfferCard } from "./offerCard";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
const GET_OFFERS = gql`
  query GetOffers {
    getOffers {
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
const sampleOffers = [
  {
    id: "1",
    name: "Special Offer",
    agency: {
      id: "1",
      name: "Awesome Agency",
      logoUrl: "https://example.com/logo.png",
      website: "https://awesomeagency.com",
      sourceCodeUrl: "https://github.com/awesomeagency",
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
      logoUrl: "https://example.com/innovative_logo.png",
      website: "https://innovativesolutions.com",
      sourceCodeUrl: "https://github.com/innovativesolutions",
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
      logoUrl: "https://example.com/techgenius_logo.png",
      website: "https://techgenius.com",
      sourceCodeUrl: "https://github.com/techgenius",
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
      logoUrl: "https://example.com/healthhub_logo.png",
      website: "https://healthhub.com",
      sourceCodeUrl: "https://github.com/healthhub",
    },
    description: "Invest in your health with our exclusive wellness package!",
    price: 150,
    date: "2024-02-20",
    rating: 4.7,
    offerType: "Healthcare Discount",
  },{
    id: "5",
    name: "Gadget Extravaganza",
    agency: {
      id: "5",
      name: "TechWiz",
      logoUrl: "https://example.com/techwiz_logo.png",
      website: "https://techwiz.com",
      sourceCodeUrl: "https://github.com/techwiz",
    },
    description: "Explore the latest gadgets at unbeatable prices. Limited stock available!",
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
      logoUrl: "https://example.com/stylehub_logo.png",
      website: "https://stylehub.com",
      sourceCodeUrl: "https://github.com/stylehub",
    },
    description: "Revamp your wardrobe with our exclusive fashion collection. Trendy styles for everyone!",
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
      logoUrl: "https://example.com/travelease_logo.png",
      website: "https://travelease.com",
      sourceCodeUrl: "https://github.com/travelease",
    },
    description: "Embark on an unforgettable adventure with our travel package. Explore new horizons!",
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
      logoUrl: "https://example.com/homecraft_logo.png",
      website: "https://homecraft.com",
      sourceCodeUrl: "https://github.com/homecraft",
    },
    description: "Upgrade your living space with our quality home essentials. Make your home a haven!",
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
      logoUrl: "https://example.com/fitlife_logo.png",
      website: "https://fitlife.com",
      sourceCodeUrl: "https://github.com/fitlife",
    },
    description: "Achieve your fitness goals with our exclusive fitness equipment and training plans!",
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
      logoUrl: "https://example.com/booknook_logo.png",
      website: "https://booknook.com",
      sourceCodeUrl: "https://github.com/booknook",
    },
    description: "Dive into a world of literature with our curated collection of must-read books!",
    price: 90,
    date: "2024-03-25",
    rating: 4.9,
    offerType: "Book Sale",
  },
  // ... R
  // ... Repeat the structure for the remaining offers
];
export default function OfferGrid() {
  const [offers, setOffers] = useState(sampleOffers);
  const { loading, error, data } = useQuery(GET_OFFERS);

  useEffect(() => {
    if (loading) return;
    if (error) {
      toast.error("Error loading offers. Here's some static data.");
      setOffers(sampleOffers);
    } else {
      console.log(data);
      setOffers(data.getOffers);
    }
  }, [loading, error, data]);

  if (loading)
    return (
      <div>
        <Spinner
          className="flex justify-center items-center"
          color="primary"
          size="lg"
        />
      </div>
    );

  return (
    <div className="gap-5 grid grid-cols-2 sm:grid-cols-3">
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
}
