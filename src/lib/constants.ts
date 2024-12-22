import { Home, Info, UserCog, Phone } from "lucide-react";
import { AiOutlineMobile } from "react-icons/ai";
import {
  BsFillPersonFill,
  BsFillQuestionCircleFill,
  BsGraphUp,
} from "react-icons/bs";
import { PiSpeakerHighFill } from "react-icons/pi";
import { RiPlantFill } from "react-icons/ri";
import {
  FaHandshake,
  FaShieldAlt,
  FaLaptopCode,
  FaLightbulb,
  FaBriefcase,
  FaThumbsUp,
  FaChalkboardTeacher,
} from "react-icons/fa";

const navLinks: NavLinks[] = [
  { name: "Home", path: "/", Icon: Home },
  { name: "About us", path: "/about", Icon: Info },
  { name: "Services", path: "/services", Icon: UserCog },
  { name: "Educational", path: "educational", Icon: UserCog },
  { name: "Leadership", path: "leadership", Icon: UserCog },
  { name: "Contact Us", path: "/contact", Icon: Phone },
];

const bannerImages = [
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

const features: Features[] = [
  {
    Icon: RiPlantFill,
    title: "Flexible & Understanding",
    description:
      "We are remote with collaboration spaces in NY and Miami. Employees have the autonomy to build their workday.",
  },
  {
    Icon: BsGraphUp,
    title: "Growth & Development",
    description:
      "There’s a wealth of growth potential to develop your career in the long term.",
  },
  {
    Icon: PiSpeakerHighFill,
    title: "Open & Transparent",
    description:
      "Everyone stays informed on all the latest projects, and everyone’s input is welcome.",
  },
  {
    Icon: FaHandshake,
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
const services: Services[] = [
  {
    num: 1,
    word: "IT Infrastructure & Security Management",
    description:
      "We specialize in managing secure and scalable IT environments, ensuring seamless operations and robust data protection. Our services include network management, server maintenance, cloud infrastructure, and advanced cybersecurity solutions to safeguard your business from evolving threats.",
    Icon: FaShieldAlt, // Shield icon for security
  },
  {
    num: 2,
    word: "Web Solutions",
    description:
      "Our web solutions are tailored to create engaging, responsive, and user-friendly digital platforms. From e-commerce stores to corporate websites and custom web applications, we combine innovative design with robust functionality to bring your ideas to life.",
    Icon: FaLaptopCode, // Laptop with code icon for web development
  },
  {
    num: 3,
    word: "Consultancy Services",
    description:
      "Our consultancy services provide expert guidance to help businesses optimize their strategies and processes. We collaborate closely with you to identify challenges, craft innovative solutions, and achieve sustainable growth in a competitive marketplace.",
    Icon: FaLightbulb, // Lightbulb icon for ideas and consultancy
  },
  {
    num: 4,
    word: "Job Hub",
    description:
      "A comprehensive platform designed to bridge the gap between job seekers and employers. Job Hub provides a user-friendly interface to search, apply for, and post jobs, while offering advanced features like resume building, skill matching, and career guidance.",
    Icon: FaBriefcase, // Briefcase icon for jobs
  },
  {
    num: 5,
    word: "Online Reputation Management",
    description:
      "Your online reputation is vital to your brand's success. We help build and protect your digital presence by managing reviews, addressing negative feedback, and crafting positive narratives to ensure your credibility and trustworthiness.",
    Icon: FaThumbsUp, // Thumbs up icon for reputation
  },
  {
    num: 6,
    word: "Corporate Trainings",
    description:
      "Our corporate training programs are designed to enhance team productivity, leadership skills, and technical expertise. Through tailored sessions, we empower your workforce to adapt, innovate, and thrive in today's fast-paced business environment.",
    Icon: FaChalkboardTeacher, // Teacher icon for training
  },
];

const clients: Clients[] = [
  {
    img: "https://www.outsourceglobal.com/home/whc/lssa.svg",
    text: "Leading Social Security Advocacy Provider in the United States",
  },
  {
    img: "https://www.outsourceglobal.com/home/whc/posm.svg",
    text: "Premier Online Social Media and Social Networking Service Company",
  },
  {
    img: "https://www.outsourceglobal.com/home/whc/eait.svg",
    text: "Engineering and Information Technology companies",
  },
  {
    img: "https://www.outsourceglobal.com/home/whc/pbia.svg",
    text: "Trusted IT Partner for Financial and Banking Services",
  },
  {
    img: "https://www.outsourceglobal.com/home/whc/bacr.svg",
    text: "Reliable IT Solutions for Media and Communications",
  },
  {
    img: "https://www.outsourceglobal.com/home/whc/lhp.svg",
    text: "Empowering Healthcare Through Advanced Solutions",
  },
  {
    img: "https://www.outsourceglobal.com/home/whc/adi.svg",
    text: "Driving Growth in Agribusiness with Technology",
  },
];

export {
  navLinks,
  bannerImages,
  aboutOptions,
  faqs,
  features,
  sectors,
  values,
  services,
  clients,
};
