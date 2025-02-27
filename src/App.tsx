import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BackgroundLayout from "./layouts/Background";
import BasePageLayout from "./layouts/BasePage";
import HeroLayout from "./layouts/Hero";
import AboutPage from "./pages/About";
import ArticlePage from "./pages/Article";
import ArticleIndexPage from "./pages/ArticleIndex";
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
            <Route path="contact" element={<ContactPage />} />
            <Route path="article" element={<ArticleIndexPage />} />
            <Route path="article/:slug" element={<ArticlePage />} />
          </Route>
        </Routes>
      </BasePageLayout>
      <Footer />
    </>
  );
}
