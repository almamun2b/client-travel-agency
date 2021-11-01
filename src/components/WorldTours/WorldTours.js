import React from 'react';
import useWorldTour from '../../hooks/useWorldTour';
import WorldTour from '../WorldTour/WorldTour';

const WorldTours = () => {
    const [worldTours] = useWorldTour();
    return (
        <div>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 p-3 container mx-auto'>
                {
                    worldTours.map(tour => <WorldTour
                        key={tour.id}
                        tour={tour}
                    ></WorldTour>)
                }
            </div>
        </div>
    );
};

export default WorldTours;