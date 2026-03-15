import type { JSX } from "react";
import { skillCategories } from "../../data/profile";
import { useReveal } from "../../hooks/useReveal";
import styles from "./Skills.module.css";

const icons: Record<string, JSX.Element> = {
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  devops: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  practices: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
};

function SkillCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const reveal = useReveal(0.1);

  return (
    <div
      ref={reveal.ref}
      className={styles.category}
      style={{
        opacity: reveal.visible ? 1 : 0,
        transform: reveal.visible ? "none" : "translateY(30px)",
        transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      <div className={styles.categoryHeader}>
        {icons[category.icon]}
        <h3>{category.title}</h3>
      </div>
      <div className={styles.items}>
        {category.skills.map((skill) => (
          <div key={skill.name} className={styles.item}>
            <span className={styles.skillName}>{skill.name}</span>
            <div className={styles.bar}>
              <div
                className={styles.fill}
                style={{ width: reveal.visible ? `${skill.level}%` : "0%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  const title = useReveal();

  return (
    <section className="section" id="skills">
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
            <span className="section-number">03.</span> Tech Stack
          </h2>
        </div>
        <div className={styles.grid}>
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
