import { lazy } from "react";

const Home = lazy(() => import("./views/public/home"));
const Services = lazy(() => import("./views/public/services"));
const Company = lazy(() => import("./views/public/company"));
const Contact = lazy(() => import("./views/public/contact"));

const routes = [
  {
    name: "Home",
    layout: "/public",
    path: "home",
    icon: "",
    component: <Home />,
  },
  {
    name: "Services",
    layout: "/public",
    path: "services",
    icon: "",
    component: <Services />,
  },
  {
    name: "Company",
    layout: "/public",
    path: "company",
    icon: "",
    component: <Company />,
  },
  {
    name: "Contact",
    layout: "/public",
    path: "Contact",
    icon: "",
    component: <Contact />,
  },
];
export default routes;
