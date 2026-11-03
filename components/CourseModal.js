import { useEffect } from "react";
import styles from "../styles/CourseModal.module.css";

export default function CourseModal({ course, onClose }) {
  // Close on Escape and stop the page behind from scrolling while open
  useEffect(() => {
    if (!course) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [course, onClose]);

  if (!course) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="course-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.closeIcon}
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        {course.image && (
          <img
            src={course.image}
            alt={course.mainType}
            className={styles.image}
          />
        )}

        <div className={styles.body}>
          <div className={styles.titleRow}>
            <h2 id="course-modal-title" className={styles.title}>
              {course.mainType}
            </h2>
            <span className={styles.badge}>{course.duration}</span>
          </div>

          <p className={styles.price}>{course.price}</p>

          <p className={styles.description}>{course.description}</p>

          {course.included && course.included.length > 0 && (
            <>
              <h3 className={styles.sectionTitle}>What's included</h3>
              <div className={styles.included}>
                {course.included.map((item, index) =>
                  typeof item === "string" ? (
                    <h4 key={index} className={styles.includedHeading}>
                      {item}
                    </h4>
                  ) : (
                    <ul key={index} className={styles.topics}>
                      {item.includes.map((sub, subIndex) => (
                        <li key={subIndex}>{sub}</li>
                      ))}
                    </ul>
                  ),
                )}
              </div>
            </>
          )}

          <button className={styles.primaryBtn} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
