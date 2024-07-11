import Advantage from './HomePage/Advantage';
import ClientsSay from './HomePage/ClientsSay';
import ContactOur from './HomePage/ContactOur';
import Hero from './HomePage/Hero';
import OurAttorneys from './HomePage/OurAttorneys';
import OurExpertise from './HomePage/OurExpertise';

export default function HomePage() {
  return (
    <section className="">
      <Hero />
      <OurAttorneys />
      <Advantage />
      <OurExpertise />
      <ClientsSay />
      <ContactOur />
    </section>
  );
}
