import "./App.css";
import FirstSection from "./components/firstSection";
import SecondSection from "./components/secondSection";
import ThirdSection from "./components/thirdSection";
import FourthSection from "./components/fourthSection";
import Header from "./components/header";
import Footer from "./components/footer";
import CookieConsent from "./components/CookieConsent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/privacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
function App() {
  return (
    <Router>
      <Header />
      {/* Main page content: This will show on the homepage */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <FirstSection />
              <SecondSection />
              <ThirdSection />
              <FourthSection />
            </>
          }
        />

        {/* Contact page route: This will show when the user navigates to /contacts */}

        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
      </Routes>
      <CookieConsent/>
      <Footer />
    </Router>
  );
}

export default App;
