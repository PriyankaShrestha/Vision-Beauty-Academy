import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
              <Image
                src="/logo.png" // Path to your logo image
                alt="Beauty Academy Logo"
                width={70} // Adjust width as needed
                height={70} // Adjust height as needed
                layout="intrinsic" // Use intrinsic layout for fixed dimensions
              />
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="#courses">Courses</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><a href="https://www.facebook.com/VisionSalonAndAcademy" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF/></a></li>
            <li><a href="https://www.instagram.com/vision_beauty_academy/" target="_blank" rel="noopener noreferrer"aria-label="Instagram"><FaInstagram/></a></li>
        </ul>
        </nav>
      </div>
    </header>
  );
};

<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
export default Header;
