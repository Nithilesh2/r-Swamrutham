import Hero from "../components/Hero/Hero"
import FeaturedDishes from "../components/FeaturedDishes/FeaturedDishes"
import AboutSection from "../components/AboutSection/AboutSection"
import ReservationBanner from "../components/ReservationBanner/ReservationBanner"
import AvailableOn from "../components/AvailableOn/AvailableOn"

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDishes />
      <AboutSection />
      <AvailableOn /> 
      <ReservationBanner />
    </>
  )
}

export default Home
