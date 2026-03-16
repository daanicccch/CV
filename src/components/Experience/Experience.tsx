import { experiences } from "../../data/profile";
import { useReveal } from "../../hooks/useReveal";
import styles from "./Experience.module.css";

function TimelineItem({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
  const reveal = useReveal(isMobile ? 0.02 : 0.1);

  return (
    <div
      ref={reveal.ref}
      className={styles.item}
      style={{
        opacity: reveal.visible ? 1 : 0,
        transform: reveal.visible ? "none" : "translateY(30px)",
        transition: `all ${isMobile ? "0.5s" : "0.8s"} cubic-bezier(0.16,1,0.3,1)`,
        transitionDelay: `${isMobile ? index * 0.05 : index * 0.15}s`,
      }}
    >
      <div className={styles.dot} />
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            {exp.logo && (
              <div className={styles.logoWrap}>
                <img src={exp.logo} alt={exp.company} className={styles.logo} />
              </div>
            )}
            <div>
              <h3 className={styles.role}>{exp.role}</h3>
              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.company} ${styles.companyLink}`}
                >
                  {exp.company} ↗
                </a>
              ) : (
                <span className={styles.company}>{exp.company}</span>
              )}
              {exp.description && (
                <p className={styles.description}>{exp.description}</p>
              )}
            </div>
          </div>
          <span className={styles.period}>{exp.period}</span>
        </div>

        <ul className={styles.list}>
          {exp.bullets.map((b, i) => {
            const subLogo = exp.subLogos?.find((s) =>
              b.toLowerCase().startsWith(s.name.toLowerCase())
            );
            return (
              <li key={i} className={subLogo ? styles.liWithLogo : undefined}>
                {subLogo && (
                  <img
                    src={subLogo.logo}
                    alt={subLogo.name}
                    className={styles.bulletLogo}
                  />
                )}
                <span>{b}</span>
              </li>
            );
          })}
        </ul>
        <div className={styles.tags}>
          {exp.tags.map((t) => (
            <span key={t} className={styles.tag}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
  const title = useReveal(isMobile ? 0.02 : 0.15);

  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <div ref={title.ref}>
          <h2
            className="section-title"
            style={{
              opacity: title.visible ? 1 : 0,
              transform: title.visible ? "none" : "translateY(30px)",
              transition: `all ${isMobile ? "0.5s" : "0.8s"} cubic-bezier(0.16,1,0.3,1)`,
            }}
          >
            <span className="section-number">02.</span> Experience
          </h2>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <TimelineItem key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
