import QualitySection from './components/QualitySection/index';
import ProductsSection from './components/ProductsSection/index';
import SustainabilitySection from './components/SustainabilitySection/index';
import ContactSection from './components/ContactSection/index';
// import Pricing from './components/Pricing/index';
import Hero from './components/Hero';
import BenefitsSection from './components/BenefitsSection';
import LocationSection from './components/LocationSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <QualitySection />
      <ProductsSection />
      <BenefitsSection />
      <SustainabilitySection />
      <LocationSection />
      <ContactSection />
      {/* <Pricing /> */}
    </main>
  )
}

export const metadata = {
  title: "Gavi Shri Poha Industries | Premium Poha Manufacturer in Karnataka",
};
