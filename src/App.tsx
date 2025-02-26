import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BackgroundLayout from "./layouts/Background";
import BasePageLayout from "./layouts/BasePage";
import HeroLayout from "./layouts/Hero";
import AboutPage from "./pages/About";
import BlogPage from "./pages/Blog";
import BlogIndexPage from "./pages/BlogIndex";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";
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
          <Route element={<HeroLayout />}>
            <Route path="about" element={<AboutPage />} />
            <Route path="service" element={<ServicePage />} />
            <Route path="blog" element={<BlogIndexPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
          <Route path="blog">
            <Route path=":slug" element={<BlogPage />} />
          </Route>
        </Routes>
      </BasePageLayout>
      <Footer />
    </>
  );
}
