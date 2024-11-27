
import "./App.css";
import Navbar from "./components/Navbar";
import FeatureHighlights from "./components/screens/home/FeatureHighlightsScreen";
import HeroSection from "./components/screens/home/HomeScreen";
import PricingPlans from "./components/screens/home/PricingPlans";
import SupportAndResources from "./components/screens/home/SupportAndResources";
import Testimonials from "./components/screens/home/Testimonials";

function App() {
  return (
    <>
      
      <HeroSection/>
      <FeatureHighlights/>
      <Testimonials/>
      <PricingPlans/>
      <SupportAndResources/>
      
    </>
  );
}

export default App;
