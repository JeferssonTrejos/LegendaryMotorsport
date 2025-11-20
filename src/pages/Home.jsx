import HeroSection from "../components/home/HeroSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import VehicleShowcase from "../components/home/VehicleShowcase";
import Testimonials from "../components/home/Testimonials";
import FrequentlyQuestions from "../components/home/FrequentlyQuestions";

const Home = () => {
  return (
    <div className="text-custom-white-1">
      <HeroSection></HeroSection>
      <WhyChooseUs></WhyChooseUs>
      <VehicleShowcase></VehicleShowcase>
      <Testimonials></Testimonials>
      <FrequentlyQuestions></FrequentlyQuestions>
    </div>
  );
};

export default Home;
