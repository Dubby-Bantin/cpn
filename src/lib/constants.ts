import { Home, Info, UserCog } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/", Icon: Home },
  { name: "About us", path: "/about", Icon: Info },
  { name: "Services", path: "/services", Icon: UserCog },
];
const images = [
  {
    src: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=6016&h=4016&dpr=1",
    headerText: "Secure Your Digital Future",
    paragraphText:
      "Protect your assets with state-of-the-art cybersecurity solutions designed for the modern threat landscape.",
  },
  {
    src: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=6016&h=4016&dpr=1",
    headerText: "Learn Cutting-Edge Technology",
    paragraphText:
      "Stay ahead of the curve with hands-on training in modern tech tools and frameworks.",
  },
  {
    src: "https://images.pexels.com/photos/1181341/pexels-photo-1181341.jpeg?auto=compress&cs=tinysrgb&w=6016&h=4016&dpr=1",
    headerText: "Join a Vibrant Community",
    paragraphText:
      "Collaborate, innovate, and grow with like-minded peers in a supportive environment.",
  },
];

export { navLinks, images };
