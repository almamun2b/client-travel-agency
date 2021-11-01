import React from 'react';
import { Link } from 'react-router-dom';
import useGalary from '../../hooks/useGalary';
import Galary from '../Galary/Galary';


const FeaturesGalary = () => {
    const [galaries] = useGalary();
    const slicedGalaries = galaries.slice(0, 4);
    return (
        <div>
            <h4 className='my-4'>
                Tours Galary: <Link to='/galary'>
                    <button className='btn btn-primary'>Galary</button>
                </Link>
            </h4>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 p-3 container mx-auto'>
                {
                    slicedGalaries.map(galary => <Galary
                        key={galary.id}
                        galary={galary}
                    ></Galary>)
                }
            </div>
        </div>
    );
};

export default FeaturesGalary;