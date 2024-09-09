import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import EmblaCarouselComponent from '../components/embla-carousel/embla-caraosel';

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Header />
      
      <Head>
        <title>Vision Beauty Academy</title>
        <meta name="description" content="Welcome to our Beauty Academy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
            <Link href="/">
              <h3>Makeup</h3>
              <p><strong>Price Range:</strong> 30000 - 70000 </p>
              <p><strong>Duration:</strong> 1 - 5 months</p>
            </Link>
          </div>
          <div className={styles.card}>
            <Link href="/">
              <h3>Nail nad Care</h3>
              <p><strong>Price Range:</strong> 30000 - 50000 </p>
              <p><strong>Duration:</strong> 1 - 5 months</p>
            </Link>
          </div>
          <div className={styles.card}>
            <Link href="/">
              <h3>Hair Care and Updos</h3>
              <p><strong>Price Range:</strong> 30000 - 50000 </p>
              <p><strong>Duration:</strong> 1 - 5 months</p>
            </Link>
          </div>
          <div className={styles.card}>
            <Link href="/"> 
              <h3>Eyebrow and Lashes</h3>
              <p><strong>Price Range:</strong> 30000 - 50000 </p>
              <p><strong>Duration:</strong> 1 - 5 months</p>
              </Link>
          </div>
          <div className={styles.card}>
            <Link href="/">
              <h3>Manicure and Pedicure</h3>
              <p><strong>Price Range:</strong> 30000 - 50000 </p>
              <p><strong>Duration:</strong> 1 - 5 months</p>
              </Link>
          </div>
          <div className={styles.card}>
            <Link href="/">
              <h3>Facial Treatments</h3>
              <p><strong>Price Range:</strong> 30000 - 50000 </p>
              <p><strong>Duration:</strong> 1 - 5 months</p>
            </Link>
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
