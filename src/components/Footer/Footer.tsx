import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <span className={styles.logo}>
            <span className={styles.bracket}>{"{"}</span>
            DL
            <span className={styles.bracket}>{"}"}</span>
          </span>
          <p className={styles.text}>Designed & Built by Danila Lonsky</p>
          <p className={styles.copy}>&copy; {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
