import React from 'react';
import useGalary from '../../hooks/useGalary';
import Galary from '../Galary/Galary';


const Galaries = () => {
    const [galaries] = useGalary();
    return (
        <div>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 p-3 container mx-auto'>
                {
                    galaries.map(galary => <Galary
                        key={galary.id}
                        galary={galary}
                    ></Galary>)
                }
            </div>
        </div>
    );
};

export default Galaries;