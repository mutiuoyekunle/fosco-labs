import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { TemplatePage } from './pages/TemplatePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { ProgrammesPage } from './pages/ProgrammesPage';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/template" element={<Layout><TemplatePage /></Layout>} />
          <Route
            path="/privacy-policy"
            element={<Layout><PrivacyPolicyPage /></Layout>}
          />
          <Route
            path="/terms-of-service"
            element={<Layout><TermsOfServicePage /></Layout>}
          />
          <Route
            path="/contact"
            element={<Layout><ContactPage /></Layout>}
          />
          <Route
            path="/about"
            element={<Layout><AboutPage /></Layout>}
          />
          <Route
            path="/programmes"
            element={<Layout><ProgrammesPage /></Layout>}
          />
        </Routes>
      </BrowserRouter>
    </ReactLenis>
  );
}

export default App;
