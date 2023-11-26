import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import PublicLayout from "./layouts/publicLayout";
import { ScrollToTop } from "core/helpers/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="public/*" element={<PublicLayout />} />
        <Route path="/" element={<Navigate to="/public" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
