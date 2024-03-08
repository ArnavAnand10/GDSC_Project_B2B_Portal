import React from 'react';
import Navbar from '../Navbar';
import orderHistory from '../../Assets/Images/dummyAssests/dummyOrderHistory';

export default function importerOrderHistory() {
    return (
        <div>
            <Navbar />
            <div>
                <h2 className='poppins-regular'>Order History</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderHistory.map(order => (
                            <tr key={order.orderId}>
                                <td>{order.orderId}</td>
                                <td style={{
                                    color : order.status.toLowerCase == 'completed' && 'green' || order.status.toLowerCase == 'canceled' && 'red' || 'black',
                                }}>{order.status}</td>
                                <td>{order.date}</td>
                                <td>{order.total}</td>
                                <td>{order.action}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

