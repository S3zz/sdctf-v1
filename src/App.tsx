import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogPost from './pages/BlogPost';
import AboutPage from './pages/AboutPage';
import { BlogProvider } from './context/BlogContext';

function App() {
  return (
    <BlogProvider>
      <Router>
        <div className="flex flex-col min-h-screen relative">
          <div className="scanline"></div>
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/post/:id" element={<BlogPost />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </BlogProvider>
  );
}

export default App;