import { useState, useCallback } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import CourseModal from "../components/CourseModal";
import styles from "../styles/courses.module.css";
import { coursesData } from "../data/courseData";

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const closeModal = useCallback(() => setSelectedCourse(null), []);

  const filteredCourses = coursesData.filter((course) =>
    course.mainType.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.section}>
          <h1>Explore Our Courses</h1>

          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search for a course (e.g., Makeup, Hair, Nail)..."
              className={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className={styles.courseList}>
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <div className={styles.courseCard} key={course.id}>
                  <div className={styles.cardHeader}>
                    <h2>{course.mainType}</h2>
                    <span className={styles.badge}>
                      {course.duration || "TBD"}
                    </span>
                  </div>

                  <div className={styles.cardBody}>
                    <p className={styles.price}>
                      <strong>{course.price || "Price upon request"}</strong>
                    </p>
                    <p className={styles.description}>{course.description}</p>
                  </div>

                  <div className={styles.cardFooter}>
                    <button
                      type="button"
                      className={styles.readMoreBtn}
                      onClick={() => setSelectedCourse(course)}
                    >
                      View Course Details
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className={styles.noResults}>
                No courses found matching "{searchTerm}".
              </p>
            )}
          </div>
        </div>
      </main>

      <CourseModal course={selectedCourse} onClose={closeModal} />

      <Footer />
    </div>
  );
}
