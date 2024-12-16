import styles from './styles/services.module.css';

const services = [
  {
    title: 'Guided Tours',
    description: 'Explore popular destinations with an expert guide.',
    icon: '/images/tour-guide.jpg'
  },
  {
    title: 'Hotel Booking',
    description: 'Book luxurious and comfortable hotels worldwide.',
    icon: '/images/tour-guide.jpg'
  },
  {
    title: 'Flight Booking',
    description: 'Find the best flight deals and discounts.',
    icon: '/images/tour-guide.jpg'
  },
  {
    title: 'Car Rentals',
    description: 'Rent a car and travel at your own pace.',
    icon: '/images/tour-guide.jpg'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className={styles.services}>
      <h2>Our Services</h2>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <img src={service.icon} alt={service.title} className={styles.icon} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;