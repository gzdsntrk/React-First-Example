import path from "./constants";
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";
import About from "../../pages/About";

const route = [
  {
    path: path.HOME,
    component: Home,
  },
  {
    path: path.CONTACT,
    component: Contact,
  },
  {
    path: path.ABOUT,
    component: About,
  },
];


export default route;