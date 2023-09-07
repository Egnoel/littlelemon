//SOCIAL ICONS
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

//SPECIALS FOOD
import greekSalad from "./assets/greekSalad.jpg";
import bruschetta from "./assets/bruschetta.jpg";
import lemonDessert from "./assets/lemonDessert.jpg";

// TESTIMONIALS
import andrea from "./assets/andrea.jpg";
import jane from "./assets/jane.jpg";
import john from "./assets/john.jpg";
import mark from "./assets/mark.jpg";

// LINKS FOR NAVBAR
export const links = [
  {
    id: 1,
    link: "about",
  },
  {
    id: 2,
    link: "menu",
  },
  {
    id: 3,
    link: "testimonials",
  },
  {
    id: 4,
    link: "contact",
  },
];

export const specials = [
  {
    id: 1,
    image: greekSalad,
    name: "Greek Salad",
    price: "$ 12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    id: 2,
    image: bruschetta,
    name: "Bruschetta",
    price: "$ 5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive.",
  },
  {
    id: 3,
    image: lemonDessert,
    name: "Lemon Dessert",
    price: "$ 5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

// TESTIMONIALS
export const testimonials = [
  {
    id: 1,
    image: andrea,
    name: "Andrea Smith",
  },
  {
    id: 2,
    image: jane,
    name: "Jane Marks",
  },
  {
    id: 3,
    image: john,
    name: "John Doe",
  },

  {
    id: 4,
    image: mark,
    name: "Mark James",
  },
];

// FOOTER CONTACT
export const contacts = [
  {
    id: 1,
    link: "egnoel@hotmail.com",
    title: "egnoel@hotmail.com",
  },
  {
    id: 2,
    link: "mailto:littlemon@bookings.com",
    title: "littlemon@bookings.com",
  },
];

// FOOTER SOCIAL LINKS
export const socials = [
  {
    id: 1,
    child: <FaGithub size={30} />,
    link: "https://github.com/Egnoel",
  },
  {
    id: 2,
    child: <FaLinkedin size={30} />,
    link: "https://www.linkedin.com/in/egnoel-neto/",
  },
  {
    id: 4,
    child: <FaTwitter size={30} />,
    link: "https://twitter.com/egnoelgenio",
  },
];
