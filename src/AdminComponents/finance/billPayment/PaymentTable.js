// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableHead from "@material-ui/core/TableHead";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableFooter from "@material-ui/core/TableFooter";
// import TablePagination from "@material-ui/core/TablePagination";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import IconButton from "@material-ui/core/IconButton";
// import TablePaginationActions from "../../shared/TablePagination";
// import LocalAtmIcon from "@material-ui/icons/LocalAtm";
// import CloseIcon from "@material-ui/icons/Close";
// import moment from "moment";

// const useStyles2 = makeStyles({
//   table: {
//     width: "100%",
//   },
// });

// export default function CustomPaginationActionsTable({
//   data,
//   tableHeader,
//   handleEdit,
//   handleDelete,
//   loading,
//   noData,
//   isEdit,
// }) {
//   const classes = useStyles2();
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   const emptyRows =
//     rowsPerPage - Math.min(rowsPerPage, data?.length - page * rowsPerPage);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const isDate = (string) => {
//     const _regExp = new RegExp(
//       "^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$"
//     );
//     return _regExp.test(string) ? true : false;
//   };

//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="custom pagination table">
//         <TableHead>
//           <TableRow>
//             {tableHeader &&
//               tableHeader?.map((head) => (
//                 <TableCell key={head.id}>{head.name}</TableCell>
//               ))}
//             <TableCell>Actions</TableCell>
//           </TableRow>
//         </TableHead>
//         {loading ? (
//           <TableBody className="text-center my-5 w-100">
//             <TableRow>
//               <TableCell>
//                 <span
//                   className="spinner-grow spinner-grow-sm"
//                   role="status"
//                 ></span>
//               </TableCell>
//               <TableCell>
//                 <span
//                   className="spinner-grow spinner-grow-sm"
//                   role="status"
//                 ></span>
//               </TableCell>
//               <TableCell>
//                 <span
//                   className="spinner-grow spinner-grow-sm"
//                   role="status"
//                 ></span>
//               </TableCell>
//               <TableCell>
//                 <span
//                   className="spinner-grow spinner-grow-sm"
//                   role="status"
//                 ></span>
//               </TableCell>
//             </TableRow>
//           </TableBody>
//         ) : (
//           <TableBody>
//             {data?.length <= 0 ? (
//               <TableRow className="text-center my-5">
//                 <TableCell
//                   className="text-center text-danger"
//                   colSpan={tableHeader.length + 1}
//                 >
//                   {noData || "No Data"}
//                 </TableCell>{" "}
//               </TableRow>
//             ) : (
//               <>
//                 {(rowsPerPage > 0
//                   ? data?.slice(
//                       page * rowsPerPage,
//                       page * rowsPerPage + rowsPerPage
//                     )
//                   : data
//                 )?.map((row) => (
//                   <TableRow key={row._id}>
//                     {tableHeader &&
//                       tableHeader?.map((cell) => (
//                         <TableCell key={cell?.id} align="left">
//                           {isDate(row[cell?.id])
//                             ? moment(row[cell?.id])?.format("D MMMM YYYY")
//                             : row[cell?.id] || "-"}
//                         </TableCell>
//                       ))}
//                     <TableCell align="left">
//                       <div className="d-flex align-items-center">
//                         <IconButton onClick={() => handleEdit(row._id)}>
//                           <LocalAtmIcon></LocalAtmIcon>
//                         </IconButton>
//                         <IconButton onClick={() => handleDelete(row._id)}>
//                           <CloseIcon></CloseIcon>
//                         </IconButton>
//                       </div>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </>
//             )}

//             {emptyRows > 0 && (
//               <TableRow style={{ height: 53 * emptyRows }}>
//                 <TableCell colSpan={6} />
//               </TableRow>
//             )}
//           </TableBody>
//         )}
//         <TableFooter>
//           <TableRow>
//             {data?.length > 5 && (
//               <TablePagination
//                 rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
//                 count={data?.length}
//                 rowsPerPage={rowsPerPage}
//                 page={page}
//                 SelectProps={{
//                   inputProps: { "aria-label": "rows per page" },
//                   native: true,
//                 }}
//                 onChangePage={handleChangePage}
//                 onChangeRowsPerPage={handleChangeRowsPerPage}
//                 ActionsComponent={TablePaginationActions}
//               />
//             )}
//           </TableRow>
//         </TableFooter>
//       </Table>
//     </TableContainer>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableHead from "@material-ui/core/TableHead";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableFooter from "@material-ui/core/TableFooter";
// import TablePagination from "@material-ui/core/TablePagination";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import IconButton from "@material-ui/core/IconButton";
// import TablePaginationActions from "../../shared/TablePagination";
// import LocalAtmIcon from "@material-ui/icons/LocalAtm";
// import CloseIcon from "@material-ui/icons/Close";
// import moment from "moment";

// const useStyles = makeStyles({
//   tableContainer: {
//     maxHeight: "620px", // Adjust the max height as per your need
//   },
//   stickyHeader: {
//     position: "sticky",
//     top: 0,
//     backgroundColor: "#f1f1f1", // Adjust as needed
//     zIndex: 1000,
//   },
//   table: {
//     width: "100%",
//   },
//   tableCell: {
//     whiteSpace: "nowrap",
//     overflow: "visible",
//   },
// });

// export default function CustomPaginationActionsTable({
//   data,
//   tableHeader,
//   handleEdit,
//   handleDelete,
//   loading,
//   noData,
//   isEdit,
// }) {
//   const classes = useStyles();
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [sortedData, setSortedData] = useState([]);

//   useEffect(() => {
//     // Sort data by date in descending order (newest first)
//     const sorted = [...data].sort((a, b) =>
//       moment(b.date).diff(moment(a.date))
//     );
//     setSortedData(sorted);
//   }, [data]);

//   const emptyRows =
//     rowsPerPage - Math.min(rowsPerPage, sortedData.length - page * rowsPerPage);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const isDate = (string) => {
//     const _regExp = new RegExp(
//       "^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$"
//     );
//     return _regExp.test(string) ? true : false;
//   };

//   return (
//     <TableContainer component={Paper} className={classes.tableContainer}>
//       <Table className={classes.table} aria-label="custom pagination table">
//         <TableHead className={classes.stickyHeader}>
//           <TableRow>
//             {tableHeader &&
//               tableHeader.map((head) => (
//                 <TableCell key={head.id} className={classes.tableCell}>
//                   {head.name}
//                 </TableCell>
//               ))}
//             <TableCell className={classes.tableCell}>Actions</TableCell>
//           </TableRow>
//         </TableHead>
//         {loading ? (
//           <TableBody className="text-center my-5 w-100">
//             <TableRow>
//               <TableCell>
//                 <span
//                   className="spinner-grow spinner-grow-sm"
//                   role="status"
//                 ></span>
//               </TableCell>
//               <TableCell>
//                 <span
//                   className="spinner-grow spinner-grow-sm"
//                   role="status"
//                 ></span>
//               </TableCell>
//               <TableCell>
//                 <span
//                   className="spinner-grow spinner-grow-sm"
//                   role="status"
//                 ></span>
//               </TableCell>
//               <TableCell>
//                 <span
//                   className="spinner-grow spinner-grow-sm"
//                   role="status"
//                 ></span>
//               </TableCell>
//             </TableRow>
//           </TableBody>
//         ) : (
//           <TableBody>
//             {sortedData.length <= 0 ? (
//               <TableRow className="text-center my-5">
//                 <TableCell
//                   className="text-center text-danger"
//                   colSpan={tableHeader.length + 1}
//                 >
//                   {noData || "No Data"}
//                 </TableCell>
//               </TableRow>
//             ) : (
//               <>
//                 {(rowsPerPage > 0
//                   ? sortedData.slice(
//                     page * rowsPerPage,
//                     page * rowsPerPage + rowsPerPage
//                   )
//                   : sortedData
//                 ).map((row) => (
//                   <TableRow key={row._id}>
//                     {tableHeader &&
//                       tableHeader.map((cell) => (
//                         <TableCell
//                           key={cell.id}
//                           align="left"
//                           className={classes.tableCell}
//                         >
//                           {isDate(row[cell.id])
//                             ? moment(row[cell.id]).format("D MMMM YYYY")
//                             : row[cell.id] || "-"}
//                         </TableCell>
//                       ))}
//                     <TableCell align="left" className={classes.tableCell}>
//                       <div className="d-flex align-items-center">
//                         <IconButton onClick={() => handleEdit(row._id)}>
//                           <LocalAtmIcon />
//                         </IconButton>
//                         <IconButton onClick={() => handleDelete(row._id)}>
//                           <CloseIcon />
//                         </IconButton>
//                       </div>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </>
//             )}

//             {emptyRows > 0 && (
//               <TableRow style={{ height: 53 * emptyRows }}>
//                 <TableCell colSpan={6} />
//               </TableRow>
//             )}
//           </TableBody>
//         )}
//         <TableFooter>
//           <TableRow>
//             {data.length > 5 && (
//               <TablePagination
//                 rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
//                 count={data.length}
//                 rowsPerPage={rowsPerPage}
//                 page={page}
//                 SelectProps={{
//                   inputProps: { "aria-label": "rows per page" },
//                   native: true,
//                 }}
//                 onChangePage={handleChangePage}
//                 onChangeRowsPerPage={handleChangeRowsPerPage}
//                 ActionsComponent={TablePaginationActions}
//               />
//             )}
//           </TableRow>
//         </TableFooter>
//       </Table>
//     </TableContainer>
//   );
// }


import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import TablePaginationActions from "../../shared/TablePagination";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import CloseIcon from "@material-ui/icons/Close";
import moment from "moment";

const useStyles = makeStyles({
  tableContainer: {
    maxHeight: "620px",
  },
  stickyHeader: {
    position: "sticky",
    top: 0,
    backgroundColor: "#01a6ca", // Header background color
    color: "#fff",
    zIndex: 1000,
    fontFamily: "'Times New Roman', serif",
    fontWeight: "bold",
    textAlign: "center",
  },
  table: {
    width: "100%",
  },
  tableCell: {
    whiteSpace: "nowrap",
    overflow: "visible",
    fontFamily: "'Baskerville', serif",
    padding: "16px",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#444",
    textAlign: "center", // Center alignment for all table cells
  },
  tableHeadCell: {
    backgroundColor: "#01a6ca", // Header cell background color
    color: "#fff",
  },
  actionButton: {
    backgroundColor: "#fa6767", // Action button background color
    color: "white",
    borderRadius: "5px",
    padding: "5px 10px",
    margin: "0 5px",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#01a6ca",
    },
  },
  noDataCell: {
    textAlign: "center",
    color: "#fa6767",
    fontFamily: "'Baskerville', serif",
  },
  alternatingRow: {
    backgroundColor: "#f0f8ff", // Faded blue color for alternate rows
  },
  tableRow: {
    "&:nth-of-type(even)": {
      backgroundColor: "#fffff7", // Faded blue for even rows
    },
    "&:nth-of-type(odd)": {
      backgroundColor: "#f0f8ff", // Default row color
    },
  },
  actionIcons: {
    backgroundColor: "#fa6767", // Updated color for action icons
    color: "#fffff5",
    borderRadius: "5px",
    margin: "0 5px",
    padding: "5px",
    transition: "transform 0.3s ease, background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#fa6767",
      // transform: "rotate(360deg)",
    },
  },

  actionIcons2: {
    backgroundColor: "#2ad78f", // Updated color for action icons
    color: "#fffff5",
    borderRadius: "5px",
    margin: "0 5px",
    padding: "5px",
    transition: "transform 0.3s ease, background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#2ad78f",
      // transform: "rotate(360deg)",
    },
  },

  tableFooter: {
    marginRight: "10px",
  },

});

export default function CustomPaginationActionsTable({
  data,
  tableHeader,
  handleEdit,
  handleDelete,
  loading,
  noData,
}) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const sorted = [...data].sort((a, b) =>
      moment(b.date).diff(moment(a.date))
    );
    setSortedData(sorted);
  }, [data]);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, sortedData.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isDate = (string) => {
    const _regExp = new RegExp(
      "^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$"
    );
    return _regExp.test(string);
  };

  return (
    <TableContainer component={Paper} className={classes.tableContainer} styles={{ backgroundColor: "#fffff5" }}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead className={classes.stickyHeader}>
          <TableRow>
            {tableHeader &&
              tableHeader.map((head) => (
                <TableCell key={head.id} className={`${classes.tableCell} ${classes.tableHeadCell}`}>
                  {head.name}
                </TableCell>
              ))}
            <TableCell className={`${classes.tableCell} ${classes.tableHeadCell}`}>Actions</TableCell>
          </TableRow>
        </TableHead>
        {loading ? (
          <TableBody>
            <TableRow>
              <TableCell colSpan={tableHeader.length + 1} align="center">
                <span className="spinner-grow spinner-grow-sm" role="status"></span>
              </TableCell>
            </TableRow>
          </TableBody>
        ) : (
          <TableBody>
            {sortedData.length <= 0 ? (
              <TableRow>
                <TableCell className={classes.noDataCell} colSpan={tableHeader.length + 1}>
                  {noData || "No Data"}
                </TableCell>
              </TableRow>
            ) : (
              sortedData.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              ).map((row) => (
                <TableRow key={row._id} className={classes.tableRow}>
                  {tableHeader &&
                    tableHeader.map((cell) => (
                      <TableCell
                        key={cell.id}
                        align="center"
                        className={classes.tableCell}
                      >
                        {isDate(row[cell.id])
                          ? moment(row[cell.id]).format("D MMMM YYYY")
                          : row[cell.id] || "-"}
                      </TableCell>
                    ))}
                  <TableCell align="center" className={classes.tableCell}>
                    <div className="d-flex align-items-center justify-content-center">
                      <IconButton
                        className={classes.actionIcons2}
                        onClick={() => handleEdit(row._id)}
                      >
                        <LocalAtmIcon />
                      </IconButton>
                      <IconButton
                        className={classes.actionIcons}
                        onClick={() => handleDelete(row._id)}
                      >
                        <CloseIcon />
                      </IconButton>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        )}
        <TableFooter >
          <TableRow >
            {data.length > 5 && (
              <TablePagination

                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
                className={classes.pagination}
              />
            )}
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
