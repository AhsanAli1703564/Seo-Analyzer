import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import KeywordTool from './pages/KeywordTool';
import SEOAnalyzer from './pages/SEOAnalyzer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/keyword-tool" element={<KeywordTool />} />
          <Route path="/seo-analyzer" element={<SEOAnalyzer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
