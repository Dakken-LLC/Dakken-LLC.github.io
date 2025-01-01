import { Route, Routes, useLocation } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import BusinessPage from "./pages/Business";
import HomePage from "./pages/Home";
import VisionPage from "./pages/Vision";
import ContactPage from "./pages/Contact";
import MemberPage from "./pages/Member";
import { AnimatePresence } from "framer-motion";
import "./App.css";

export default function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence>
      <Header />
      <Layout>
        <Routes location = {location} key = {location.pathname}>
          <Route index element={<HomePage />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/member" element={<MemberPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
      <Footer />
      </AnimatePresence>
    </div>
  );
}
