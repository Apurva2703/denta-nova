import clinic from "@/assets/clinic-interior.jpg";
import tech from "@/assets/technology.jpg";
import smile from "@/assets/smile.jpg";

export type Blog = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  content: string[];
};

export const blogs: Blog[] = [
  {
    slug: "daily-habits-for-healthy-teeth",
    title: "Five Daily Habits That Protect Your Teeth for Life",
    category: "Prevention",
    excerpt:
      "Small, consistent routines matter far more than occasional intensive care. Here are the habits our dentists recommend to every patient.",
    date: "12 July 2026",
    author: "Dr. Avinash Yele",
    image: smile,
    content: [
      "Most dental problems we treat begin quietly, long before pain appears. Consistent daily care is the single most effective way to avoid complex treatment later.",
      "Brush twice daily for two full minutes with a fluoride toothpaste, using gentle circular motions rather than pressure. A soft-bristled or electric brush protects the gum margin.",
      "Clean between the teeth once a day. Floss or interdental brushes reach the 40% of tooth surface a brush cannot, which is exactly where most cavities begin.",
      "Limit the frequency of sugary snacks rather than only the amount. Each sugar exposure creates an acid attack lasting around 20 minutes.",
      "Finally, keep your six-month check-ups. Early detection turns a filling into a five-minute appointment instead of a root canal.",
    ],
  },
  {
    slug: "what-to-expect-dental-implant",
    title: "What to Expect During a Dental Implant Treatment",
    category: "Treatments",
    excerpt:
      "A clear, step-by-step look at implant treatment, from the first 3D scan to your final crown and long-term maintenance.",
    date: "28 June 2026",
    author: "Dr. Avinash Yele",
    image: clinic,
    content: [
      "Implant treatment begins with a 3D CBCT scan that shows bone volume, nerve position and the ideal implant angle. Nothing is left to guesswork.",
      "On surgery day, the area is fully numbed and the implant is placed through a guided surgical stent. Most single implants take under an hour.",
      "Healing takes eight to twelve weeks while the implant integrates with bone. A temporary tooth keeps your appearance and function intact during this period.",
      "Once integration is confirmed, a custom crown is designed digitally and matched to the shade and shape of your natural teeth.",
      "With good hygiene and regular reviews, modern implants routinely last well over twenty years.",
    ],
  },
  {
    slug: "technology-changing-dentistry",
    title: "How Digital Technology Is Changing Modern Dentistry",
    category: "Technology",
    excerpt:
      "Digital scanning, low-dose imaging and AI-assisted diagnostics make treatment faster, more accurate and far more comfortable.",
    date: "09 June 2026",
    author: "Dr. Avinash Yele",
    image: tech,
    content: [
      "Impression trays and guesswork are being replaced by intraoral scanners that capture your teeth in high resolution within minutes.",
      "Digital radiography reduces radiation exposure significantly compared with traditional film, while giving the dentist an instantly enhanced image.",
      "AI-assisted diagnostics act as a second pair of eyes, highlighting early decay and bone changes that can be easy to overlook.",
      "For patients, the practical benefits are fewer appointments, more predictable results and treatment plans you can actually see and understand.",
    ],
  },
];
