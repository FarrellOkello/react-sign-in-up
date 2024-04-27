import React from "react";

const TableTemplate = (props) => (
  <table>
    <thead>
      <tr>
        <th>Company Code</th>
        <th>Company Name</th>
        <th>Company Registration Number</th>
        <th>Email</th>
        <th>Contact Person Name</th>
        <th>Contact Number</th>
        <th>Fax</th>
        <th>Nationality</th>
        <th>Corporate status</th>
        <th>Company Type</th>
        <th>Company Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.rowData.length > 0 ? (
        props.rowData.map((d) => (
          <tr key={d.ID}>
            <td>{d.CompanyCode}</td>
            <td>{d.CompanyName}</td>
            <td>{d.CompanyRegistrationNumber}</td>
            <td>{d.Email}</td>
            <td>{d.ContactPersonName}</td>
            <td>{d.ContactNumber}</td>
            <td>{d.Fax}</td>
            <td>{d.Nationality}</td>
            <td>{d.CompanyType}</td>
            <td>
              <button
                onClick={() => props.editRow(d)}
                className="button muted-button"
              >
                {" "}
                Edit{" "}
              </button>
              <button
                onClick={() => props.deleteRow(d)}
                className="button muted-button"
              >
                Delete{" "}
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No company masters...</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default TableTemplate;
