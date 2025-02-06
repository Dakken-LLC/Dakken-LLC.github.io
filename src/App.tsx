import { Route, Routes} from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ServicePage from "./pages/Service";
import NewsPage from "./pages/News";
import { AnimatePresence } from "framer-motion";
import "./App.css";

export default function App() {

  return (
    <div className="App">
      <AnimatePresence>
        <Header />
        <Layout>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Service" element={<ServicePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
        <Footer />
      </AnimatePresence>
    </div>
  );
}
