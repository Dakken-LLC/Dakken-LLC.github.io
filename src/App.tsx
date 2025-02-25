import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BackgroundLayout from "./layouts/Background";
import BasePageLayout from "./layouts/BasePage";
import HeroLayout from "./layouts/Hero";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";
import NewsPage from "./pages/News";
import ServicePage from "./pages/Service";

export default function App() {
  return (
    <>
      <Header />
      <BasePageLayout>
        <Routes>
          <Route
            index
            element={
              <BackgroundLayout>
                <HomePage />
              </BackgroundLayout>
            }
          />
          <Route path="/" element={<HeroLayout />}>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BasePageLayout>
      <Footer />
    </>
  );
}
