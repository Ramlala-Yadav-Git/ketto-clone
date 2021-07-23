import { NavBar } from "../NavBar/NavBar"
import { SectionFirst } from "../SectionFirst/SectionFirst"
import { Data } from "../Trend/Data"
import { FundRaiserSteps } from "../FundRaiserSteps/FundRaiserSteps"
import { Massages } from "../Messages/Massages"
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { SuccessStoriesContainer } from "../SuccessSlider/SuccessStoriesContainer"
import { ToolContainer } from "../ToolCategories/ToolContainer";
import { FeaturedIn } from "../FeaturedIn/FeaturedIn"


export function Home() {


    return (
        <>
            <NavBar />
            <SectionFirst />
            <Data />
            <FundRaiserSteps />
            <Massages />
            <ImageGallery />
            <ToolContainer />
            <SuccessStoriesContainer />
            <FeaturedIn />

        </>
    )
}