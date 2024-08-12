import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <p>© 2024 Beauty Academy. All rights reserved.</p>
          <p>
            <strong>Address:</strong> Lagankhel, Lalitpur
          </p>
          <p>
            <strong>Phone:</strong> +977 9861118272
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;