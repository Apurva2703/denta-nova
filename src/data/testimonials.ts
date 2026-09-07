export type Testimonial = {
  name: string;
  treatment: string;
  rating: number;
  text: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Rhea Kapoor",
    treatment: "Dental Implants",
    rating: 5,
    initials: "RK",
    text: "From the first consultation to the final fitting, everything was explained calmly and clearly. The clinic feels more like a premium studio than a dental office.",
  },
  {
    name: "Daniel Ortiz",
    treatment: "Teeth Whitening",
    rating: 5,
    initials: "DO",
    text: "Three shades brighter in a single visit with no sensitivity at all. The team took time to check comfort throughout the appointment.",
  },
  {
    name: "Meera Sundaram",
    treatment: "Clear Aligners",
    rating: 5,
    initials: "MS",
    text: "I could see a 3D preview of my result before I even started. Ten months later my smile matches that preview almost exactly.",
  },
  {
    name: "Tom Whitfield",
    treatment: "Root Canal Treatment",
    rating: 5,
    initials: "TW",
    text: "I was genuinely nervous, and it turned out to be completely painless. Finished in one visit and back at work the same afternoon.",
  },
  {
    name: "Anita Rao",
    treatment: "Smile Design",
    rating: 5,
    initials: "AR",
    text: "The result looks natural, not artificial. That was exactly what I asked for and the team listened carefully.",
  },
];
