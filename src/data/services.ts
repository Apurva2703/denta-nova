export type Service = {
  slug: string;
  title: string;
  icon: string;
  short: string;
  description: string;
  highlights: string[];
  duration: string;
  price: string;
};

export const services: Service[] = [
  {
    slug: "general-dentistry",
    title: "General Dentistry",
    icon: "ShieldCheck",
    short: "Routine check-ups, cleanings and preventive care that keep problems small.",
    description:
      "Comprehensive examinations, professional cleaning, fillings and preventive guidance designed to protect your natural teeth for life.",
    highlights: ["Digital examination", "Scaling & polishing", "Cavity fillings", "Preventive plan"],
    duration: "30–45 min",
    price: "From $60",
  },
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    icon: "Sparkles",
    short: "Veneers, bonding and smile design tailored to your facial harmony.",
    description:
      "Natural-looking cosmetic treatments planned digitally so you can preview your new smile before treatment begins.",
    highlights: ["Digital smile design", "Porcelain veneers", "Composite bonding", "Gum contouring"],
    duration: "60–90 min",
    price: "From $250",
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    icon: "Anchor",
    short: "Permanent tooth replacement with guided, minimally invasive surgery.",
    description:
      "Titanium implants placed with 3D-guided precision to restore chewing comfort, facial structure and confidence.",
    highlights: ["3D CBCT planning", "Guided placement", "Same-day temporaries", "Lifetime care plan"],
    duration: "90 min",
    price: "From $900",
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    icon: "Sun",
    short: "Safe, enamel-friendly whitening with visible results in one visit.",
    description:
      "Clinically supervised whitening that lifts stains gently while protecting enamel and minimising sensitivity.",
    highlights: ["In-clinic LED whitening", "Custom home kits", "Sensitivity control", "Shade tracking"],
    duration: "60 min",
    price: "From $180",
  },
  {
    slug: "orthodontics",
    title: "Orthodontics",
    icon: "AlignHorizontalDistributeCenter",
    short: "Clear aligners and modern braces for comfortable teeth straightening.",
    description:
      "Digitally planned alignment using clear aligners or discreet braces with predictable, monitored progress.",
    highlights: ["Clear aligners", "Ceramic braces", "3D treatment preview", "Retention plan"],
    duration: "45 min",
    price: "From $1,400",
  },
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    icon: "Activity",
    short: "Pain-free endodontic care that saves badly damaged natural teeth.",
    description:
      "Rotary endodontics with magnification and effective anaesthesia to remove infection while preserving your tooth.",
    highlights: ["Single-visit option", "Rotary endodontics", "Microscope assisted", "Crown protection"],
    duration: "60–90 min",
    price: "From $220",
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    icon: "Baby",
    short: "Gentle, friendly dental care that helps children feel safe.",
    description:
      "Child-focused prevention, sealants and habit guidance delivered in a calm, reassuring environment.",
    highlights: ["Fluoride & sealants", "Behaviour-friendly care", "Parent coaching", "Growth monitoring"],
    duration: "30 min",
    price: "From $50",
  },
  {
    slug: "emergency-dental-care",
    title: "Emergency Dental Care",
    icon: "Siren",
    short: "Same-day relief for pain, swelling, trauma and broken restorations.",
    description:
      "Rapid triage and treatment for urgent dental problems, with priority appointments available every day.",
    highlights: ["Same-day slots", "Pain management", "Trauma repair", "24/7 helpline"],
    duration: "Priority",
    price: "From $80",
  },
];
