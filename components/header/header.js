import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo Section - Now Bigger, Bolder, Brighter */}
        <Link href="/" className={styles.logoWrapper}>
          <div className={styles.logoContainer}>
            <Image
              src="/logo.png"
              alt="Beauty Academy Logo"
              width={65}
              height={65}
              priority
              className={styles.logoImage}
            />
            <div className={styles.logoBorder}></div>
          </div>
          <span className={styles.brandName}>Beauty Academy</span>
        </Link>

        {/* Navigation */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/courses" className={styles.navLink}>
                Courses
              </Link>
            </li>
            <li>
              <Link href="/gallery" className={styles.navLink}>
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.navLink}>
                About
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className={styles.socialIcons}>
          <a
            href="https://www.facebook.com/VisionSalonAndAcademy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className={styles.socialLink}
            title="Follow us on Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/vision_beauty_academy/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={styles.socialLink}
            title="Follow us on Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@visionbeautyacademy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className={styles.socialLink}
            title="Follow us on TikTok"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
