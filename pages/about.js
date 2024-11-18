import Head from 'next/head';
import Header from '../components/header/header'; // Import the Header component
import Footer from '../components/footer/footer'; // Import the Footer component
import styles from '../styles/about.module.css'; // Import CSS module for styling
import { FaItalic } from 'react-icons/fa';

export default function About() {
  return (
    <div className={styles.container}>
      <Header />
      <img className={styles.mainimg}
        src="/gallery/gallery12.jpg">
      </img>
      <main className={styles.main}>
        <section className={styles.aboutUs}>

        
        <h2 className={styles.sectionTitle}>Welcome to Vision Beauty Academy & Makeup Studio</h2>
        <p className={styles.salonIntro}>
          Vision Beauty Academy & Makeup Studio" was founded in 2020 with the motto <i>“Transforming Vision into Beauty”</i>. Over the years, we have had the privilege of training talented individuals and helping them shape their dreams into reality. Through expert training, a passion for beauty, and a commitment to excellence, we've become a trusted hub for aspiring beauty professionals to grow and succeed.
        </p>

        <h2 className={styles.sectionTitle}>Meet Our Team</h2>
        <p className={styles.intro}>We are a dynamic and creative team of women committed to bringing you the best in beauty and skincare services. Our team is here to help you look and feel your best!</p>
        
        <div className={styles.teamContainer}>
          <div className={styles.teamMember}>
            <img 
              src="/gallery/gallery14.jpg" 
              alt="Team Member 1"
              className={styles.teamImage} 
            />
            <h3 className={styles.memberName}>Prina Shrestha Shakya</h3>
            <p className={styles.memberRole}>Founder & Lead Makeup Artist</p>
            <p className={styles.memberBio}>With over 10 years of experience in the beauty industry, Prina is dedicated to providing top-tier beauty services while mentoring aspiring makeup artists.</p>
          </div>

          <div className={styles.teamMember}>
            <img 
              src="/gallery/gallery14.jpg" 
              alt="Team Member 2"
              className={styles.teamImage} 
            />
            <h3 className={styles.memberName}>Sita Rai</h3>
            <p className={styles.memberRole}>Hair Stylist</p>
            <p className={styles.memberBio}>Sita is an expert in creating beautiful hairstyles for all occasions. Her creativity and attention to detail make her an invaluable part of our team.</p>
          </div>

          <div className={styles.teamMember}>
            <img 
              src="/gallery/gallery14.jpg" 
              alt="Team Member 3"
              className={styles.teamImage} 
            />
            <h3 className={styles.memberName}>Amit Gurung</h3>
            <p className={styles.memberRole}>Nail Technician</p>
            <p className={styles.memberBio}>Amit brings precision and creativity to every nail art design. His passion for beauty is matched only by his dedication to ensuring customer satisfaction.</p>
          </div>

          <div className={styles.teamMember}>
            <img 
              src="/gallery/gallery14.jpg" 
              alt="Team Member 4"
              className={styles.teamImage} 
            />
            <h3 className={styles.memberName}>Rita Joshi</h3>
            <p className={styles.memberRole}>Skincare Specialist</p>
            <p className={styles.memberBio}>Rita is a skincare expert, helping clients achieve flawless, glowing skin with personalized treatments and expert advice.</p>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}
