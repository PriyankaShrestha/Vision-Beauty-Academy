import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import styles from '../styles/courses.module.css';
import Link from 'next/link';
import { coursesData } from '../data/courseData';

export default function Courses() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <div className={styles.section}>
                    <h1>Our Courses</h1>
                    <div className={styles.courseList}>
                        {coursesData.map((course) => (
                            <div className={styles.courseCard} key={course.id}>
                                <h2>{course.mainType}</h2>
                                <p><strong>Price Range:</strong> {course.price}</p>
                                <p><strong>Duration:</strong> {course.duration}</p>
                                <p>{course.description}</p>
                                <Link href={`/course/${course.id}`} className="read-more-btn">
                                    Read More
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
