import React from 'react'
import { useSelector } from "react-redux";

function Account()  {
const { fullName, mobile, balance } = useSelector((state) => state.user);
  const { transactions }  = useSelector((state) => state.tnxs);
  return (
     <div className="container mt-4">
      <h2 className="text-primary">Account Details</h2>
      <table className="table table-bordered" style={{ width: "50%" }}>
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Full Name</td>
            <td>{fullName}</td>
          </tr>
          <tr>
            <td>Mobile</td>
            <td>{mobile}</td>
          </tr>
          <tr>
            <td>Balance</td>
            <td>{balance}</td>
          </tr>
        </tbody>
      </table>

      <h2 className="mt-4">Transactions</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Amount</th>
            <th>Type</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length === 0 ? (
            <tr>
              <td colSpan="3">No transactions yet</td>
            </tr>
          ) : (
            transactions.map((tx, i) => (
              <tr key={i}>
                <td>{tx.amount}</td>
                <td>{tx.type}</td>
                <td>{tx.date}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Account;