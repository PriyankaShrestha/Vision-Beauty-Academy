import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import EmblaCarouselComponent from '../components/embla-carousel/embla-caraosel';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vision Beauty Academy</title>
        <meta name="description" content="Welcome to our Beauty Academy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Header Section */}
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to Vision Beauty Academy</h1>
        <p className={styles.description}>Master the art of beauty with our expert courses</p>
      </header>

      <EmblaCarouselComponent />

      {/* Services Section */}
      <section id="courses" className={styles.services}>
        <h2 className={styles.sectionTitle}>Our Courses</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Makeup Artistry</h3>
            <p>Learn the latest techniques in makeup application and artistry.</p>
          </div>
          <div className={styles.card}>
            <h3>Skincare Specialist</h3>
            <p>Become an expert in skincare and help clients achieve radiant skin.</p>
          </div>
          <div className={styles.card}>
            <h3>Nail Technology</h3>
            <p>Master the art of nail design and care with our comprehensive courses.</p>
          </div>
          <div className={styles.card}>
            <h3>Hair Styling</h3>
            <p>Learn cutting-edge hair styling techniques from top industry professionals.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <h2 className={styles.sectionTitle}>What Our Students Say</h2>
        <div className={styles.testimonial}>
          <p>"The Beauty Academy changed my life! I now have a successful career doing what I love."</p>
          <p>- Sarah, Makeup Artist</p>
        </div>
        <div className={styles.testimonial}>
          <p>"The instructors are amazing, and the courses are thorough. Highly recommend!"</p>
          <p>- Emily, Skincare Specialist</p>
        </div>
      </section>

      <Footer /> {/* Add Footer here */}
    </div>
  );
}
