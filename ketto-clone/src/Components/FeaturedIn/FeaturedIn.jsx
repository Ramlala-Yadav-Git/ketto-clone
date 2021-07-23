import { Carousel } from 'react-elastic-corousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Massages } from '../Messages/Massages';
import styles from "../FeaturedIn/FeaturedIn.module.css"
import { Trend } from "../Trend/Treanding"

export function FeaturedIn(params) {


    return (<>
        <div className={styles.feature}>
            <Carousel className={styles.c}>
                <Carousel.Item>
                    <Trend
                        imgsrc={
                            "https://kettocdn.gumlet.io/media/campaign/277000/277698/image/wid5fa2de60a1557.jpeg?w=320&dpr=1.0"
                        }
                        heading={"Schooling Special needs Children with Custom Education"}
                        img={
                            "https://kettocdn.gumlet.io/media/ngo/2169000/2169187/image/607ea638e3612.jpg?w=50&dpr=1.0"}
                        paragraph={"by Nithilyam Spastic Children welfare trust"}
                        price={"₹ 32,49,786"}
                        reduce={"40,00,000"}
                        watch={"27 days left"}
                        heart={"1647"}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Trend
                        imgsrc={
                            "https://kettocdn.gumlet.io/media/campaign/277000/277698/image/wid5fa2de60a1557.jpeg?w=320&dpr=1.0"
                        }
                        heading={"Schooling Special needs Children with Custom Education"}
                        img={
                            "https://kettocdn.gumlet.io/media/ngo/2169000/2169187/image/607ea638e3612.jpg?w=50&dpr=1.0"}
                        paragraph={"by Nithilyam Spastic Children welfare trust"}
                        price={"₹ 32,49,786"}
                        reduce={"40,00,000"}
                        watch={"27 days left"}
                        heart={"1647"}
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <Trend
                        imgsrc={
                            "https://kettocdn.gumlet.io/media/campaign/277000/277698/image/wid5fa2de60a1557.jpeg?w=320&dpr=1.0"
                        }
                        heading={"Schooling Special needs Children with Custom Education"}
                        img={
                            "https://kettocdn.gumlet.io/media/ngo/2169000/2169187/image/607ea638e3612.jpg?w=50&dpr=1.0"}
                        paragraph={"by Nithilyam Spastic Children welfare trust"}
                        price={"₹ 32,49,786"}
                        reduce={"40,00,000"}
                        watch={"27 days left"}
                        heart={"1647"}
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <Trend
                        imgsrc={
                            " https://kettocdn.gumlet.io/media/campaign/378000/378891/image/wid608956d568e62.jpeg?w=320&dpr=1.0"
                        }
                        heading={
                            "This fundraiser is in an urgent need of funds Wife Fears She Will Lose The Father.... "
                        }
                        img={
                            "https://kettocdn.gumlet.io/media/individual/3987000/3987657/image/6d559edacac52c84886ce79328b9712e4c2298fb.JPG?w=50&dpr=1.0"
                        }
                        paragraph={"by Bhanu Gupta"}
                        price={"₹ 17,20,513"}
                        reduce={"22,50,000"}
                        watch={"Fundraiser Ended"}
                        heart={"325"}
                    />
                </Carousel.Item>


            </Carousel>
        </div>
    </>)
}