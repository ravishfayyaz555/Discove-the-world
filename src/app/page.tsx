
import Navbar from './components/navbar';
import Hero from './components/hero';
import Destinations from './components/destinations';
import Services from './components/services';
import Contact from './components/contact';
import Footer from './components/footer';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;