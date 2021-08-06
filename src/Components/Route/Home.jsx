import { NavBar } from "../NavBar/NavBar"
import { SectionFirst } from "../SectionFirst/SectionFirst"
import { FundRaiserSteps } from "../FundRaiserSteps/FundRaiserSteps"
import { Massages } from "../Messages/Massages"
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { SuccessStoriesContainer } from "../SuccessSlider/SuccessStoriesContainer"
import { ToolContainer } from "../ToolCategories/ToolContainer";
import { FeaturedIn } from "../FeaturedIn/FeaturedIn";
import { Footer } from "../Footer/Footer"
import { ChatBotHelper } from "../ChatBot/ChatBot"

export function Home() {
    const st = JSON.parse(localStorage.getItem("user"))
    var user;
    if (st) {
        user = st.status;

    }
    else {
        user = false
    }
    return (
        <>
            <NavBar user={user} />
            <SectionFirst />
            <FeaturedIn />
            <FundRaiserSteps />
            <Massages />
            <ImageGallery />
            <ToolContainer />
            <SuccessStoriesContainer />
            <Footer />
            <ChatBotHelper />

        </>
    )
}