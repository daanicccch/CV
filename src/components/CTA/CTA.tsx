import { profile } from "../../data/profile";
import { useReveal } from "../../hooks/useReveal";
import { useCopyToClipboard } from "../../hooks/useCopyToClipboard";
import { getEmailHref } from "../../utils/email";
import styles from "./CTA.module.css";

export function CTA() {
  const reveal = useReveal(0.15);
  const { copied, copy } = useCopyToClipboard();

  return (
    <section className={styles.section}>
      {/* glow blobs */}
      <div className={styles.glowWrap} aria-hidden="true">
        <div className={styles.glowTopLeft} />
        <div className={styles.glowBottomRight} />
      </div>

      <div className="container">
        <div className={styles.outer}>
          <div
            ref={reveal.ref}
            className={styles.reveal}
            style={{
              opacity: reveal.visible ? 1 : 0,
              transform: reveal.visible ? "translate3d(0, 0, 0)" : "translate3d(0, 24px, 0)",
              transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)",
              willChange: "opacity, transform",
            }}
          >
            <div className={styles.card}>
              {/* photo frame */}
              <div className={styles.frame}>
                <div className={styles.frameInner} />
                <div className={styles.frameImg}>
                  <img src="/profile.jpg" alt="Danila" className={styles.photo} />
                </div>
                <p className={styles.frameName}>Danila</p>
              </div>

              {/* right content */}
              <div className={styles.body}>
                <div className={styles.status}>
                  <span className={styles.dot} aria-hidden="true" />
                  <span>Online</span>
                </div>
                <div className={styles.textWrap}>
                  <h3 className={styles.heading}>
                    <span className={styles.bold}>Still not sure? </span>
                    Just write - I respond quickly.
                  </h3>
                  <div className={styles.btns}>
                    <a
                      href={`https://t.me/${profile.telegram.replace("@", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.glassBtn}
                    >
                      <span className={styles.glassBtnIcon}>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                        </svg>
                      </span>
                      <span className={styles.glassBtnLabel}>Telegram</span>
                    </a>
                    <a
                      href={getEmailHref(profile.email)}
                      className={`${styles.glassBtn} ${copied ? styles.glassBtnCopied : ""}`}
                      onClick={async (event) => {
                        event.preventDefault();
                        await copy(profile.email);
                      }}
                    >
                      <span className={styles.glassBtnIcon}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="4" width="20" height="16" rx="3" />
                          <path d="M2 7l10 7 10-7" />
                        </svg>
                      </span>
                      <span className={styles.glassBtnLabel}>{copied ? "Copied" : "Email"}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
