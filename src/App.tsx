import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import PublicLayout from './layouts/publicLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="public/*" element={<PublicLayout />} />
        <Route path="/" element={<Navigate to="/public" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
