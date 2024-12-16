import Link from 'next/link';
import styles from './styles/navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>TravelGo</div>
      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="#destinations">Destinations</Link></li>
        <li><Link href="#services">Services</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;