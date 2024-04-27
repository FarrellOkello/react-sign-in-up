import React from "react";
import Spinner from "react-bootstrap/Spinner";

const TableSpinner = () => {
  return (
    <div className="table-spinner-div">
      <Spinner
        animation="border"
        role="status"
        variant="warning"
        style={{ width: 30, height: 30, marginRight: 10 }}
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
      <h4>Loading Data...</h4>
    </div>
  );
};

export default TableSpinner;
