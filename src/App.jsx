import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ResumeJobAnalysisPage from './pages/ResumeJobAnalysisPage';
import SectionImprovementPage from './pages/SectionImprovementPage';
import ScrollToTop from './components/ScrollToTop';
import ResumeAnalytics from './pages/ResumeAnalytics';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="resume-analysis" element={<ResumeJobAnalysisPage />} />
          <Route path="section-improvement" element={<SectionImprovementPage />} />
          <Route path="analytics" element={<ResumeAnalytics />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
