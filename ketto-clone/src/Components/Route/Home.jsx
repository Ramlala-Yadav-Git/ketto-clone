import { NavBar } from "../NavBar/NavBar"
import { SectionFirst } from "../SectionFirst/SectionFirst"
import { Data } from "../Trend/Data"
import { FundRaiserSteps } from "../FundRaiserSteps/FundRaiserSteps"
import { Massages } from "../Messages/Massages"
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { SuccessStoriesContainer } from "../SuccessSlider/SuccessStoriesContainer"
import { ToolContainer } from "../ToolCategories/ToolContainer";
import { FeaturedIn } from "../FeaturedIn/FeaturedIn";
import { Footer } from "../Footer/Footer"

export function Home() {


    return (
        <>
            <NavBar />
            <SectionFirst />
            <FeaturedIn />

            <FundRaiserSteps />
            <Massages />
            <ImageGallery />
            <ToolContainer />
            <SuccessStoriesContainer />
            <Footer />

        </>
    )
}