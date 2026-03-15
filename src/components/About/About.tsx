import type { JSX } from "react";
import { profile } from "../../data/profile";
import { useReveal } from "../../hooks/useReveal";
import { SocialLinks } from "../UI/SocialLinks";
import styles from "./About.module.css";

const details = [
  { icon: "briefcase", label: "Experience", value: "2+ Years" },
  { icon: "focus", label: "Focus", value: "Backend & APIs" },
  { icon: "stack", label: "Stack", value: "Node.js / NestJS / TypeScript" },
];

const icons: Record<string, JSX.Element> = {
  location: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  focus: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  stack: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
};

export function About() {
  const title = useReveal();
  const text = useReveal(0.1);
  const cards = useReveal(0.1);

  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <div ref={title.ref}>
          <h2 className={`section-title ${styles.aboutTitle} ${title.visible ? "visible" : ""}`}
            style={{ opacity: title.visible ? 1 : 0, transform: title.visible ? "none" : "translateY(30px)", transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)" }}>
            <span className="section-number">01.</span> About Me
          </h2>
        </div>

        <div className={styles.grid}>
          <div ref={text.ref} className={styles.text}
            style={{ opacity: text.visible ? 1 : 0, transform: text.visible ? "none" : "translateY(30px)", transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)" }}>
            {profile.about.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{
                __html: p
                  .replace(/Backend engineer/g, '<span class="accent">Backend engineer</span>')
                  .replace(/2\+ years/g, '<span class="accent">2+ years</span>')
                  .replace(/Node\.js/g, '<span class="accent">Node.js</span>')
                  .replace(/NestJS/g, '<span class="accent">NestJS</span>')
                  .replace(/TypeScript/g, '<span class="accent">TypeScript</span>')
              }} />
            ))}
          </div>

          <div ref={cards.ref} className={styles.details}
            style={{ opacity: cards.visible ? 1 : 0, transform: cards.visible ? "none" : "translateY(30px)", transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)", transitionDelay: "0.15s" }}>
            {details.map((d) => (
              <div key={d.label} className={styles.card}>
                <div className={styles.cardIcon}>{icons[d.icon]}</div>
                <div>
                  <span className={styles.cardLabel}>{d.label}</span>
                  <span className={styles.cardValue}>{d.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.socials}>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
