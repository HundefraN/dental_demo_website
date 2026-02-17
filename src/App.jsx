import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages
import HomePage from './pages/HomePage';
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AppointmentPage = lazy(() => import('./pages/AppointmentPage'));

// Loading Fallback Component
const PageLoader = () => (
  <div style={{
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'var(--bg-primary)',
    color: 'var(--primary)',
    fontSize: '1.5rem',
    fontWeight: '600'
  }}>
    Loading...
  </div>
);

function App() {
  return (
    <>
      <div className="noise-overlay" />
      <BrowserRouter>
        <Navbar />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/appointment" element={<AppointmentPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
