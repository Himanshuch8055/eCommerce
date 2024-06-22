import React, { useState } from 'react';
import { Link } from "react-router-dom";
import TableHOC from '../components/admin/TableHOC.tsx';

const column = [
    {
        Header: "ID",
        accessor: "_id",
    },
    {
        Header: "Quantity",
        accessor: "quantity",
    },
    {
        Header: "Discount",
        accessor: "discount",
    },
    {
        Header: "Amount",
        accessor: "amount",
    },
    {
        Header: "Status",
        accessor: "status",
    },
    {
        Header: "Action",
        accessor: "action",
    },
];

const Orders = () => {

    const [rows] = useState([
        {
            _id: "afsdssdfjhaslkd",
            amount: 98723,
            quantity: 234,
            discount: 1232,
            status: <span className='red'>Processing...</span>,
            action: <Link to={`/order/sdaf`}>View</Link>,
        }
    ])

    const Table = TableHOC(
        column,
        rows,
        "dashboard-product-box",
        "Orders",
        rows.length > 6
    )();

    return (
        <div className='container'>
            <h1>My Orders</h1>
            {Table}
        </div>
    )
}

export default Orders