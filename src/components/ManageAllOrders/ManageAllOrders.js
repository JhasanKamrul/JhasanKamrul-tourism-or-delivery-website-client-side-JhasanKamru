import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [allOrder, setAllOrder] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/manage-all-orders`)
            .then(res => res.json())
            .then(data => {
                setAllOrder(data);;
            })
    }, []);
    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure You want to delete');
        if (proceed) {
            const url = `http://localhost:5000/manage-all-orders/${id}`;
            fetch(url, {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(data => {
                    const remainingItem = allOrder.filter(allItem => allItem._id !== id);
                    setAllOrder(remainingItem);
                })
        }
        // .then(res => res.json())
    }
    return (
        <div className="container mt-2">
            <div className="row">
                {
                    allOrder?.map(detailsAll =>
                        <div class="card col-md-3 text-white bg-dark mb-3 me-5 ">
                            <div class="card-header">{detailsAll?.userEmail}</div>
                            <div class="card-body">
                                <h6 class="card-title">{detailsAll?.productName}</h6>
                                <small class="card-text">Order Date:{detailsAll?.date}</small>
                                <p><small className="ms-2">Adress:{detailsAll?.Adress}</small></p>
                            </div>
                            <button onClick={() => handleDelete(detailsAll._id)} className="btn btn-light mb-2">Delete</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;