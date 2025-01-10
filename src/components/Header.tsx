import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import dakken_llc_logo_3_w from "../assets/dakken_llc_logo_3_w.png";
import styles from "./Header.module.css";

const LinkItem = ({
  title,
  to,
  className,
}: {
  title: string;
  to: string;
  className?: string;
}) => {
  return (
    <li>
      <Link to={to} className={className}>
        {title}
      </Link>
    </li>
  );
};

export default function HeaderLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${isOpen ? styles.isOpen : styles.isClose} ${
        isTop ? styles.top : styles.scrolled
      }`}
    >
      <div className={styles.logo}>
        <Link to="/">
          <img
            src={dakken_llc_logo_3_w}
            alt="DAkken LLC."
            className="dakken_logo"
          />
        </Link>
      </div>
      <div>
        <nav>
          <ul
            className={
              isOpen
                ? `${styles.linkContainer} ${styles.active} `
                : styles.linkContainer
            }
          >
            <LinkItem title="Home" to="/" />
            <LinkItem title="Vision" to="/vision" />
            <LinkItem title="Business" to="/business" />
            <LinkItem title="Member" to="/member" />
            <LinkItem title="Contact" to="/contact" className="contact-link" />
          </ul>
        </nav>
      </div>
      <div
        className={`${styles.hamburger} ${isOpen ? styles.isOpen : ""}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
}
