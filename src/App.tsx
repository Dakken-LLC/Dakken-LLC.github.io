import { Route, Routes} from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
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
