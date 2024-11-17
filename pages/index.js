import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import React from 'react';
import Image from 'next/image';
import EmblaCarouselComponent from '../components/embla-carousel/embla-caraosel';

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Header />

      <video className={styles.video} autoPlay loop muted>
        <source src="/gallery/0000-0250.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <main className={styles.main}>
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
      </main>
      <Footer />
    </div>
  );
}
