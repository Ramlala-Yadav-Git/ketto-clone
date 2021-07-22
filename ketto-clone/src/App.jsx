import { Data } from "./Components/Trend/Data"
import { NavBar } from "./Components/NavBar/NavBar"
import { ImageGallery } from "./Components/ImageGallery/ImageGallery";
import { ToolContainer } from "./Components/ToolCategories/ToolContainer";
import { SectionFirst } from "./Components/SectionFirst/SectionFirst"
import { FundRaiserSteps } from "./Components/FundRaiserSteps/FundRaiserSteps"
import { Browse } from "./Components/Browse/Brows"
import { SuccessStoriesContainer } from "./Components/SuccessSlider/SuccessStoriesContainer"
function App() {
  return (
    <div>
      <NavBar />
      <SectionFirst />
      <Data />
      <FundRaiserSteps />
      <ImageGallery />
      <ToolContainer />
      <Browse />
      <SuccessStoriesContainer />
    </div>
  );
}

export default App;
