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
          <h2>Our Mission</h2>
          <p>
            At Beauty Academy, our mission is to empower individuals through professional beauty training. We provide top-notch education and hands-on experience to help our students excel in the beauty industry.
          </p>
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
