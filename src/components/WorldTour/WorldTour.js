import React from 'react';

const WorldTour = ({ tour}) => {
    const { name, price, image, description } = tour;
    return (
        <div className="col">
            <div className="card rounded-3 p-2 shadow-lg h-100">
                <div>
                    <img className='img-fluid' src={image} alt="" />
                </div>
                <div className='mt-2 card-body'>
                    <h4 className='text-primary mt-3 card-title'>{name}</h4>
                    <p><span className='text-primary mt-3 fw-bold'></span>Cost: {price} BDT</p>
                    <p><span className='fw-bold'></span> {description}</p>
                </div>
            </div>
        </div>
    );
};

export default WorldTour;