import styles from './styles/hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.heroContent}>
        <h1>Discover the World</h1>
        <p>Plan your next adventure with us and explore new destinations</p>
        <button className={styles.exploreButton}>Explore Now</button>
      </div>
    </section>
  );
};

export default Hero;