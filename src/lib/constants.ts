import { Home, Info, UserCog, Phone } from "lucide-react";
import { AiOutlineMobile } from "react-icons/ai";
import { BsFillPersonFill, BsFillQuestionCircleFill } from "react-icons/bs";

const navLinks: NavLinks[] = [
  { name: "Home", path: "/", Icon: Home },
  { name: "About us", path: "/about", Icon: Info },
  { name: "Services", path: "/services", Icon: UserCog },
  { name: "Contact Us", path: "/contact", Icon: Phone  },
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

const services: Services[] = [
  {
    num: 1,
    word: "IT Infrastructure & Security Management",
    description:
      "We specialize in managing secure and scalable IT environments, ensuring seamless operations and robust data protection. Our services include network management, server maintenance, cloud infrastructure, and advanced cybersecurity solutions to safeguard your business from evolving threats.",
  },
  {
    num: 2,
    word: "Web Solutions",
    description:
      "Our web solutions are tailored to create engaging, responsive, and user-friendly digital platforms. From e-commerce stores to corporate websites and custom web applications, we combine innovative design with robust functionality to bring your ideas to life.",
  },
  {
    num: 3,
    word: "Consultancy Services",
    description:
      "Our consultancy services provide expert guidance to help businesses optimize their strategies and processes. We collaborate closely with you to identify challenges, craft innovative solutions, and achieve sustainable growth in a competitive marketplace.",
  },
  {
    num: 4,
    word: "Search Engine Optimization",
    description:
      "We drive your online success by improving your website's visibility and search engine rankings. Our comprehensive SEO strategies include keyword optimization, content development, and technical SEO to attract the right audience and boost organic traffic.",
  },
  {
    num: 5,
    word: "Online Reputation Management",
    description:
      "Your online reputation is vital to your brand's success. We help build and protect your digital presence by managing reviews, addressing negative feedback, and crafting positive narratives to ensure your credibility and trustworthiness.",
  },
  {
    num: 6,
    word: "Corporate Trainings",
    description:
      "Our corporate training programs are designed to enhance team productivity, leadership skills, and technical expertise. Through tailored sessions, we empower your workforce to adapt, innovate, and thrive in today's fast-paced business environment.",
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

export { navLinks, images, aboutOptions, faqs, features, services, clients };
