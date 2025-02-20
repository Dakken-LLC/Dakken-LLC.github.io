import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BasePageLayout from "./layouts/BasePage";
import BackgroundLayout from "./layouts/Background";
import HeroLayout from "./layouts/Hero";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ServicePage from "./pages/Service";
import NewsPage from "./pages/News";

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
            <Route path="/service" element={<ServicePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BasePageLayout>
      <Footer />
    </>
  );
}
