import styles from "./footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import Map from "./Map";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Footer Content Section */}
        <div className={styles.content}>
          {/* About Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>About Us</h3>
            <p className={styles.description}>
              Vision Beauty Academy is dedicated to providing professional
              beauty training with modern techniques and personalized guidance.
            </p>
            <div className={styles.socialLinks}>
              <a
                href="https://www.facebook.com/VisionSalonAndAcademy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={styles.socialIcon}
                title="Follow us on Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/vision_beauty_academy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles.socialIcon}
                title="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@visionbeautyacademy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className={styles.socialIcon}
                title="Follow us on TikTok"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Contact Info</h3>
            <div className={styles.contactItem}>
              <FaMapMarkerAlt className={styles.contactIcon} />
              <div>
                <p className={styles.contactLabel}>Address</p>
                <p className={styles.contactValue}>
                  Lagankhel, Lalitpur, Nepal
                </p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <FaPhone className={styles.contactIcon} />
              <div>
                <p className={styles.contactLabel}>Phone</p>
                <a href="tel:+9779861118272" className={styles.contactLink}>
                  +977 9861118272
                </a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <FaEnvelope className={styles.contactIcon} />
              <div>
                <p className={styles.contactLabel}>Email</p>
                <a
                  href="mailto:info@beautyacademy.com"
                  className={styles.contactLink}
                >
                  info@beautyacademy.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="/" className={styles.footerLink}>
                  Home
                </a>
              </li>
              <li>
                <a href="/courses" className={styles.footerLink}>
                  Courses
                </a>
              </li>
              <li>
                <a href="/gallery" className={styles.footerLink}>
                  Gallery
                </a>
              </li>
              <li>
                <a href="/about" className={styles.footerLink}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className={styles.footerLink}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Map Section - Interactive Map Component */}
        <div className={styles.mapSection}>
          <h3 className={styles.mapTitle}>Our Location</h3>
          <Map />
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.copyright}>
        <p>
          © 2024 Vision Beauty Academy. All rights reserved. | Designed with ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
