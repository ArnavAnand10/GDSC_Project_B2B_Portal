import React from 'react';
import Navbar from '../Navbar';
import orderHistory from '../../Assets/Images/dummyAssests/dummyOrderHistory';
import styled from 'styled-components'; // Import styled from styled-components

const StyledTable = styled.table`
    margin-top: 20px; /* Adequate margin from the top */
    text-align: center; /* Center align content */

    .order-history-table-container {
        margin-top: 20px; /* Adequate margin from the Navbar */
        margin-bottom: 20px; /* Adequate margin from the table */
        display: inline-block; /* Allow centering */
    }

    .order-history-table {
        width: 80%; /* Set width of the table */
        margin: 0 auto; /* Center align the table */
    }

    .order-history-table th,
    .order-history-table td {
        padding: 10px; /* Add padding to table cells */
        text-align: center; /* Center align table cell content */
    }

    .order-history-table th {
        background-color: #f2f2f2; /* Add background color to table header */
    }

    .order-history-table td.Completed {
        color: green; /* Set color for Completed status */
    }

    .order-history-table td.Cancelled {
        color: red; /* Set color for Cancelled status */
    }
`;

export default function ImporterOrderHistory() {
    return (
        <div>
            <Navbar />
            <div className="order-history-table-container">
                <h2 className='poppins-regular'>Order History</h2>
                <StyledTable>
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
                                    color : order.status.toLowerCase() === 'completed' ? 'green' : order.status.toLowerCase() === 'cancelled' ? 'red' : 'black',
                                }}>{order.status}</td>
                                <td>{order.date}</td>
                                <td>{order.total}</td>
                                <td>{order.action}</td>
                            </tr>
                        ))}
                    </tbody>
                </StyledTable>
            </div>
        </div>
    )
}
