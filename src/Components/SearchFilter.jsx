import React, { useEffect, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import { Divider, IconButton, MenuItem } from "@mui/material";
import { Box, Typography } from "@mui/material";
import Button from "react-bootstrap/Button";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Email as EmailIcon,
} from "@mui/icons-material";
import { Container, Row, Col } from "react-bootstrap";

export default function RemoteDataExample() {
  const [file, setFile] = useState([]);
  useEffect(() => {
    fetch("./Database/LimasDocs.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (limas) {
        console.log(limas); // Check the fetched data in the console
        setFile(limas);
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
      });
  }, []);
  const columns = [
    {
      accessorKey: "uploadedDocumentFiles.id",
      enableColumnActions: false,
      header: "File ID",
    },
    {
      accessorKey: "petitioner",
      header: "Petitioner",
    },
    {
      accessorKey: "defendant",
      header: "Defendant",
    },
    {
      accessorKey: "caseCategory",
      header: "Case Category",
    },
    {
      accessorKey: "riskLevel",
      header: "Risk Level",
      renderColumnActionsMenuItems: ({
        closeMenu,
        internalColumnMenuItems,
      }) => [
        <MenuItem onClick={null} style={{ color: "blue" }} key={"yellow"}>
          <p>Yellow-Severe</p>
        </MenuItem>,
        <MenuItem style={{ color: "blue" }} key={"green"}>
          <p>Green-Moderate</p>
        </MenuItem>,
        <MenuItem style={{ color: "blue" }} key={"orange"}>
          <p>Orange- Minor</p>
        </MenuItem>,
        <Divider key="divider-1" />,
        ...internalColumnMenuItems,
      ],
      filterFn: (rows, columnKey, filterValue) => {
        if (!filterValue) return rows; // If the filter is empty, return all rows
        return rows.filter((row) => {
          const riskLevel = row[columnKey]; // Access "riskLevel" using row[columnKey]
          return riskLevel === filterValue;
        });
      },
      filterSelectOptions: [
        { text: "Yellow", value: "Yellow" },
        { text: "Green", value: "Green" },
        { text: "Orange", value: "Orange" },
        { text: "Unknown", value: "Unknown" },
      ],
      filterVariant: "select",
    },
    {
      accessorKey: "prosecutor",
      header: "Prosecutor",
    },
    {
      accessorKey: "referenceNumber",
      header: "Reference Number",
    },
    {
      accessorKey: "dateOfReceipt",
      header: "Date Of Receipt",
    },
    // {
    //   accessorKey: "sadateOfReceipt",
    //   header: "Salary",
    //   filterVariant: "range-slider",
    //   filterFn: "betweenInclusive", // default (or between)
    //   muiTableHeadCellFilterSliderProps: {
    //     marks: true,
    //     max: 200_000, //custom max (as opposed to faceted max)
    //     min: 30_000, //custom min (as opposed to faceted min)
    //     step: 10_000,

    //   },
    // },
    {
      accessorKey: "dateFrom",
      header: "Date From",
      filter: {
        type: "custom", // Use custom filter type
        fn: (rows, columnKey, filterValue) => {
          if (!filterValue) return rows; // If the filter is empty, return all rows

          // Convert the filterValue to a Date object
          const filterDate = new Date(filterValue);

          // Filter rows based on the condition (dateFrom > filterDate)
          return rows.filter((row) => {
            const dateFrom = new Date(row[columnKey]);
            return dateFrom > filterDate;
          });
        },
      },
    },
    {
      accessorKey: "dateTo",
      header: "Date To",
    },
  ];

  return (
    <Container className="text-center">
      <Row>
        <Col>
          <h2>Document Search Filter</h2>
        </Col>
      </Row>
      <Row className="mr-auto ml-auto">
        <Col>
          <Box>
            <MaterialReactTable
              columns={columns}
              // enableRowNumbers
              rowNumberMode="original" // or static- for no change -wic is the default setting
              enableGrouping
              data={file}
              initialState={{
                columnVisibility: {
                  dateOfReceipt: false,
                  referenceNumber: false,
                  dateFrom: false,
                  dateTo: false,
                  prosecutor: false,
                  claimant: false,
                }, //hide firstName column by default
              }} //show filters by default
              muiTableHeadCellFilterTextFieldProps={{
                sx: { m: "0.5rem 0", width: "100%" },
                variant: "outlined",
              }}
              muiSearchTextFieldProps={{
                placeholder: "Search file name, case reference number etc..",
                sx: { minWidth: "28rem" },
                variant: "outlined",
              }}
              renderDetailPanel={({ row }) => (
                <Box
                  sx={{
                    display: "grid",
                    margin: "auto",
                    gridTemplateColumns: "1fr 1fr",
                    width: "100%",
                  }}
                >
                  <Typography>
                    Case SubCategory :
                    <span style={{ color: "red" }}>
                      {row.original.caseSubCategory}
                    </span>{" "}
                  </Typography>
                  {row.original.uploadedDocumentFiles.length > 0 && (
                    <Typography>
                      Uploaded By :{" "}
                      <span style={{ color: "red" }}>
                        {row.original.uploadedDocumentFiles[0].uploadedBy}
                      </span>{" "}
                    </Typography>
                  )}
                </Box>
              )}
              enableStickyHeader
              enableColumnDragging
              enableColumnOrdering
              muiTableContainerProps={{
                sx: { maxHeight: "45vh" },
              }}
              muiTablePaginationProps={{
                rowsPerPageOptions: [5, 10, 25],
                showFirstButton: false,
                showLastButton: false,
              }}
              enableRowActions
              renderRowActions={({ row, table }) => (
                <Box sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}>
                  <IconButton
                    color="secondary"
                    onClick={() => {
                      table.setEditingRow(row);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      file.splice(row.index, 1); //assuming simple data table
                      setFile([...file]);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>

                  <IconButton
                    onClick={() => {
                      window.open(`mailto:${row.original.assignedTo}`);
                    }}
                  >
                    <EmailIcon />
                  </IconButton>
                  <Button>1</Button>
                </Box>
              )}
            />
          </Box>
        </Col>
      </Row>
    </Container>
  );
}
