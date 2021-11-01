import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = (props) => {
    const { _id, name, img, description, price } = props.service;
    return (
        <div className="col">
            <div className="card p-2">
                <img src={img} className="img-fluid rounded" alt="" />
                <h5 className="text-center mt-2">{name}</h5>
                <p className="text-center fs-5 mt-2">{price}</p>
                <p className="p-2">{description?.slice(0, 150)}...</p>
                <div className="text-center p-2">
                    <Link to={`/singledetails/${_id}`}>
                        <button className="btn btn-success">Book A Room</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleService;