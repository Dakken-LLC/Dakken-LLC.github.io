import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import dakken_llc_logo_3_w from "../assets/dakken_llc_logo_3_w.png";
import styles from "./Header.module.css";

const LinkItem = ({ title, to }: { title: string; to: string }) => {
  return (
    <li>
      <Link to={to}>{title}</Link>
    </li>
  );
};

export default function HeaderLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`${styles.header} ${isOpen ? styles.isOpen : ""} `}>
      <div className={styles.logo}>
        <Link to="/">
          <img
            src={dakken_llc_logo_3_w}
            alt="DAkken LLC."
            className="dakken_logo"
          />
        </Link>
      </div>
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
          {/* <LinkItem title="Member" to="/member" /> */}
          <LinkItem title="Contact" to="/contact" />
        </ul>
      </nav>
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isOpen ? <IoCloseOutline size={40} /> : <RiMenu2Fill size={40} />}
      </div>
    </header>
  );
}
