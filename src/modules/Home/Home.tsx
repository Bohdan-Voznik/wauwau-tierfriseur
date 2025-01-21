import { Header } from './components/Header';
import { Advantages } from './components/Advantages';
import { Pricing } from './components/Pricing';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';

export const Home = () => {
  return (
    <>
      <Header />
      <Advantages />
      <Pricing />
      <Gallery />
      <Footer />
    </>
  );
};
