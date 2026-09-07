import doctor1 from "@/assets/doctor-avinash.jpg";

export type Doctor = {
  slug: string;
  name: string;
  specialty: string;
  qualification: string;
  experience: string;
  rating: number;
  availability: string;
  image: string;
  bio: string;
  treatments: string[];
  hours: { day: string; time: string }[];
  reviews: { name: string; text: string; rating: number }[];
};

const hours = [
  { day: "Mon – Sat (Morning)", time: "10:30 AM – 2:00 PM" },
  { day: "Mon – Sat (Evening)", time: "5:00 PM – 8:30 PM" },
  { day: "Sunday", time: "Emergency only" },
];

export const doctors: Doctor[] = [
  {
    slug: "dr-avinash-yele",
    name: "Dr. Avinash Yele",
    specialty: "Dental Surgeon & Implantologist",
    qualification: "B.D.S., M.D.S. (Dental Surgeon & Implantologist)",
    experience: "14+ years",
    rating: 4.9,
    availability: "Mon – Sat, 10:30 AM – 2:00 PM & 5:00 PM – 8:30 PM",
    image: doctor1,
    bio: "Dr. Avinash Yele leads the surgical, restorative and cosmetic care at CARE 32 Dental Care Center. Known for a gentle chairside manner, he explains every treatment option clearly before starting and is trusted by anxious patients for calm, precise care.",
    treatments: [
      "Dental Implants",
      "Root Canal Treatment",
      "Smile Design",
      "Crowns & Bridges",
      "Full-mouth Rehabilitation",
      "Kids Dentistry",
    ],
    hours,
    reviews: [
      {
        name: "Rupali J.",
        text: "Very gentle and explains everything clearly. My root canal was completely painless.",
        rating: 5,
      },
      {
        name: "Sagar P.",
        text: "Two implants placed with zero discomfort. Excellent follow-up care.",
        rating: 5,
      },
      {
        name: "Neha D.",
        text: "Straightforward pricing and a very skilled hand. Highly recommended.",
        rating: 5,
      },
    ],
  },
];

