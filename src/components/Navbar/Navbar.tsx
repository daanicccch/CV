import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>
          <a href="#hero" className={styles.logo}>
            <span className={styles.bracket}>{"{"}</span>
            DL
            <span className={styles.bracket}>{"}"}</span>
          </a>
          <div className={styles.links}>
            {links.map((l) => (
              <a key={l.href} href={l.href} className={styles.link}>
                {l.label}
              </a>
            ))}
          </div>
          <button
            className={`${styles.toggle} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`${styles.mobile} ${menuOpen ? styles.mobileOpen : ""}`}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={styles.mobileLink}
            onClick={closeMenu}
          >
            {l.label}
          </a>
        ))}
      </div>

      {menuOpen && <div className={styles.overlay} onClick={closeMenu} />}
    </>
  );
}
