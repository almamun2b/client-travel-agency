import React from 'react';
import { Link } from 'react-router-dom';
import useWorldTour from '../../hooks/useWorldTour';
import WorldTour from '../WorldTour/WorldTour';

const FeaturesWorldTour = () => {
    const [worldTours] = useWorldTour();
    const slicedWorldTours = worldTours.slice(0, 6);
    return (
        <div>
            <h4 className='my-4'>
                International Tours: <Link to='/world-tours'>
                    <button className='btn btn-primary'>All toure</button>
                </Link>
            </h4>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 p-3 container mx-auto'>
                {
                    slicedWorldTours.map(tour => <WorldTour
                        key={tour.id}
                        tour={tour}
                    ></WorldTour>)
                }
            </div>
        </div>
    );
};

export default FeaturesWorldTour;