import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "../routes";
import Navbar from "../core/components/navbar";
import Footer from "../core/components/footer";
import Loader from "core/components/loader";

export default function PublicLayout() {
  const getRoutes = (routes: RoutesType[]): any => {
    return routes.map((prop, key) => {
      if (prop.layout === "/public") {
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
      <Suspense fallback={<Loader />}>
        <div
          className="pt-[80px]"
          style={{
            zIndex: 50,
            minHeight: "80vh",
          }}
        >
          <Routes>
            {getRoutes(routes)}
            <Route path="/" element={<Navigate to="/public/home" replace />} />
          </Routes>
        </div>
      </Suspense>
      <Footer />
    </div>
  );
}
