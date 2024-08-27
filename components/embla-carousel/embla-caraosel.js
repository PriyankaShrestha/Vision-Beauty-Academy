import styles from './emblacarousel.module.css';
import { useEffect, useRef, useState } from 'react';
import EmblaCarousel from 'embla-carousel';

const EmblaCarouselComponent = () => {
  const emblaRef = useRef(null);
  const [embla, setEmbla] = useState(null);

  useEffect(() => {
    if (emblaRef.current) {
      const instance = EmblaCarousel(emblaRef.current);
      setEmbla(instance);

      const onSelect = () => {
        const slides = emblaRef.current.querySelectorAll(`.${styles.embla__slide}`);
        slides.forEach((slide) => slide.classList.remove(styles.isSnapped));
        const selectedIndex = instance.selectedScrollSnap();
        slides[selectedIndex].classList.add(styles.isSnapped);
      };

      instance.on('select', onSelect);
      onSelect(); // Initialize class for the initially active slide
    }
  }, [emblaRef]);

  const scrollPrev = () => embla && embla.scrollPrev();
  const scrollNext = () => embla && embla.scrollNext();

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          <div className={styles.embla__slide}>
            <img src="/gallery/gallery2.jpg" className={styles.embla__img} />
          </div>
          <div className={styles.embla__slide}>
            <img src="/gallery/gallery6.jpg" className={styles.embla__img} />
          </div>
          <div className={styles.embla__slide}>
            <img src="/gallery/gallery7.jpg"className={styles.embla__img} />
          </div>
          <div className={styles.embla__slide}>
            <img src="/gallery/gallery8.jpg" className={styles.embla__img} />
          </div>
          <div className={styles.embla__slide}>
            <img src="/gallery/gallery9.jpg" className={styles.embla__img} />
          </div>
          <div className={styles.embla__slide}>
            <img src="/gallery/gallery12.jpg" className={styles.embla__img} />
          </div>
          <div className={styles.embla__slide}>
            <img src="/gallery/gallery16.jpg"className={styles.embla__img} />
          </div>
          <div className={styles.embla__slide}>
            <img src="/gallery/gallery18.jpg" className={styles.embla__img} />
          </div>
      </div>
      <button className={styles.embla__button} onClick={() => scrollPrev()}>‹</button>
      <button className={styles.embla__button} onClick={() => scrollNext()}>›</button>
    </div>
    </div>
  );
};

export default EmblaCarouselComponent;
