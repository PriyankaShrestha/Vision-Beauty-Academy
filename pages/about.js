import Head from 'next/head';
import Header from '../components/header/header'; // Import the Header component
import Footer from '../components/footer/footer'; // Import the Footer component
import styles from '../styles/about.module.css'; // Import CSS module for styling

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us | Beauty Academy</title>
        <meta name="description" content="Learn more about Beauty Academy, our mission, and our team." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>About Us</h1>
        <section className={styles.section}>
          <p>
          Welcome to Vision Beauty Academy! Foundedby Mrs. Prina Shrestha Shakya, we’re all about empowering your beauty journey. With expert instructors and tailored courses, we’re here to help you shine!
          </p>
        </section>

        <section className={styles.section}>
                <h2>Practical and Theory Learning</h2>
                <p>Our curriculum combines practical training with theory.</p>
            </section>

            <section className={styles.section}>
                <h2>Regular Festival Events & Bridal Photoshoot</h2>
                <p>Celebrate festivals with us and be part of bridal photoshoot.</p>
            </section>

            <section className={styles.section}>
                <h2>Variety of Courses</h2>
                <p>Explore diverse courses tailored to your interests.</p>
            </section>

            <section className={styles.section}>
                <h2>Experienced Instructors</h2>
                <p>Learn from skilled beauticians with years of experience.</p>
            </section>

            <section className={styles.section}>
                <h2>Certificate upon Course Completion</h2>
                <p>Get a recognized certificate upon completing your course and passing exams.</p>
            </section>

            <section className={styles.section}>
                <h2>Friendly and Hygienic Environment</h2>
                <p>We prioritize your comfort and safety. You will learn alongside friendly tutors and team.</p>
            </section>

        <section className={styles.section}>
          <h2>Our Team</h2>
          <p>
            Our team consists of industry experts with years of experience. Each member of our team is dedicated to providing the highest quality of education and support to our students.
          </p>
        </section>
        <section className={styles.section}>
          <h2>Contact Us</h2>
          <p>
            Have questions or want to learn more? Feel free to <a href="/contact">contact us</a>. We’re here to help you on your beauty journey.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
