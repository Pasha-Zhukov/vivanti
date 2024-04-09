import Header from "./components/Header/Header";
import Slider from "./components/slider/Slider";
import WelcomeBlock from "./components/welcomeBlock/WelcomeBlock";
import LaboratoryBlock from "./components/laboratoryBlock/LaboratoryBlock";
import Gallery from "./components/gallery/Gallery";
import FormComponent from "./components/formComponent/FormComponent";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <WelcomeBlock />
      <LaboratoryBlock />
      <Gallery />
      <FormComponent />
      <Footer />
    </>
  );
}

export default App;
