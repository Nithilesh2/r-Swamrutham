import { useState } from 'react';
import styles from "./Gallery.module.css";
import galleryImages from '../../components/galleryImages';


const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeCategory === 'all' 
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'restaurant', name: 'Restaurant' },
    { id: 'catering', name: 'Catering' }
  ];

  return (
    <div className={styles.galleryContainer}>
      <section className={styles.galleryHero}>
        <div className={styles.heroContent}>
          <h1>Our Gallery</h1>
          <p>Explore our restaurant ambiance and catering services through these visual stories</p>
        </div>
      </section>

      <div className={styles.galleryWrapper}>
        <div className={styles.categoryFilters}>
          {categories.map(category => (
            <button
              key={category.id}
              className={`${styles.filterButton} ${activeCategory === category.id ? styles.active : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className={styles.imageGrid}>
          {filteredImages.map(image => (
            <div 
              key={image.id} 
              className={styles.imageCard}
              onClick={() => setSelectedImage(image)}
            >
              <div className={styles.imageWrapper}>
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className={styles.galleryImage}
                  loading="lazy"
                />
                <div className={styles.imageOverlay}>
                  <h3>{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className={styles.modalOverlay} onClick={() => setSelectedImage(null)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button 
              className={styles.closeButton}
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
            >
              &times;
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className={styles.modalImage}
            />
            <div className={styles.imageCaption}>
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.category === 'restaurant' ? 'Restaurant' : 'Catering Service'}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;