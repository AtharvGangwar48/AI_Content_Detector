import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Developers from './pages/Developers';
import Trial from './pages/Trial';
import Suggestion from './pages/Suggestion';
import Error from './pages/Error';
import ScrollToTop from './Scroll_to_top';

function App() {
  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/developer" element={<Developers />} />
          <Route path="/trial" element={<Trial />} />
          <Route path="/suggestion" element={<Suggestion />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
