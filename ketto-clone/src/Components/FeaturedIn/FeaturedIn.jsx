import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from "../FeaturedIn/FeaturedIn.module.css"


export function FeaturedIn(params) {


    return (<>
        <div className={styles.feature}>
            <Carousel className={styles.c}>
                <Carousel.Item>
                    <img
                        className="d-block w-10"
                        src="https://ketto.gumlet.io/assets/images/homepage/featuredImg/Featured_v1.png?w=auto&dpr=1.0"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-10"
                        src="https://ketto.gumlet.io/assets/images/homepage/featuredImg/Featured_v1.png?w=auto&dpr=1.0"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    {/* <img
                        className="d-block w-10"
                        src="https://ketto.gumlet.io/assets/images/homepage/featuredImg/Featured_v1.png?w=auto&dpr=1.0"
                        alt="First slide"
                    /> */}
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>


            </Carousel>
        </div>
    </>)
}