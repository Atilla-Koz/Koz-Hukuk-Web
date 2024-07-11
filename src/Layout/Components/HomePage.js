import Advantage from './HomePage/Advantage';
import ClientsSay from './HomePage/ClientsSay';
import Hero from './HomePage/Hero';
import OurAttorneys from './HomePage/OurAttorneys';
import OurExpertise from './HomePage/OurExpertise';

export default function HomePage() {
  return (
    <section>
      <Hero />
      <OurAttorneys />
      <Advantage />
      <OurExpertise />
      <ClientsSay />
    </section>
  );
}
