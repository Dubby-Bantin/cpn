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

const leadership: Leadership[] = [
  {
    name: "Rosemary Nnedinma Obioha",
    title: "CEO",
    image: "/images/leadership/ceo.jpg",
    bio: "Rosemary Nnedinma Obioha has been at the helm of Center Point Network Ltd. since 2015, first as a member of the board of directors and now as the CEO, steering the company through significant milestones and growth phases. With over ten years of experience in the Information Technology sector, Nnedinma is known for her strategic vision, inspiring leadership, and dedication to fostering a culture of innovation.",
    message: `For Nnedinma Obioha, community development is not just a passion but a calling. She disclosed that empowering Nigerian youths through IT training and education is a dedication for her and a lifestyle for the nation’s growth and development. "I believe that community development is the key to unlocking the potential of our youths. By providing them with the skills and resources they need to succeed, we can help them become positive change-makers in their communities," Obioha, who leads CentrePoint Network, said. She noted that her commitment to community development has also led to the establishment of charitable grants, scholarships, and IT workshops aimed at empowering youths. Obioha, who began her tech sojourn in the United Kingdom, where she earned certifications in IT and worked in accounting and entrepreneurship, disclosed that her journey in tech was not easy, but it was driven by a passion to make a difference. "I believe that technology has the power to transform lives and communities, and I want to be at the forefront of that transformation," she said. However, it was her return to Nigeria that marked the genesis of her impact. After taking over her mother’s computer training institution, Obioha expanded its reach and impact, establishing training centers across West Africa. "I want to bridge the skills gap in West Africa by providing comprehensive IT training that meets the demands of a rapidly evolving industry. I believe that technology has the power to unlock economic opportunities and transform lives." She noted that her focus lies on initiatives that support underprivileged communities and foster social change through technology. Her commitment to empowering Nigerian communities through IT training and education continues to be a testament to the transformation of lives and communities through community development. "My goal is to empower Nigerian youth and bridge the skills gap in our community. I believe that technology has the power to transform lives and communities, and I want to be at the forefront of that transformation." "I want to use technology to make a positive impact in my community. I believe that everyone deserves access to the opportunities and resources that technology provides, regardless of their background or circumstances," Obioha explained.`,
  },
  {
    name: "Prince Willy Ibiok",
    title: "COO",
    image: "/images/leadership/coo.PNG",
    bio: "Prince Willy Ibiok is the Group  COO; a distinguished ICT expert with a deep passion for leveraging technology to drive innovation and development. With extensive experience in information and communication technology, he has established himself as a thought leader and strategist in the field. His Professional Expertise, Contributions and Achievements can be summed up for spearheaded multiple ICT initiatives to foster technological growth in both public and private sectors. Regularly collaborates with stakeholders to design and execute impactful technologydriven programs. A mentor and inspiration for young professionals aspiring to excel in ICT",
    message:
      "Prince Ibiok is dedicated to creating sustainable technological ecosystems and empowering youths in ICT training and skills development, thereby bridging the digital divide to ensure inclusive growth in the tech industry. Renowned for his proficiency in modern ICT solutions and strategies, he is a strong advocate for technological advancement and digital transformation across industries. He specializes in implementing cutting-edge technologies to improve business processes and service delivery. Spearheaded multiple ICT initiatives to foster technological growth in public and private sectors. Prince Ibiok is a graduate of Computer Science from the University of Lagos. He holds PGD in Marketing/Business Administration from the NIJ, Ogba Lagos, and PGD in Computer Science and Software Engineering from Lagos State University, Ojo. From 1996 – 1997, he worked as the Network Administrator with Honeywell Group Limited, Lagos. He also worked with Provast Limited, an SPDC Joint Venture (JV) between 1997 and 1998. He worked as a Computer/IT manager. From 1998 – 2003, he worked with Bua International Limited (Bua Group) as the Computer/IT manager. From July 2003 to July 2005, he worked with SIOtel as the Group Sales Representative, overseeing sales and marketing nationally. From 2006 to 2017, he worked with Aptech Worldwide, under franchise arrangement as Centre Manager, and implemented their branches in five (5) states in Nigeria. He also worked with Maxfront Technologies Limited as General Manager, Marketing and Strategies from 2018 to 2023, and rose to Executive Director. During this period, he was seconded to the Akwa Ibom State Tourism Board as Consultant on Hotels Management, Tourism and Hospitality. He joined CPMS Group in April 2024 as the Chief Operating Officer (COO). He is an alumnus of Lagos Business School",
  },
  {
    name: "Mercy Michael",
    title: "Regional Accountant",
    image: "/images/leadership/accountant.jpg",
    bio: "Mercy Michael is an Accounting professional with over 5 years of experience. She holds a Bachelor’s Degree in Accounting from National Open University of Nigeria. She has worked for different organizations in different sectors of the economy in Abuja. Mercy is currently the Regional Accountant at Center Point Network limited and currently at the final stage of the Institute of Chartered Accountants of Nigeria professional examination.",
  },
  {
    name: "Idoro Praise Oghenefegor",
    title: "Regional Manager",
    image: "/images/leadership/idoro.jpeg",
    bio: "Idoro is a seasoned IT professional with over 12 years of experience in computer networking and security, cloud technologies, data management, and data visualization. His expertise spans critical aspects of IT infrastructure, ensuring seamless connectivity, robust security frameworks, and efficient data operations across various environments. For more than 7 years, Idoro has excelled as an IT Manager, demonstrating exceptional leadership in guiding teams and projects to success. He is adept at strategic planning, resource allocation, and delivering innovative IT solutions that align with organizational goals. His hands-on approach to problem-solving, combined with a deep understanding of emerging technologies, has consistently driven operational excellence and enhanced system performance. Idoro's passion for technology, coupled with his commitment to staying ahead of industry trends, makes him a trusted expert in transforming IT challenges into opportunities for growth and innovation.",
  },
  {
    name: "DORATHY I. MBANEFO",
    title: "Enugu Center Manager",
    image: "/images/leadership/enugu.jpg",
    bio: "Dorathy is a highly skilled Sales IT Center Manager with over nine years of experience in driving sales growth, managing IT operations, and delivering exceptional customer experiences. Her expertise lies in blending technology with strategic sales initiatives to achieve organizational objectives and enhance operational efficiency. With a proven track record of managing high-performing teams, Dorathy excels in creating and executing sales strategies, optimizing IT systems for sales operations, and fostering strong client relationships.",
  },
  {
    name: "HARRY EBIA",
    title: "Onitsha Center Manager",
    image: "/images/leadership/onitsha.jpg",
    bio: "Harry is an accomplished IT Business Manager at the Onitsha Center, with over seven years of dedicated experience in technology education. His expertise spans the design and implementation of impactful learning programs, fostering technical proficiency, and driving innovation in IT training. Harry combines his passion for technology with a keen business acumen to ensure the smooth operation of the center. He is adept at aligning educational initiatives with organizational goals, managing resources efficiently, and building strong partnerships that enhance the center's offerings. Harry’s commitment to empowering learners with cutting-edge skills has made him a trusted figure in tech education.",
  },
  {
    name: "STANLEY DURUEKE",
    title: "Owerri Center Manager",
    image: "",
    bio: "Stanley is a dynamic Center Manager at the Owerri branch, renowned for his expertise in tech education training and business development in IT. With a solid foundation in data management and data visualization, Stanley has amassed over 8 years of hands-on experience, enabling him to deliver innovative solutions and drive organizational growth. In his role, Stanley combines his deep understanding of technology with strategic business insights to oversee the center's operations, enhance training programs, and support the professional development of learners. His proficiency in transforming complex data into actionable insights empowers organizations to make informed decisions, setting him apart as a leader in the IT industry. Stanley's commitment to excellence, coupled with his passion for education and innovation, makes him a cornerstone of success at the Owerri center. His leadership ensures that both clients and trainees achieve their goals in the fast-paced world of technology.",
  },
  {
    name: "UGWU CHUBUZOR",
    title: "Umuahia Center Manager",
    image: "",
    bio: "Chubuzor is an accomplished Center Manager at the Umuahia branch, with a strong background in tech education training and business development in IT. With more than six years of expertise in computer networking, ethical hacking, and CompTIA certifications, he has established himself as a versatile leader in the technology sector. In his role, Chubuzor combines his technical expertise with a passion for education to design and deliver impactful training programs. His in-depth knowledge of ethical hacking and network security ensures that trainees are equipped with cutting-edge skills to thrive in the rapidly evolving IT landscape. Additionally, his proficiency in CompTIA certifications adds value to learners and organizations alike, enhancing their technical capabilities and career prospects. Chubuzor’s leadership at the Umuahia center is defined by his strategic vision, commitment to excellence, and drive to foster innovation. His ability to balance technical acumen with business development skills has been instrumental in the center’s growth and success.",
  },
  {
    name: "URIEL UDO-OBIA C.",
    title: "Kubwa Center Manager",
    image: "",
    bio: "Uriel is a dedicated Center Manager at the Kubwa branch in Abuja, bringing a wealth of experience in tech education training and business development in the field of Information Technology. With over six years of professional expertise at Aptech Computer Education, Uriel has honed his skills in delivering world-class IT training programs and fostering growth in the educational sector. His proficiency lies in designing innovative learning solutions, managing IT training projects, and mentoring individuals to achieve their professional goals. Uriel’s extensive knowledge of Aptech methodologies and certifications enables him to create impactful programs that meet global industry standards, equipping learners with skills that align with the demands of the digital economy. Uriel’s leadership at the Kubwa center is driven by his commitment to excellence, his focus on empowering learners, and his strategic approach to business development. His dedication to advancing IT education has positioned the center as a hub for innovation and skill-building in the Abuja region.",
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
  partners,
  countup,
  leadership,
};
