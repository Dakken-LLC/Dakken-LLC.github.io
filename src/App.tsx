import { Route, Routes, useLocation } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import BusinessPage from "./pages/Business";
import NewsPage from "./pages/News";
import ContactPage from "./pages/Contact";
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
          <Route path="/business" element={<HomePage />} />
          <Route path="/news" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
      <Footer />
      </AnimatePresence>
    </div>
  );
}
