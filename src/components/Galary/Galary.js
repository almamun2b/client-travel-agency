import React from 'react';

const Galary = ({ galary }) => {
    const { name, image } = galary;
    return (
        <div className="col">
            <div className="card rounded-3 p-2 shadow-lg h-100">
                <div>
                    <img className='img-fluid' src={image} alt="" />
                </div>
                <div className='mt-2 card-body'>
                    <h4 className='text-primary mt-3 card-title'>{name}</h4>

                </div>
            </div>
        </div>
    );
};

export default Galary;