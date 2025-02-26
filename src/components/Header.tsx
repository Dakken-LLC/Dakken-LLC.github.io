import { useEffect, useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router";
import dakken_llc_logo_3_w from "../assets/dakken_llc_logo_3_w.png";
import styles from "./Header.module.css";

const LinkItem = ({
  title,
  to,
  className,
  icon,
}: {
  title: string;
  to: string;
  className?: string;
  icon?: React.ReactNode;
}) => {
  return (
    <li>
      <Link to={to} className={className}>
        <span>{title}</span>
        {icon && <span className={styles.icon}>{icon}</span>}
      </Link>
    </li>
  );
};

export default function HeaderLayout() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isTop, setIsTop] = useState(!location.pathname.startsWith("/blog/"));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname.startsWith("/blog")) {
        return setIsTop(false);
      }
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

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
            <LinkItem title="会社案内" to="/about" />
            <LinkItem title="サービス" to="/service" />
            <LinkItem title="ニュース" to="/blog" />
            <LinkItem
              title="お問い合わせ"
              to="/contact"
              className={styles.contactLink}
              icon={<IoMailOutline />}
            />
          </ul>
        </nav>
      </div>
      <div
        className={`${styles.hamburger} ${isOpen ? styles.isOpen : ""}`}
        onClick={toggleMenu}
      >
        <div className={styles.hamburgerBar}></div>
        <div className={styles.hamburgerBar}></div>
        <div className={styles.hamburgerBar}></div>
      </div>
    </header>
  );
}
