import { useState } from "react";

import styles from "./Header.module.scss";
import { NavLinks } from "./Nav/NavLinks";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string | null>(
    localStorage.getItem("activeLink") || ""
  );

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <nav className={styles.header_nav}>
          <div className={styles.header_nav_logo}>
            <Link to="/">5-sonli shifohona</Link>
          </div>
          <div className={styles.header_nav_desktop_link}>
            <NavLinks activeLink={activeLink} setActiveLink={setActiveLink} />
          </div>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className={styles.header_nav_burger_menu_button}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {menuOpen && (
          <div className={styles.header_nav_burger_menu}>
            <NavLinks activeLink={activeLink} setActiveLink={setActiveLink} />
          </div>
        )}
      </div>
    </header>
  );
}
