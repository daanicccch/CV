import { education } from "../../data/profile";
import { useReveal } from "../../hooks/useReveal";
import styles from "./Education.module.css";

export function EducationSection() {
  const title = useReveal();
  const cards = useReveal(0.1);

  return (
    <section className="section section-alt" id="education">
      <div className="container">
        <div ref={title.ref}>
          <h2
            className="section-title"
            style={{
              opacity: title.visible ? 1 : 0,
              transform: title.visible ? "none" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <span className="section-number">04.</span> Education
          </h2>
        </div>

        <div
          ref={cards.ref}
          className={styles.grid}
          style={{
            opacity: cards.visible ? 1 : 0,
            transform: cards.visible ? "none" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          {education.map((edu) => (
            <div key={edu.school} className={styles.card}>
              <div className={styles.icon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div className={styles.content}>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <span className={styles.school}>{edu.school}</span>
                <span className={styles.year}>{edu.period}</span>
                <p className={styles.desc}>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
