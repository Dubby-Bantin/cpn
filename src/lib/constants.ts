import { Home, Info, UserCog } from "lucide-react";
import { AiOutlineMobile } from "react-icons/ai";
import { BsFillPersonFill, BsFillQuestionCircleFill } from "react-icons/bs";

const navLinks = [
  { name: "Home", path: "/", Icon: Home },
  { name: "About us", path: "/about", Icon: Info },
  { name: "Services", path: "/services", Icon: UserCog },
];

const images = [
  {
    headerText: "Secure Your Digital Future",
    paragraphText:
      "Protect your assets with state-of-the-art cybersecurity solutions designed for the modern threat landscape.",
  },
  {
    headerText: "Learn Cutting-Edge Technology",
    paragraphText:
      "Stay ahead of the curve with hands-on training in modern tech tools and frameworks.",
  },
  {
    headerText: "Join a Vibrant Community",
    paragraphText:
      "Collaborate, innovate, and grow with like-minded peers in a supportive environment.",
  },
];

const aboutOptions: AboutOption[] = [
  { num: 3, text: "Years Of Experience", color: "4AC083" },
  { num: 860, numMod: "+", text: "Positive Reviews", color: "926EE2" },
  { num: 100, numMod: "K", text: "Trusted Students", color: "F49D49" },
  { num: 23, text: "Active Institution", color: "60a5fa" },
];

const faqs: FAQ[] = [
  {
    Icon: BsFillQuestionCircleFill,
    question: "Customer Experience",
    answer:
      "Lectra is a platform for scheduling lectures and managing educational resources effectively.",
  },
  {
    Icon: BsFillPersonFill,
    question: "Data Management",
    answer:
      'You can register by clicking on the "Sign Up" button on the homepage and filling out the required details.',
  },
  {
    Icon: AiOutlineMobile,
    question: "Is there a mobile app?",
    answer:
      "Currently, Lectra is a web-based application. A mobile app is in development.",
  },
  {
    Icon: AiOutlineMobile,
    question: "Is there a mobile app?",
    answer:
      "Currently, Lectra is a web-based application. A mobile app is in development.",
  },
  {
    Icon: AiOutlineMobile,
    question: "Is there a mobile app?",
    answer:
      "Currently, Lectra is a web-based application. A mobile app is in development.",
  },
  {
    Icon: AiOutlineMobile,
    question: "Is there a mobile app?",
    answer:
      "Currently, Lectra is a web-based application. A mobile app is in development.",
  },
  {
    Icon: AiOutlineMobile,
    question: "Is there a mobile app?",
    answer:
      "Currently, Lectra is a web-based application. A mobile app is in development.",
  },
  {
    Icon: AiOutlineMobile,
    question: "Is there a mobile app?",
    answer:
      "Currently, Lectra is a web-based application. A mobile app is in development.",
  },
];

const features = [
  {
    icon: "🌱",
    title: "Flexible & Understanding",
    description:
      "We are remote with collaboration spaces in NY and Miami. Employees have the autonomy to build their workday.",
  },
  {
    icon: "📈",
    title: "Growth & Development",
    description:
      "There’s a wealth of growth potential to develop your career in the long term.",
  },
  {
    icon: "🗣️",
    title: "Open & Transparent",
    description:
      "Everyone stays informed on all the latest projects, and everyone’s input is welcome.",
  },
  {
    icon: "🤝",
    title: "Helpful & Supportive",
    description: "As part of the team, you’ll never have to go it alone.",
  },
];
export { navLinks, images, aboutOptions, faqs, features };
