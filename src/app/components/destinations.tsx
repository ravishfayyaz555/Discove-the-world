import styles from './styles/destinations.module.css';

const destinations = [
  { name: "Paris", image: "/images/paris.jpg" },
  { name: "Bali", image: "/images/bali.jpg" },
  { name: "New York", image: "/images/newyork.jpg" },
  { name: "Tokyo", image: "/images/tokyo.jpg" },
];

const Destinations: React.FC = () => {
  return (
    <section id="destinations" className={styles.destinations}>
      <h2>Top Destinations</h2>
      <div className={styles.grid}>
        {destinations.map((place, index) => (
          <div key={index} className={styles.card}>
            <img src={place.image} alt={place.name} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3>{place.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;