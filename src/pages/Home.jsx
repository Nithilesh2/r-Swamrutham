import Hero from "../components/Hero/Hero";
import FeaturedDishes from "../components/FeaturedDishes/FeaturedDishes"
import AboutSection from "../components/AboutSection/AboutSection"
import Testimonials from "../components/Testimonials/Testimonials"
import ReservationBanner from "../components/ReservationBanner/ReservationBanner"

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDishes />
      <AboutSection />
      <Testimonials />
      <ReservationBanner />
    </>
  );
};

export default Home;