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

const clients = [
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

const partners: Partners[] = [
  "https://tecterminal-delta.vercel.app/assets/nai-C_XOlwe3.png",
  "https://tecterminal-delta.vercel.app/assets/flag-uQTMIAva.png",
  "https://tecterminal-delta.vercel.app/assets/ndc-CPWoiIqu.png",
  "https://tecterminal-delta.vercel.app/assets/apin-DSoD6OeB.png",
  "https://tecterminal-delta.vercel.app/assets/palla-2neWUI_U.png",
  "https://tecterminal-delta.vercel.app/assets/unicef-C0uKJVbM.png",
  "https://tecterminal-delta.vercel.app/assets/sfh-BoDKplUl.png",
  "https://tecterminal-delta.vercel.app/assets/eedc-Dh65wk4d.png",
  "https://tecterminal-delta.vercel.app/assets/coatarm-BCv8UgNe.png",
  "https://tecterminal-delta.vercel.app/assets/Picture-3-D0MG7i2d.png",
  "https://tecterminal-delta.vercel.app/assets/Picture-4-BmLtSJsd.png",
  "https://tecterminal-delta.vercel.app/assets/Picture5-D-AnodAy.png",
  "https://tecterminal-delta.vercel.app/assets/Picture-6-zCCmL35u.png",
  "https://tecterminal-delta.vercel.app/assets/Picture-7-BqHGzfoq.png",
  "data:image/png;base64,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",
  "https://tecterminal-delta.vercel.app/assets/Picture-9-BTDRt1pK.png",
  "https://tecterminal-delta.vercel.app/assets/Picture-10-YOhKzRWs.png",
  "https://tecterminal-delta.vercel.app/assets/Picture-CTG5QV1p.png",
  "https://tecterminal-delta.vercel.app/assets/Picture-11-BnWxb0E-.png",
  "https://tecterminal-delta.vercel.app/assets/Picture-12-DuokV8RI.png",
  "https://tecterminal-delta.vercel.app/assets/Picture-13-B_8HHGA6.png",
  "https://tecterminal-delta.vercel.app/assets/Picture-14-D60ioJmY.png",
  "https://tecterminal-delta.vercel.app/assets/Picture-15-DOIReWC8.png",
  "https://tecterminal-delta.vercel.app/assets/Picture-16-D2gTKkYD.png",
  "https://tecterminal-delta.vercel.app/assets/Picture-19-C4GbOdZf.png",
];

const countup: Countup[] = [
  {
    end: 99,
    duration: 2.5,
    text: "Client Satisfaction Guaranteed",
    symbol: "%",
  },
  { end: 120, duration: 2.5, text: "Expert IT Solutions", symbol: "+" },
  { end: 100, duration: 2.5, text: "Innovative IT Services", symbol: "+" },
  { end: 100, duration: 2.5, text: "Technical Professionals", symbol: "%" },
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
  partners,
  countup,
};
