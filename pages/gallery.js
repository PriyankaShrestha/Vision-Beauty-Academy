import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/gallery.module.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Link from 'next/link';

export default function Gallery() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gallery | Beauty Academy</title>
        <meta name="description" content="Browse our gallery of beauty transformations and student work." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <nav className={styles.navMenu}>
        <ul>
          <li><Link href="#bridal">Bridal Makeup</Link></li>
          <li><Link href="#students">Students</Link></li>
          <li><Link href="#certificates">Certificate Distribution</Link></li>
          <li><Link href="#nailart">Nail Art</Link></li>
          <li><Link href="#henna">Henna</Link></li>
        </ul>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>Our Gallery</h1>
        <p className={styles.description}>Explore the beauty transformations and work of our talented students.</p>

        {/* Bridal Makeup Section */}
        <section id="bridal" className={styles.gallerySection}>
          <h2 className={styles.sectionTitle}>Bridal Makeup</h2>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryItem}>
              <Image src="/gallery/gallery1.jpg" alt="Bridal Makeup 1" layout="responsive" width={600} height={400} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/gallery/gallery6.jpg" alt="Bridal Makeup 3" layout="responsive" width={600} height={400} />
              <Image src="/gallery/gallery8.jpg" alt="Bridal Makeup 3" layout="responsive" width={600} height={400} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/gallery/gallery11.jpg" alt="Bridal Makeup 2" layout="responsive" width={600} height={400} />
            </div>
          </div>
        </section>

        {/* Students Section */}
        <section id="students" className={styles.gallerySection}>
          <h2 className={styles.sectionTitle}>Students</h2>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryItem}>
              <Image src="/gallery/gallery12.jpg" alt="Students 1" layout="responsive" width={600} height={400} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/gallery/gallery16.jpg" alt="Students 2" layout="responsive" width={600} height={400} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/gallery/gallery22.jpg" alt="Students 3" layout="responsive" width={600} height={400} />
            </div>
          </div>
        </section>

        {/* Certificate Distribution Section */}
        <section id="certificates" className={styles.gallerySection}>
          <h2 className={styles.sectionTitle}>Certificate Distribution</h2>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryItem}>
              <Image src="/gallery/gallery23.jpg" alt="Certificate Distribution 1" layout="responsive" width={600} height={400} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/gallery/gallery24.jpg" alt="Certificate Distribution 2" layout="responsive" width={600} height={400} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/gallery/gallery25.jpg" alt="Certificate Distribution 3" layout="responsive" width={600} height={400} />
            </div>
          </div>
        </section>

        {/* Nail Art Section */}
        <section id="nailart" className={styles.gallerySection}>
          <h2 className={styles.sectionTitle}>Nail Art</h2>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryItem}>
             {/* <Image src="/gallery/gallery2.jpg" alt="Nail Art 1" layout="responsive" width={600} height={400} /> */}
              <Image src="/gallery/gallery28.jpg" alt="Nail Art 1" layout="responsive" width={600} height={400} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/gallery/gallery26.jpg" alt="Nail Art 2" layout="responsive" width={600} height={400} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/gallery/gallery27.jpg" alt="Nail Art 3" layout="responsive" width={600} height={400} />
            </div>
          </div>
        </section>

        {/* Henna Section */}
        <section id="henna" className={styles.gallerySection}>
          <h2 className={styles.sectionTitle}>Henna</h2>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryItem}>
              <Image src="/gallery/gallery21.jpg" alt="Henna 1" layout="responsive" width={600} height={400} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/gallery/gallery29.jpg" alt="Henna 2" layout="responsive" width={600} height={400} />
            </div>
            <div className={styles.galleryItem}>
              <Image src="/gallery/gallery30.jpg" alt="Henna 3" layout="responsive" width={600} height={400} />
            </div>
          </div>
        </section>
      </main>

      <Footer /> {/* Add Footer here */}
    </div>
  );
}
