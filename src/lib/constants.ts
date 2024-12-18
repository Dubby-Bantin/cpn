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

const sectors = [
  "Information Technology",
  "Social Advocacy",
  "Telecommunications",
  "Healthcare",
  "Manufacturing",
  "Legal",
  "SMEs",
  "Government",
  "Financial Services",
];
const values = [
  {
    Icon: "https://www.outsourceglobal.com/about/icons/integrity.svg",
    title: "Integrity",
    body: "With a strong moral compass, our colleagues and customers can expect complete honesty and transparency at all times.",
  },
  {
    Icon: "https://www.outsourceglobal.com/about/icons/integrity.svg",
    title: "High Standards",
    body: "Our ethos is built on a superb work ethic. We bring our best self to work every day.",
  },
  {
    Icon: "https://www.outsourceglobal.com/about/icons/tape.svg",
    title: "Measurable Impact",
    body: "We obsess over serving our customers and aim to create partnerships that expediates growth.",
  },
  {
    Icon: "https://www.outsourceglobal.com/about/icons/increase.svg",
    title: "Constant Improvement",
    body: "We value and encourage personal growth and we are aggressive towards meeting our goals.",
  },
];
export { navLinks, images, aboutOptions, faqs, features, sectors, values };
