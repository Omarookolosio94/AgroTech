import Company from './views/public/company';
import Contact from './views/public/contact';
import Home from './views/public/home';
import Services from './views/public/services';
import Stories from './views/public/stories';

const routes = [
  {
    name: 'Home',
    layout: '/public',
    path: 'home',
    icon: '',
    component: <Home />,
  },
  {
    name: 'Services',
    layout: '/public',
    path: 'services',
    icon: '',
    component: <Services />,
  },
  {
    name: 'Company',
    layout: '/public',
    path: 'company',
    icon: '',
    component: <Company />,
  },
  {
    name: 'Stories',
    layout: '/public',
    path: 'Stories',
    icon: '',
    component: <Stories />,
  },
  {
    name: 'Contact',
    layout: '/public',
    path: 'Contact',
    icon: '',
    component: <Contact />,
  },
];
export default routes;
