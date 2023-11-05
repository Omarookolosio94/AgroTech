import { Routes, Route, Navigate } from 'react-router-dom';
import routes from '../routes';
import Navbar from '../core/components/navbar';
import Footer from '../core/components/footer';

export default function PublicLayout() {
  const getRoutes = (routes: RoutesType[]): any => {
    return routes.map((prop, key) => {
      if (prop.layout === '/public') {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <div className="relative">
      <Navbar />
      <div
        className="py-[90px]"
        style={{
          zIndex: 50,
          minHeight: '87vh',
        }}
      >
        <Routes>
          {getRoutes(routes)}
          <Route path="/" element={<Navigate to="/public/home" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
