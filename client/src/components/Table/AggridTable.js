import React from "react";
import { AgGridReact } from "ag-grid-react";
import { CardBody } from "../helper/controls";
import TableSpinner from "../helper/TableSpinner";

function AgGridTable(props) {
  const {
    rowData,
    gridOptions,
    height,
    pinnedBottomRowData,
    onGridReady,
    pagination = true,
    loading,
    onCellClicked,
    onSelectionChanged,
    rowSelected,
    // toolbar,
    // PdfExport,
  } = props;

  const gridoptions = {
    ...gridOptions,
    rowSelection: "multiple",
    rowHeight: 37,
    headerHeight: 40,
    defaultColDef: {
      toolbar: true,
      resizable: true,
      sortable: true,
      filter: true,
      cellStyle: {
        display: "flex",
        alignItems: "center",
      },
    },
  };
  return (
    <CardBody>
      <div
        className="ag-theme-material"
        style={{ height: height > 0 ? height : 400 }}
      >
        {loading ? (
          <TableSpinner />
        ) : (
          <AgGridReact
            rowData={rowData}
            gridOptions={gridoptions}
            pagination={pagination}
            paginationPageSize={50}
            suppressRowClickSelection={true}
            suppressCellSelection={true}
            pinnedBottomRowData={pinnedBottomRowData}
            toolbar={true}
            // onFirstDataRendered={(params) => {
            //   const colIds = params.columnApi.getAllDisplayedColumns().map((col) => col.getColId());
            //   params.columnApi.autoSizeColumns(colIds);
            // }}
            onRowDataChanged={(params) => {
              const colIds = params.columnApi
                .getAllDisplayedColumns()
                .map((col) => col.getColId());
              params.columnApi.autoSizeColumns(colIds);
            }}
            onCellClicked={onCellClicked}
            onSelectionChanged={onSelectionChanged}
            rowSelected={rowSelected}
            getRowStyle={(params) => {
              if (params.node.rowPinned === "bottom") {
                return { background: "#ffcc33", fontWeight: "bold" };
              } else {
                if (params.node.rowIndex % 2 === 0) {
                  return { background: "#f2f2f2" };
                }
              }
            }}
            servi
            onGridReady={onGridReady}
          ></AgGridReact>
        )}
      </div>
    </CardBody>
  );
}

export default AgGridTable;
