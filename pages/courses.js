import { useState } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import styles from "../styles/courses.module.css";
import Link from "next/link";
import { coursesData } from "../data/courseData";

export default function Courses() {
  // STATE: Keeps track of what the user types in the search bar
  const [searchTerm, setSearchTerm] = useState("");

  // LOGIC: Filter the courses based on the search term
  const filteredCourses = coursesData.filter((course) =>
    course.mainType.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.section}>
          <h1>Explore Our Courses</h1>

          {/* DYNAMIC SEARCH BAR */}
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
            {/* Render filtered courses instead of all courses */}
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <div className={styles.courseCard} key={course.id}>
                  <div className={styles.cardHeader}>
                    <h2>{course.mainType}</h2>
                    {/* Fallback to 'TBD' if price or duration is missing */}
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
                    <Link
                      href={`/course/${course.id}`}
                      className={styles.readMoreBtn}
                    >
                      View Course Details
                    </Link>
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
      <Footer />
    </div>
  );
}
