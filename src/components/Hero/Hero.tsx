import { useEffect, useState } from "react";
import { profile } from "../../data/profile";
import styles from "./Hero.module.css";

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.grid} />
      <div className="container">
        <div className={`${styles.content} ${visible ? styles.visible : ""}`}>
          <div className={styles.badge}>
            <span className={styles.dot} />
            Available for opportunities
          </div>

          <h1 className={styles.title}>
            <span className={styles.greeting}>Hi, I'm</span>
            <span className={styles.name}>{profile.name}</span>
          </h1>

          <p className={styles.subtitle}>{profile.title}</p>

          <p className={styles.description}>
            Building microservices, event-driven systems, and high-load backends with Node.js / NestJS / TypeScript.{" "}
            <span className="accent">2+ years</span> of production experience — 8+ systems shipped from 0 to launch.
          </p>

          <div className={styles.cta}>
            <a href="#contact" className={styles.btnPrimary}>
              Get in Touch
            </a>
            <a href="#experience" className={styles.btnOutline}>
              View Experience
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnOutline}
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
