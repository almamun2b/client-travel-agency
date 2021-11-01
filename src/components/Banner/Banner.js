import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://blog.flyticket.com.bd/wp-content/uploads/2020/05/image001-1024x682.jpg"
                        alt="Sundarbon"
                    />
                    <Carousel.Caption className="bg-dark">
                        <h3>Sundarbon</h3>
                        <p>Sundarbans has declared World Heritage Site by UNESCO which is the largest Mangrove Forest situated between two countries. It is the kingdom of Royal Bengal tiger and you will find various kinds of species of birds, animals & plants and I think you should visit the tranquilizing beauty of Sundarbans once in your life.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://blog.flyticket.com.bd/wp-content/uploads/2020/05/image056-1024x573.jpg"
                        alt="Cox’s Bazar"
                    />

                    <Carousel.Caption className="bg-dark">
                        <h3>Cox Bazar</h3>
                        <p>Cox’s Bazar is one of the most popular tourist spot in Bangladesh which is situated in the most southern part and the largest  (112 km) sea beach in the world. It is the best place to enjoy the scene of sunrise and sunset.  The cool fresh air and peaceful weather on the shore will surely make you relaxed. So for a serene and relaxing vacation, this place is mostly recommended to the visitors.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://blog.flyticket.com.bd/wp-content/uploads/2020/05/image052.jpg"
                        alt="St. Martin Island"
                    />

                    <Carousel.Caption className="bg-dark">
                        <h3>"St. Martin Island</h3>
                        <p>Martain island or Narikel Zinzira in Bangla is located in northeastern of the Bay of Bengal. Although this is a small island, the place is beautiful enough to invigorate the minds of nature lovers. This is the only coral paradise of Bangladesh. The natural surrounding of this island made this place a heaven for a nature lover. The wonderful sunrise and sunset have no comparison.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;