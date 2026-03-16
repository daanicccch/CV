import { useEffect, useState } from "react";
import { profile } from "../../data/profile";
import { getEmailHref } from "../../utils/email";
import styles from "./Navbar.module.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Proof of Work" },
  { href: "#contact", label: "Contact" },
];

const actions = [
  {
    label: "Email",
    href: getEmailHref(profile.email),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 6.75h18v10.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.25z" />
        <path d="m4 8 8 6 8-6" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: `https://github.com/${profile.github}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 18c-4.5 1.5-4.5-2.5-6.5-3m13 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 3.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 3.77a5.44 5.44 0 0 0-1 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9.5 17.13V21" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: `https://linkedin.com/in/${profile.linkedin}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: `https://t.me/${profile.telegram.replace("@", "")}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </svg>
    ),
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>
          <div className={styles.mobileBar}>
            <a href="#hero" className={styles.logo}>
              daanicccch.tech
            </a>

            <button
              className={`${styles.toggle} ${menuOpen ? styles.open : ""}`}
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          <div className={styles.desktopRail}>
            <a href="#hero" className={styles.logo}>
              daanicccch.tech
            </a>

            <div className={styles.links}>
              {links.map((link) => (
                <a key={link.href} href={link.href} className={styles.link}>
                  {link.label}
                </a>
              ))}
            </div>

            <div className={styles.actions}>
              {actions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  target={action.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className={styles.iconLink}
                  aria-label={action.label}
                >
                  {action.icon}
                </a>
              ))}
            </div>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cvButton}
            >
              CV
            </a>
          </div>
        </div>
      </nav>

      <div id="mobile-menu" className={`${styles.mobile} ${menuOpen ? styles.mobileOpen : ""}`}>
        <div className={styles.mobilePanel}>
          <div className={styles.mobileLinks}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.mobileLink}
                onClick={closeMenu}
              >
                <span>{link.label}</span>
                <span className={styles.mobileArrow}>+</span>
              </a>
            ))}
          </div>

          <div className={styles.mobileActions}>
            {actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target={action.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={styles.mobileIconLink}
                aria-label={action.label}
              >
                {action.icon}
              </a>
            ))}
          </div>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileResume}
            onClick={closeMenu}
          >
            Open CV
          </a>
        </div>
      </div>

      {menuOpen && <div className={styles.overlay} onClick={closeMenu} />}
    </>
  );
}
