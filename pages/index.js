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

      <video className={styles.video} autoPlay loop muted playsInline>
        <source src="/gallery/0000-0250.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <main className={styles.main}>
      {/* Services Section */}
      <section className={styles.about}>
        <h2 className={styles.sectionTitle}>Welcome to Vision Beauty Academy & Makeup Studio</h2>
        <div className={styles.content}>
            <div className={styles.textContent}>
              <p className={styles.intro}>Welcome to <strong>Vision Beauty Academy & Makeup Studio</strong>, where beauty meets passion and expertise! I’m <strong> Prina Shrestha Shakya</strong>, and I created this space as a reflection of my lifelong dedication to enhancing beauty, building confidence, and empowering everyone to look and feel their best.</p>
              <p className={styles.paragraph}>With over <strong>10 years of experience</strong> in the beauty industry, I have developed a deep understanding of the latest trends, techniques, and technologies. My journey began with a love for makeup, which has grown into a thriving career fueled by creativity and innovation. Over the years, I’ve trained with top professionals, earned certifications in <strong>makeup, hair, and nail</strong>, and dedicated myself to becoming a trusted expert in the field.</p>
              <blockquote className={styles.highlight}>A moment I am especially proud of is being awarded <strong>3rd Best Bridal Makeup Artist</strong> at the <em>Nepal Makeup Competition 2018</em>. This recognition inspires me to keep creating timeless and stunning bridal looks.</blockquote>
              <p className={styles.closing}>I warmly invite you to visit <strong>Vision Beauty Academy & Makeup Studio</strong> and experience the artistry and care my team and I are proud to offer. Let us help you shine—because you deserve nothing less than the best!</p>
            </div>
            <div className={styles.imageContent}>
              <img src="/gallery/gallery14.jpg" 
                alt="Mrs. Prina Shrestha Shakya" 
                className={styles.profileImage}/>
          </div>
        </div>
      </section>


      <section className={styles.testimonials}>
        <h2 className={styles.sectionTitle}>What Our Students Say</h2>
        <div className={styles.testimonialContainer}>
          <div className={styles.testimonial}>
            <div className={styles.imageContent}>
              <img 
                src="/gallery/gallery1.jpg" 
                alt="Prasanna Desar"
                className={styles.testimonialImage}
              />
            </div>
            <p className={styles.reviewText}>"My learning experience at vision was exceptional. Vision gives you a very friendly environment to learn and develop skills about beauty. I highly recommend this academy to build your career in upcoming future and for good services related to beauty."</p>
            <p className={styles.author}>- Prasanna Desar</p>
          </div>

          <div className={styles.testimonial}>
            <div className={styles.imageContent}>
              <img 
                src="/gallery/gallery1.jpg" 
                alt="John, Hair Stylist"
                className={styles.testimonialImage}
              />
            </div>
            <p className={styles.reviewText}>"Fantastic learning experience! I gained so much knowledge, and the environment is welcoming."</p>
            <p className={styles.author}>- John, Hair Stylist</p>
          </div>

          <div className={styles.testimonial}>
            <div className={styles.imageContent}>
              <img 
                src="/gallery/gallery1.jpg" 
                alt="Sophia, Makeup Artist"
                className={styles.testimonialImage}
              />
            </div>
            <p className={styles.reviewText}>"The best beauty academy! Highly skilled instructors and top-notch facilities."</p>
            <p className={styles.author}>- Sophia, Makeup Artist</p>
          </div>

          <div className={styles.testimonial}>
            <div className={styles.imageContent}>
              <img 
                src="/gallery/gallery1.jpg" 
                alt="Michael, Nail Technician"
                className={styles.testimonialImage}
              />
            </div>
            <p className={styles.reviewText}>"Loved my experience at Vision Beauty Academy. Learned so much and felt so supported."</p>
            <p className={styles.author}>- Michael, Nail Technician</p>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}
