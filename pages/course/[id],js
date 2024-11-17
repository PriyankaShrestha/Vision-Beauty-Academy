import { useRouter } from 'next/router';
import styles from '../../styles/course_details.module.css';
import { coursesData } from '../../data/courseData';

export async function getStaticPaths() {
    const paths = coursesData.map(course => ({
        params: { id: course.id.toString() },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const course = coursesData.find(course => course.id === parseInt(params.id));
    return {
        props: {
            course: course || null,
        },
    };
}

export default function CourseDetailsPage({ course }) {
    const router = useRouter();

    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <div className={styles.container}>
            <h1>{course.mainType} Course Details</h1>
            <p><strong>Price Range:</strong> {course.price}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p>{course.description}</p>
            <p><strong>Full Details:</strong></p>
            <ul>
                {course.included.map((item, index) => (
                    <li key={index}>
                        {typeof item === 'string' ? item : item.includes.join(', ')}
                    </li>
                ))}
            </ul>
            <button onClick={() => router.back()} className={styles.backButton}>Go Back</button>
        </div>
    );
}
