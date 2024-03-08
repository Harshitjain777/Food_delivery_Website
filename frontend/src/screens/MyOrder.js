import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

export default function MyOrder() {
    const [orderData, setOrderData] = useState([]);

    const fetchMyOrder = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/myorderData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: localStorage.getItem('userEmail')
                })
            });

            const data = await response.json();
            setOrderData(data);
        } catch (error) {
            console.error("Error fetching my order:", error);
        }
    };

    useEffect(() => {
        fetchMyOrder();
    }, []);

    return (
        <div>
            <div>
                <Navbar />
            </div>
            

            <div className='container'>
                <div className='row'>
                    {Array(orderData).map((order, index) => (
                        <div key={index}>
                            {order.Order_date && (
                                <div className='m-auto mt-5'>
                                    {order.Order_date}
                                    <hr />
                                </div>
                            )}

                            {order.id && (
                                <div className='col-12 col-md-6 col-lg-3'>
                                    <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                        {/* You may need to replace `img` with the correct property */}
                                        <div className="card-body">
                                            <h5 className="card-title">{order.name}</h5>
                                            <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                <span className='m-1'>{order.qty}</span>
                                                <span className='m-1'>{order.size}</span>
                                                {/* If `data` is supposed to be the date, replace `data` with the correct property */}
                                                <span className='m-1'>{order.data}</span>
                                                <div className='d-inline ms-2 h-100 w-20 fs-5'>
                                                    ₹{order.price}/-
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

