// // // import React from "react";
// // // import { makeStyles } from "@material-ui/core/styles";
// // // import Table from "@material-ui/core/Table";
// // // import TableBody from "@material-ui/core/TableBody";
// // // import TableCell from "@material-ui/core/TableCell";
// // // import TableContainer from "@material-ui/core/TableContainer";
// // // import TablePagination from "@material-ui/core/TablePagination";
// // // import TableRow from "@material-ui/core/TableRow";
// // // import Paper from "@material-ui/core/Paper";
// // // import Checkbox from "@material-ui/core/Checkbox";
// // // import Avatar from "@material-ui/core/Avatar";
// // // import IconButton from "@material-ui/core/IconButton";
// // // import VisibilityIcon from "@material-ui/icons/Visibility";
// // // import EditIcon from "@material-ui/icons/Edit";
// // // import DeleteIcon from "@material-ui/icons/Delete";
// // // import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
// // // import CancelIcon from "@material-ui/icons/Cancel";
// // // import { useHistory } from "react-router-dom";
// // // import TableHeader from "./TableHeader";
// // // import { getImgSrc, getIntial } from "../../utils";

// // // function descendingComparator(a, b, orderBy) {
// // //   if (b[orderBy] < a[orderBy]) {
// // //     return -1;
// // //   }
// // //   if (b[orderBy] > a[orderBy]) {
// // //     return 1;
// // //   }
// // //   return 0;
// // // }

// // // function getComparator(order, orderBy) {
// // //   return order === "desc"
// // //     ? (a, b) => descendingComparator(a, b, orderBy)
// // //     : (a, b) => -descendingComparator(a, b, orderBy);
// // // }

// // // function stableSort(array, comparator) {
// // //   const stabilizedThis = array.map((el, index) => [el, index]);
// // //   stabilizedThis.sort((a, b) => {
// // //     const order = comparator(a[0], b[0]);
// // //     if (order !== 0) return order;
// // //     return a[1] - b[1];
// // //   });
// // //   return stabilizedThis.map((el) => el[0]);
// // // }

// // // const useStyles = makeStyles((theme) => ({
// // //   root: {
// // //     width: "100%",
// // //     backgroundColor: "#fffff5",
// // //   },
// // //   paper: {
// // //     width: "100%",
// // //     marginBottom: theme.spacing(2),
// // //     backgroundColor: "#fffff5",
// // //   },
// // //   table: {
// // //     minWidth: 750,
// // //   },
// // //   tableContainer: {
// // //     maxHeight: "620px",
// // //   },
// // //   tableCell: {
// // //     whiteSpace: "nowrap",
// // //     overflow: "visible",
// // //     fontFamily: "'Baskerville', serif",
// // //     padding: "16px",
// // //     fontSize: "14px",
// // //     fontWeight: "bold",
// // //     color: "#444",
// // //     textAlign: "center",
// // //   },
// // //   tableHeadCell: {
// // //     backgroundColor: "#01a6ca",
// // //     color: "#fff",
// // //     fontFamily: "'Times New Roman', serif",
// // //     fontWeight: "bold",
// // //     textAlign: "center",
// // //     position: "sticky",
// // //     top: 0,
// // //     zIndex: 1000,
// // //     padding: "16px",
// // //   },
// // //   tableRow: {
// // //     "&:nth-of-type(even)": {
// // //       backgroundColor: "#fffff7",
// // //     },
// // //     "&:nth-of-type(odd)": {
// // //       backgroundColor: "#f0f8ff",
// // //     },
// // //   },
// // //   noDataCell: {
// // //     textAlign: "center",
// // //     color: "#fa6767",
// // //     fontFamily: "'Baskerville', serif",
// // //   },
// // //   stickyHeader: {
// // //     position: "sticky",
// // //     top: 0,
// // //     backgroundColor: "#01a6ca", // Header background color
// // //     color: "#fff",
// // //     zIndex: 1000,
// // //     fontFamily: "'Times New Roman', serif",
// // //     fontWeight: "bold",
// // //     textAlign: "center",
// // //   },
// // //   visuallyHidden: {
// // //     border: 0,
// // //     clip: "rect(0 0 0 0)",
// // //     height: 1,
// // //     margin: -1,
// // //     overflow: "hidden",
// // //     padding: 0,
// // //     position: "absolute",
// // //     top: 20,
// // //     width: 1,
// // //   },

// // //   // iconButton: {
// // //   //   margin: theme.spacing(0.0),
// // //   // },
// // //   icon: {
// // //     color: "#555", // Default icon color
// // //   },
// // //   iconView: {
// // //     color: "#4caf50",
// // //   },
// // //   iconEdit: {
// // //     color: "#ff9800",
// // //   },
// // //   iconWithdraw: {
// // //     color: "#3f51b5",
// // //   },
// // //   iconUnWithdraw: {
// // //     color: "#f44336",
// // //   },
// // //   iconDelete: {
// // //     color: "#f44336",
// // //   },
// // // }));

// // // export default function EnhancedTable({
// // //   students,
// // //   headCells,
// // //   route,
// // //   handleWithdraw,
// // //   handleDelete,
// // //   noData,
// // //   noActions,
// // // }) {
// // //   const classes = useStyles();
// // //   const [order, setOrder] = React.useState("asc");
// // //   const [orderBy, setOrderBy] = React.useState("name");
// // //   const [selected, setSelected] = React.useState([]);
// // //   const [page, setPage] = React.useState(0);
// // //   const [rowsPerPage, setRowsPerPage] = React.useState(5);
// // //   const history = useHistory();

// // //   const handleRequestSort = (event, property) => {
// // //     const isAsc = orderBy === property && order === "asc";
// // //     setOrder(isAsc ? "desc" : "asc");
// // //     setOrderBy(property);
// // //   };

// // //   const handleSelectAllClick = (event) => {
// // //     if (event.target.checked) {
// // //       const newSelecteds = students.map((n) => n.name);
// // //       setSelected(newSelecteds);
// // //       return;
// // //     }
// // //     setSelected([]);
// // //   };

// // //   const handleClick = (event, name) => {
// // //     const selectedIndex = selected.indexOf(name);
// // //     let newSelected = [];

// // //     if (selectedIndex === -1) {
// // //       newSelected = newSelected.concat(selected, name);
// // //     } else if (selectedIndex === 0) {
// // //       newSelected = newSelected.concat(selected.slice(1));
// // //     } else if (selectedIndex === selected.length - 1) {
// // //       newSelected = newSelected.concat(selected.slice(0, -1));
// // //     } else if (selectedIndex > 0) {
// // //       newSelected = newSelected.concat(
// // //         selected.slice(0, selectedIndex),
// // //         selected.slice(selectedIndex + 1)
// // //       );
// // //     }

// // //     setSelected(newSelected);
// // //   };

// // //   const handleChangePage = (event, newPage) => {
// // //     setPage(newPage);
// // //   };

// // //   const handleChangeRowsPerPage = (event) => {
// // //     setRowsPerPage(parseInt(event.target.value, 10));
// // //     setPage(0);
// // //   };

// // //   const isSelected = (userID) => selected.indexOf(userID) !== -1;

// // //   const emptyRows =
// // //     rowsPerPage - Math.min(rowsPerPage, students?.length - page * rowsPerPage);

// // //   return (
// // //     <div className={classes.root}>
// // //       <Paper className={classes.paper}>
// // //         <TableContainer className={classes.tableContainer}>
// // //           <Table
// // //             className={classes.table}
// // //             aria-labelledby="tableTitle"
// // //             size="medium"
// // //             aria-label="enhanced table"
// // //           >
// // //             <TableHeader
// // //               className={classes.stickyHeader}
// // //               classes={classes}
// // //               headCells={headCells}
// // //               numSelected={selected.length}
// // //               order={order}
// // //               orderBy={orderBy}
// // //               noActions={noActions}
// // //               onSelectAllClick={handleSelectAllClick}
// // //               onRequestSort={handleRequestSort}
// // //               rowCount={students?.length}
// // //             />
// // //             {students?.length > 0 ? (
// // //               <TableBody>
// // //                 {stableSort(students, getComparator(order, orderBy))
// // //                   ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
// // //                   ?.map((row, index) => {
// // //                     const isItemSelected = isSelected(row?.userID);
// // //                     const labelId = `enhanced-table-checkbox-${index}`;
// // //                     return (
// // //                       <TableRow
// // //                         hover
// // //                         role="checkbox"
// // //                         aria-checked={isItemSelected}
// // //                         tabIndex={-1}
// // //                         key={row.userID}
// // //                         selected={isItemSelected}
// // //                         className={classes.tableRow}
// // //                       >
// // //                         <TableCell padding="checkbox">
// // //                           <Checkbox
// // //                             onClick={(event) => handleClick(event, row?.userID)}
// // //                             checked={isItemSelected}
// // //                             inputProps={{ "aria-labelledby": labelId }}
// // //                           />
// // //                         </TableCell>
// // //                         <TableCell align="center" id={labelId} className={classes.tableCell}>
// // //                           {row?.userID || "-"}
// // //                         </TableCell>
// // //                         <TableCell align="center" className={classes.tableCell}>
// // //                           <Avatar
// // //                             src={`${getImgSrc(row?.profileUrl)}`}
// // //                             alt={getIntial(row?.name)}
// // //                           />
// // //                         </TableCell>


// // //                         <TableCell align="center" className={classes.tableCell}>{row?.name} {row?.surname || ""}</TableCell>
// // //                         <TableCell align="center" className={classes.tableCell}>
// // //                           {row?.guadian?.length > 0 ? (
// // //                             row.guadian.map((g, index) => (
// // //                               <div key={index}>
// // //                                 {/* {g.name.toUpperCase()} {g.lastname.toUpperCase()}({g.relationship}) */}
// // //                                 {g.name} ({g.relationship})
// // //                               </div>
// // //                             ))
// // //                           ) : (
// // //                             "No Parents"
// // //                           )}
// // //                         </TableCell>

// // //                         <TableCell align="center" className={classes.tableCell}>
// // //                           {row?.status || row?.position}
// // //                         </TableCell>
// // //                         <TableCell align="center" className={classes.tableCell}>
// // //                           {row?.classID || "-"}
// // //                         </TableCell>

// // //                         <TableCell align="center" className={classes.tableCell}>{row?.gender || "-"}</TableCell>
// // //                         {
// // //                           !noActions && (
// // //                             <TableCell align="center" className={classes.tableCell}>
// // //                               <div>
// // //                                 <IconButton
// // //                                   className={`${classes.iconButton} ${classes.iconView}`}
// // //                                   onClick={() => history.push(`/${route}/${row?.userID}`)}
// // //                                   aria-label="view"
// // //                                 >
// // //                                   <VisibilityIcon />
// // //                                 </IconButton>
// // //                                 {row?.withdraw ? (
// // //                                   <IconButton
// // //                                     className={`${classes.iconButton} ${classes.iconUnWithdraw}`}
// // //                                     onClick={() => handleWithdraw(row?.userID)}
// // //                                     aria-label="unwithdraw"
// // //                                   >
// // //                                     <CancelIcon />
// // //                                   </IconButton>
// // //                                 ) : (
// // //                                   <IconButton
// // //                                     className={`${classes.iconButton} ${classes.iconWithdraw}`}
// // //                                     onClick={() => handleWithdraw(row?.userID)}
// // //                                     aria-label="withdraw"
// // //                                   >
// // //                                     <AttachMoneyIcon />
// // //                                   </IconButton>
// // //                                 )}
// // //                                 <IconButton
// // //                                   className={`${classes.iconButton} ${classes.iconEdit}`}
// // //                                   onClick={() => history.push(`/${route}/edit/${row?.userID}`)}
// // //                                   aria-label="edit"
// // //                                 >
// // //                                   <EditIcon />
// // //                                 </IconButton>
// // //                                 <IconButton
// // //                                   className={`${classes.iconButton} ${classes.iconDelete}`}
// // //                                   onClick={() => handleDelete(row?.userID)}
// // //                                   aria-label="delete"
// // //                                 >
// // //                                   <DeleteIcon />
// // //                                 </IconButton>
// // //                               </div>
// // //                             </TableCell>
// // //                           )}
// // //                       </TableRow>
// // //                     );
// // //                   })}
// // //                 {emptyRows > 0 && (
// // //                   <TableRow style={{ height: 53 * emptyRows }}>
// // //                     <TableCell colSpan={headCells.length + 2} />
// // //                   </TableRow>
// // //                 )}
// // //               </TableBody>
// // //             ) : (
// // //               <TableBody>
// // //                 <TableRow>
// // //                   <TableCell
// // //                     className={classes.noDataCell}
// // //                     colSpan={headCells.length + 2}
// // //                   >
// // //                     {noData || "NO DATA"}
// // //                   </TableCell>
// // //                 </TableRow>
// // //                 {emptyRows > 0 && (
// // //                   <TableRow style={{ height: 53 * emptyRows }}>
// // //                     <TableCell colSpan={headCells.length + 2} />
// // //                   </TableRow>
// // //                 )}
// // //               </TableBody>
// // //             )}
// // //           </Table>
// // //         </TableContainer>
// // //         <TablePagination
// // //           rowsPerPageOptions={[5, 10, 25]}
// // //           component="div"
// // //           count={students?.length || 0}
// // //           rowsPerPage={rowsPerPage}
// // //           page={page}
// // //           onPageChange={handleChangePage}
// // //           onRowsPerPageChange={handleChangeRowsPerPage}
// // //           style={{ color: "#333" }}
// // //         />
// // //       </Paper>
// // //     </div>
// // //   );
// // // }



// // import React from "react";
// // import { makeStyles } from "@material-ui/core/styles";
// // import Table from "@material-ui/core/Table";
// // import TableBody from "@material-ui/core/TableBody";
// // import TableCell from "@material-ui/core/TableCell";
// // import TableContainer from "@material-ui/core/TableContainer";
// // import TablePagination from "@material-ui/core/TablePagination";
// // import TableRow from "@material-ui/core/TableRow";
// // import Paper from "@material-ui/core/Paper";
// // import Checkbox from "@material-ui/core/Checkbox";
// // import Avatar from "@material-ui/core/Avatar";
// // import IconButton from "@material-ui/core/IconButton";
// // import VisibilityIcon from "@material-ui/icons/Visibility";
// // import EditIcon from "@material-ui/icons/Edit";
// // import DeleteIcon from "@material-ui/icons/Delete";
// // import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
// // import CancelIcon from "@material-ui/icons/Cancel";
// // import { useHistory } from "react-router-dom";
// // import TableHeader from "./TableHeader";
// // import { getImgSrc, getIntial } from "../../utils";

// // function descendingComparator(a, b, orderBy) {
// //   if (b[orderBy] < a[orderBy]) {
// //     return -1;
// //   }
// //   if (b[orderBy] > a[orderBy]) {
// //     return 1;
// //   }
// //   return 0;
// // }

// // function getComparator(order, orderBy) {
// //   return order === "desc"
// //     ? (a, b) => descendingComparator(a, b, orderBy)
// //     : (a, b) => -descendingComparator(a, b, orderBy);
// // }

// // function stableSort(array, comparator) {
// //   const stabilizedThis = array.map((el, index) => [el, index]);
// //   stabilizedThis.sort((a, b) => {
// //     const order = comparator(a[0], b[0]);
// //     if (order !== 0) return order;
// //     return a[1] - b[1];
// //   });
// //   return stabilizedThis.map((el) => el[0]);
// // }

// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     width: "100%",
// //     backgroundColor: "#f5f5f5",
// //   },
// //   paper: {
// //     width: "100%",
// //     marginBottom: theme.spacing(2),
// //     backgroundColor: "#ffffff",
// //     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
// //     borderRadius: "8px",
// //     overflow: "hidden",
// //   },
// //   table: {
// //     minWidth: 750,
// //   },
// //   tableContainer: {
// //     maxHeight: "calc(100vh - 200px)",
// //   },
// //   tableCell: {
// //     padding: "12px 16px",
// //     fontSize: "14px",
// //     fontWeight: 500,
// //     color: "#333",
// //     textAlign: "left",
// //     borderBottom: "1px solid #e0e0e0",
// //     whiteSpace: "nowrap",
// //     overflow: "hidden",
// //     textOverflow: "ellipsis",
// //   },
// //   tableHeadCell: {
// //     backgroundColor: "#2196f3",
// //     color: "#ffffff",
// //     fontWeight: 600,
// //     textAlign: "left",
// //     padding: "16px",
// //     position: "sticky",
// //     top: 0,
// //     zIndex: 1000,
// //   },
// //   tableRow: {
// //     "&:nth-of-type(even)": {
// //       backgroundColor: "#f9f9f9",
// //     },
// //     "&:hover": {
// //       backgroundColor: "#e3f2fd",
// //     },
// //   },
// //   noDataCell: {
// //     textAlign: "center",
// //     color: "#757575",
// //     padding: "32px",
// //     fontSize: "16px",
// //   },
// //   visuallyHidden: {
// //     border: 0,
// //     clip: "rect(0 0 0 0)",
// //     height: 1,
// //     margin: -1,
// //     overflow: "hidden",
// //     padding: 0,
// //     position: "absolute",
// //     top: 20,
// //     width: 1,
// //   },
// //   iconButton: {
// //     padding: 8,
// //     marginRight: 4,
// //   },
// //   icon: {
// //     fontSize: 20,
// //   },
// //   iconView: {
// //     color: "#4caf50",
// //   },
// //   iconEdit: {
// //     color: "#ff9800",
// //   },
// //   iconWithdraw: {
// //     color: "#3f51b5",
// //   },
// //   iconUnWithdraw: {
// //     color: "#f44336",
// //   },
// //   iconDelete: {
// //     color: "#f44336",
// //   },
// //   avatar: {
// //     width: 32,
// //     height: 32,
// //     fontSize: 14,
// //   },
// //   guardianInfo: {
// //     display: "flex",
// //     flexDirection: "column",
// //   },
// //   guardianEntry: {
// //     marginBottom: 4,
// //   },
// //   actionsCell: {
// //     display: "flex",
// //     justifyContent: "flex-start",
// //     alignItems: "center",
// //   },
// // }));

// // export default function EnhancedTable({
// //   students,
// //   headCells,
// //   route,
// //   handleWithdraw,
// //   handleDelete,
// //   noData,
// //   noActions,
// // }) {
// //   const classes = useStyles();
// //   const [order, setOrder] = React.useState("asc");
// //   const [orderBy, setOrderBy] = React.useState("name");
// //   const [selected, setSelected] = React.useState([]);
// //   const [page, setPage] = React.useState(0);
// //   const [rowsPerPage, setRowsPerPage] = React.useState(10);
// //   const history = useHistory();

// //   const handleRequestSort = (event, property) => {
// //     const isAsc = orderBy === property && order === "asc";
// //     setOrder(isAsc ? "desc" : "asc");
// //     setOrderBy(property);
// //   };

// //   const handleSelectAllClick = (event) => {
// //     if (event.target.checked) {
// //       const newSelecteds = students.map((n) => n.userID);
// //       setSelected(newSelecteds);
// //       return;
// //     }
// //     setSelected([]);
// //   };

// //   const handleClick = (event, userID) => {
// //     const selectedIndex = selected.indexOf(userID);
// //     let newSelected = [];

// //     if (selectedIndex === -1) {
// //       newSelected = newSelected.concat(selected, userID);
// //     } else if (selectedIndex === 0) {
// //       newSelected = newSelected.concat(selected.slice(1));
// //     } else if (selectedIndex === selected.length - 1) {
// //       newSelected = newSelected.concat(selected.slice(0, -1));
// //     } else if (selectedIndex > 0) {
// //       newSelected = newSelected.concat(
// //         selected.slice(0, selectedIndex),
// //         selected.slice(selectedIndex + 1)
// //       );
// //     }

// //     setSelected(newSelected);
// //   };

// //   const handleChangePage = (event, newPage) => {
// //     setPage(newPage);
// //   };

// //   const handleChangeRowsPerPage = (event) => {
// //     setRowsPerPage(parseInt(event.target.value, 10));
// //     setPage(0);
// //   };

// //   const isSelected = (userID) => selected.indexOf(userID) !== -1;

// //   const emptyRows =
// //     rowsPerPage - Math.min(rowsPerPage, students?.length - page * rowsPerPage);

// //   return (
// //     <div className={classes.root}>
// //       <Paper className={classes.paper}>
// //         <TableContainer className={classes.tableContainer}>
// //           <Table
// //             className={classes.table}
// //             aria-labelledby="tableTitle"
// //             size="medium"
// //             aria-label="enhanced table"
// //           >
// //             <TableHeader
// //               classes={classes}
// //               headCells={headCells}
// //               numSelected={selected.length}
// //               order={order}
// //               orderBy={orderBy}
// //               noActions={noActions}
// //               onSelectAllClick={handleSelectAllClick}
// //               onRequestSort={handleRequestSort}
// //               rowCount={students?.length}
// //             />
// //             <TableBody>
// //               {students?.length > 0 ? (
// //                 stableSort(students, getComparator(order, orderBy))
// //                   ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
// //                   ?.map((row, index) => {
// //                     const isItemSelected = isSelected(row?.userID);
// //                     const labelId = `enhanced-table-checkbox-${index}`;
// //                     return (
// //                       <TableRow
// //                         hover
// //                         role="checkbox"
// //                         aria-checked={isItemSelected}
// //                         tabIndex={-1}
// //                         key={row.userID}
// //                         selected={isItemSelected}
// //                         className={classes.tableRow}
// //                       >
// //                         <TableCell padding="checkbox">
// //                           <Checkbox
// //                             onClick={(event) => handleClick(event, row?.userID)}
// //                             checked={isItemSelected}
// //                             inputProps={{ "aria-labelledby": labelId }}
// //                           />
// //                         </TableCell>
// //                         <TableCell className={classes.tableCell}>
// //                           {row?.userID || "-"}
// //                         </TableCell>
// //                         <TableCell className={classes.tableCell}>
// //                           <Avatar
// //                             className={classes.avatar}
// //                             src={`${getImgSrc(row?.profileUrl)}`}
// //                             alt={getIntial(row?.name)}
// //                           />
// //                         </TableCell>
// //                         <TableCell className={classes.tableCell}>
// //                           {row?.name} {row?.surname || ""}
// //                         </TableCell>
// //                         <TableCell className={classes.tableCell}>
// //                           <div className={classes.guardianInfo}>
// //                             {row?.guadian?.length > 0 ? (
// //                               row.guadian.map((g, index) => (
// //                                 <div key={index} className={classes.guardianEntry}>
// //                                   {g.name} ({g.relationship})
// //                                 </div>
// //                               ))
// //                             ) : (
// //                               "No Parents"
// //                             )}
// //                           </div>
// //                         </TableCell>
// //                         <TableCell className={classes.tableCell}>
// //                           {row?.status || row?.position}
// //                         </TableCell>
// //                         <TableCell className={classes.tableCell}>
// //                           {row?.classID || "-"}
// //                         </TableCell>
// //                         <TableCell className={classes.tableCell}>
// //                           {row?.gender || "-"}
// //                         </TableCell>
// //                         {!noActions && (
// //                           <TableCell className={`${classes.tableCell} ${classes.actionsCell}`}>
// //                             <IconButton
// //                               className={`${classes.iconButton} ${classes.iconView}`}
// //                               onClick={() => history.push(`/${route}/${row?.userID}`)}
// //                               aria-label="view"
// //                             >
// //                               <VisibilityIcon className={classes.icon} />
// //                             </IconButton>
// //                             <IconButton
// //                               className={`${classes.iconButton} ${row?.withdraw ? classes.iconUnWithdraw : classes.iconWithdraw}`}
// //                               onClick={() => handleWithdraw(row?.userID)}
// //                               aria-label={row?.withdraw ? "unwithdraw" : "withdraw"}
// //                             >
// //                               {row?.withdraw ? (
// //                                 <CancelIcon className={classes.icon} />
// //                               ) : (
// //                                 <AttachMoneyIcon className={classes.icon} />
// //                               )}
// //                             </IconButton>
// //                             <IconButton
// //                               className={`${classes.iconButton} ${classes.iconEdit}`}
// //                               onClick={() => history.push(`/${route}/edit/${row?.userID}`)}
// //                               aria-label="edit"
// //                             >
// //                               <EditIcon className={classes.icon} />
// //                             </IconButton>
// //                             <IconButton
// //                               className={`${classes.iconButton} ${classes.iconDelete}`}
// //                               onClick={() => handleDelete(row?.userID)}
// //                               aria-label="delete"
// //                             >
// //                               <DeleteIcon className={classes.icon} />
// //                             </IconButton>
// //                           </TableCell>
// //                         )}
// //                       </TableRow>
// //                     );
// //                   })
// //               ) : (
// //                 <TableRow>
// //                   <TableCell
// //                     className={classes.noDataCell}
// //                     colSpan={headCells.length + 2}
// //                   >
// //                     {noData || "No data available"}
// //                   </TableCell>
// //                 </TableRow>
// //               )}
// //               {emptyRows > 0 && (
// //                 <TableRow style={{ height: 53 * emptyRows }}>
// //                   <TableCell colSpan={headCells.length + 2} />
// //                 </TableRow>
// //               )}
// //             </TableBody>
// //           </Table>
// //         </TableContainer>
// //         <TablePagination
// //           rowsPerPageOptions={[5, 10, 25]}
// //           component="div"
// //           count={students?.length || 0}
// //           rowsPerPage={rowsPerPage}
// //           page={page}
// //           onPageChange={handleChangePage}
// //           onRowsPerPageChange={handleChangeRowsPerPage}
// //           style={{ color: "#333" }}
// //         />
// //       </Paper>
// //     </div>
// //   );
// // }
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TablePagination from "@material-ui/core/TablePagination";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import Checkbox from "@material-ui/core/Checkbox";
// import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// import VisibilityIcon from "@material-ui/icons/Visibility";
// import EditIcon from "@material-ui/icons/Edit";
// import DeleteIcon from "@material-ui/icons/Delete";
// import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
// import CancelIcon from "@material-ui/icons/Cancel";
// import { useHistory } from "react-router-dom";
// import TableHeader from "./TableHeader";
// import { getImgSrc, getIntial } from "../../utils";

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === "desc"
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     backgroundColor: "#fffff5",
//   },
//   paper: {
//     width: "100%",
//     marginBottom: theme.spacing(7),
//     backgroundColor: "#fffff5",
//   },
//   table: {
//     minWidth: 750,
//   },
//   tableContainer: {
//     maxHeight: "620px",
//   },
//   tableCell: {
//     whiteSpace: "nowrap",
//     overflow: "hidden",
//     textOverflow: "ellipsis",
//     fontFamily: "'Baskerville', serif",
//     padding: "7px",
//     fontSize: "14px",
//     fontWeight: "bold",
//     color: "#444",
//     // textAlign: "center",
//   },
//   tableHeadCell: {
//     backgroundColor: "#01a6ca",
//     color: "#fff",
//     fontFamily: "'Times New Roman', serif",
//     fontWeight: "bold",
//     textAlign: "center",
//     position: "sticky",
//     top: 0,
//     zIndex: 1000,
//     padding: "100px",
//     margin: "0 5px"
//   },
//   tableRow: {
//     "&:nth-of-type(even)": {
//       backgroundColor: "#fffff7",
//     },
//     "&:nth-of-type(odd)": {
//       backgroundColor: "#f0f8ff",
//     },
//   },
//   noDataCell: {
//     textAlign: "center",
//     color: "#fa6767",
//     fontFamily: "'Baskerville', serif",
//   },
//   stickyHeader: {
//     position: "sticky",
//     top: 0,
//     backgroundColor: "#01a6ca",
//     color: "#fff",
//     zIndex: 1000,
//     fontFamily: "'Times New Roman', serif",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   visuallyHidden: {
//     border: 0,
//     clip: "rect(0 0 0 0)",
//     height: 1,
//     margin: -1,
//     overflow: "hidden",
//     padding: 0,
//     position: "absolute",
//     top: 20,
//     width: 1,
//   },
//   icon: {
//     color: "#555",
//   },
//   iconView: {
//     color: "#4caf50",
//   },
//   iconEdit: {
//     color: "#ff9800",
//   },
//   iconWithdraw: {
//     color: "#3f51b5",
//   },
//   iconUnWithdraw: {
//     color: "#f44336",
//   },
//   iconDelete: {
//     color: "#f44336",
//   },
//   // Column-specific styles for better distribution
//   checkboxColumn: {
//     width: '0px',



//   },
//   idColumn: {
//     width: '00px',
//     marginLeft: "10000000px"
//   },
//   avatarColumn: {
//     width: '0px',

//   },
//   nameColumn: {
//     width: '0px',

//   },
//   guardianColumn: {
//     width: '00px',

//   },
//   statusColumn: {
//     width: '00px',

//   },
//   classColumn: {
//     width: '0px',

//   },
//   genderColumn: {
//     width: '0px',

//   },
//   actionsColumn: {
//     width: '0px',

//   },
// }));

// export default function EnhancedTable({
//   students,
//   headCells,
//   route,
//   handleWithdraw,
//   handleDelete,
//   noData,
//   noActions,
// }) {
//   const classes = useStyles();
//   const [order, setOrder] = React.useState("asc");
//   const [orderBy, setOrderBy] = React.useState("name");
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);
//   const [dormitories, setDormitories] = useState({});
//   const history = useHistory();

//   useEffect(() => {
//     const fetchDormitories = async () => {
//       const dormitoryMap = {};

//       // Check if the first 10 dormitories are already stored in local storage
//       const storedDormitories = JSON.parse(localStorage.getItem('dormitories')) || [];

//       // Map the stored dormitories
//       storedDormitories.forEach(dorm => {
//         dormitoryMap[dorm.id] = dorm.name;
//       });

//       // Filter out students whose dormitory data is already in dormitoryMap
//       const remainingStudents = students.filter(student => !dormitoryMap[student.dormitoryID]);

//       if (remainingStudents.length > 0) {
//         // Fetch dormitory data for remaining students
//         const dormitoryPromises = remainingStudents.map(student =>
//           axios.get(`http://localhost:5000/api/dormitories/${student.dormitoryID}`)
//             .then(res => {
//               if (res.data.success && res.data.docs) {
//                 return { id: student.dormitoryID, name: res.data.docs.name };
//               } else {
//                 return { id: student.dormitoryID, name: "No Bus Service" };
//               }
//             })
//             .catch(() => ({ id: student.dormitoryID, name: "No Bus Service" }))
//         );

//         const dormitoryResults = await Promise.all(dormitoryPromises);

//         dormitoryResults.forEach(dorm => {
//           dormitoryMap[dorm.id] = dorm.name;
//         });

//         // Combine new dormitories with stored ones and save the first 10 entries back to localStorage
//         const updatedDormitories = [...storedDormitories, ...dormitoryResults].slice(0, 10);
//         localStorage.setItem('dormitories', JSON.stringify(updatedDormitories));
//       }

//       // Set dormitories state
//       setDormitories(prevState => {
//         if (JSON.stringify(prevState) !== JSON.stringify(dormitoryMap)) {
//           return dormitoryMap;
//         }
//         return prevState;
//       });
//     };

//     if (students.length > 0) {
//       fetchDormitories();
//     }
//   }, [students]);





//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === "asc";
//     setOrder(isAsc ? "desc" : "asc");
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelecteds = students.map((n) => n.userID);
//       setSelected(newSelecteds);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event, userID) => {
//     const selectedIndex = selected.indexOf(userID);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, userID);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1)
//       );
//     }

//     setSelected(newSelected);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const isSelected = (userID) => selected.indexOf(userID) !== -1;

//   const emptyRows =
//     rowsPerPage - Math.min(rowsPerPage, students?.length - page * rowsPerPage);

//   return (
//     <div className={classes.root}>
//       <Paper className={classes.paper}>
//         <TableContainer className={classes.tableContainer}>
//           <Table
//             className={classes.table}
//             aria-labelledby="tableTitle"
//             size="medium"
//             aria-label="enhanced table"
//             stickyHeader
//             styles={{ marginLeft: "0px" }}
//           >
//             <TableHeader
//               style={{ marginRight: "0px" }}
//               classes={classes}
//               headCells={headCells}
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               noActions={noActions}
//               onSelectAllClick={handleSelectAllClick}
//               onRequestSort={handleRequestSort}
//               rowCount={students?.length}
//             />
//             <TableBody>
//               {students?.length > 0 ? (
//                 stableSort(students, getComparator(order, orderBy))
//                   ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                   ?.map((row, index) => {
//                     const isItemSelected = isSelected(row?.userID);
//                     const labelId = `enhanced-table-checkbox-${index}`;
//                     return (
//                       <TableRow
//                         // hover
//                         role="checkbox"
//                         aria-checked={isItemSelected}
//                         tabIndex={-1}
//                         key={row.userID}
//                         selected={isItemSelected}
//                         className={classes.tableRow}

//                       >
//                         <TableCell padding="checkbox" className={classes.checkboxColumn}>
//                           <Checkbox
//                             onClick={(event) => handleClick(event, row?.userID)}
//                             checked={isItemSelected}
//                             inputProps={{ "aria-labelledby": labelId }}
//                           />
//                         </TableCell>
//                         <TableCell className={`${classes.tableCell} ${classes.idColumn}`} align="left">
//                           <div styles={{ marginRight: "20px" }}>
//                             {row?.userID || "-"}
//                           </div>

//                         </TableCell>
//                         <TableCell className={`${classes.tableCell} ${classes.avatarColumn}`} align="left">
//                           <Avatar
//                             styles={{ marginRight: "20px" }}
//                             src={`${getImgSrc(row?.profileUrl)}`}
//                             alt={getIntial(row?.name)}
//                           />
//                         </TableCell>
//                         <TableCell className={`${classes.tableCell} ${classes.nameColumn}`} align="left">
//                           <div styles={{ marginRight: "20px" }}>  {row?.name} {row?.surname || ""}</div>
//                         </TableCell>
//                         <TableCell className={`${classes.tableCell} ${classes.guardianColumn}`} align="left">
//                           <div styles={{ marginRight: "20px" }}>
//                             {row?.guadian?.length > 0 ? (
//                               row.guadian.map((g, index) => (
//                                 <div key={index}>
//                                   {g.name} ({g.relationship})
//                                 </div>
//                               ))
//                             ) : (
//                               "No Parents"
//                             )}
//                           </div>
//                         </TableCell>
//                         {/* <TableCell className={`${classes.tableCell} ${classes.statusColumn}`} align="left">
//                           <div styles={{ marginRight: "20px" }}> {row?.status || row?.position}    </div>
//                         </TableCell> */}
//                         <TableCell className={`${classes.tableCell} ${classes.dormitoryColumn}`} align="left">
//                           {dormitories[row?.dormitoryID] || "Loading..."}
//                         </TableCell>
//                         <TableCell className={`${classes.tableCell} ${classes.classColumn}`} align="left">
//                           <div styles={{ marginRight: "20px" }}> {row?.classID || "-"}     </div>
//                         </TableCell>
//                         <TableCell className={`${classes.tableCell} ${classes.genderColumn}`} align="left">
//                           <div styles={{ marginRight: "20px" }}>  {row?.gender || "-"}    </div>
//                         </TableCell>
//                         {!noActions && (

//                           <div styles={{ marginRight: "2px" }}>
//                             <TableCell className={`${classes.tableCell} ${classes.actionsColumn}`} align="left">
//                               <IconButton
//                                 style={{ marginRight: "0px" }}
//                                 onClick={() => history.push(`/${route}/${row?.userID}`)}
//                                 aria-label="view"
//                               >
//                                 <VisibilityIcon className={classes.iconView} />
//                               </IconButton>
//                               {/* <IconButton
//                                 style={{ marginRight: "0px" }}
//                                 onClick={() => handleWithdraw(row?.userID)}
//                                 aria-label={row?.withdraw ? "unwithdraw" : "withdraw"}
//                               >
//                                 {row?.withdraw ? (
//                                   <CancelIcon className={classes.iconUnWithdraw} />
//                                 ) : (
//                                   <AttachMoneyIcon className={classes.iconWithdraw} />
//                                 )}
//                               </IconButton> */}
//                               <IconButton
//                                 onClick={() => history.push(`/${route}/edit/${row?.userID}`)}
//                                 aria-label="edit"
//                                 style={{ marginRight: "0px" }}
//                               >
//                                 <EditIcon className={classes.iconEdit} />
//                               </IconButton>
//                               <IconButton
//                                 style={{ marginRight: "000px" }}
//                                 onClick={() => handleDelete(row?.userID)}
//                                 aria-label="delete"
//                               >
//                                 <DeleteIcon className={classes.iconDelete} />
//                               </IconButton>
//                             </TableCell>
//                           </div>
//                         )}
//                       </TableRow>
//                     );
//                   })
//               ) : (
//                 <TableRow>
//                   <TableCell
//                     className={classes.noDataCell}
//                     colSpan={headCells.length + 2}
//                   >
//                     {noData || "No data available"}
//                   </TableCell>
//                 </TableRow>
//               )}
//               {emptyRows > 0 && (
//                 <TableRow style={{ height: 53 * emptyRows }}>
//                   <TableCell colSpan={headCells.length + 2} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         {students?.length > 0 && (
//           <TablePagination
//             rowsPerPageOptions={[5, 10, 25]}
//             component="div"
//             count={students.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onChangePage={handleChangePage}
//             onChangeRowsPerPage={handleChangeRowsPerPage}
//           />
//         )}
//       </Paper>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router-dom";
import TableHeader from "./TableHeader";
import { getImgSrc, getIntial } from "../../utils";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#fffff5",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(7),
    backgroundColor: "#fffff5",
  },
  table: {
    minWidth: 750,
  },
  tableContainer: {
    maxHeight: "620px",
  },
  tableCell: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontFamily: "'Baskerville', serif",
    padding: "7px",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#444",
    // textAlign: "center",
  },
  tableHeadCell: {
    backgroundColor: "#01a6ca",
    color: "#fff",
    fontFamily: "'Times New Roman', serif",
    fontWeight: "bold",
    textAlign: "center",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    padding: "100px",
    margin: "0 5px"
  },
  tableRow: {
    "&:nth-of-type(even)": {
      backgroundColor: "#fffff7",
    },
    "&:nth-of-type(odd)": {
      backgroundColor: "#f0f8ff",
    },
  },
  noDataCell: {
    textAlign: "center",
    color: "#fa6767",
    fontFamily: "'Baskerville', serif",
  },
  stickyHeader: {
    position: "sticky",
    top: 0,
    backgroundColor: "#01a6ca",
    color: "#fff",
    zIndex: 1000,
    fontFamily: "'Times New Roman', serif",
    fontWeight: "bold",
    textAlign: "center",
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  icon: {
    color: "#555",
  },
  iconView: {
    color: "#4caf50",
  },
  iconEdit: {
    color: "#ff9800",
  },
  iconWithdraw: {
    color: "#3f51b5",
  },
  iconUnWithdraw: {
    color: "#f44336",
  },
  iconDelete: {
    color: "#f44336",
  },
  // Column-specific styles for better distribution
  checkboxColumn: {
    width: '0px',



  },
  idColumn: {
    width: '00px',
    marginLeft: "10000000px"
  },
  avatarColumn: {
    width: '0px',

  },
  nameColumn: {
    width: '0px',

  },
  guardianColumn: {
    width: '00px',

  },
  statusColumn: {
    width: '00px',

  },
  classColumn: {
    width: '0px',

  },
  genderColumn: {
    width: '0px',

  },
  actionsColumn: {
    width: '0px',

  },
}));

export default function EnhancedTable({
  students,
  headCells,
  route,
  handleDelete,
  noData,
  noActions,
}) {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [dormitories, setDormitories] = useState({});
  const history = useHistory();

  useEffect(() => {
    const fetchDormitories = async () => {
      const dormitoryMap = {};

      const storedDormitories = JSON.parse(localStorage.getItem('dormitories')) || [];

      storedDormitories.forEach(dorm => {
        dormitoryMap[dorm.id] = dorm.name;
      });

      const remainingStudents = students.filter(student => !dormitoryMap[student.dormitoryID]);

      if (remainingStudents.length > 0) {
        const dormitoryPromises = remainingStudents.map(student =>
          axios.get(`https://dreamscloudtechbackend.onrender.com/api/dormitories/${student.dormitoryID}`)
            .then(res => {
              if (res.data.success && res.data.docs) {
                return { id: student.dormitoryID, name: res.data.docs.name };
              } else {
                return { id: student.dormitoryID, name: "No Bus Service" };
              }
            })
            .catch(() => ({ id: student.dormitoryID, name: "No Bus Service" }))
        );

        const dormitoryResults = await Promise.all(dormitoryPromises);

        dormitoryResults.forEach(dorm => {
          dormitoryMap[dorm.id] = dorm.name;
        });

        const updatedDormitories = [...storedDormitories, ...dormitoryResults].slice(0, 10);
        localStorage.setItem('dormitories', JSON.stringify(updatedDormitories));
      }

      setDormitories(prevState => {
        if (JSON.stringify(prevState) !== JSON.stringify(dormitoryMap)) {
          return dormitoryMap;
        }
        return prevState;
      });
    };

    if (students.length > 0) {
      fetchDormitories();
    }
  }, [students]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = students.map((n) => n.userID);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, userID) => {
    const selectedIndex = selected.indexOf(userID);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, userID);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (userID) => selected.indexOf(userID) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, students?.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer className={classes.tableContainer}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="medium"
            aria-label="enhanced table"
            stickyHeader
          >
            <TableHeader
              classes={classes}
              headCells={headCells}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              noActions={noActions}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={students?.length}
            />
            <TableBody>
              {students?.length > 0 ? (
                stableSort(students, getComparator(order, orderBy))
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  ?.map((row, index) => {
                    const isItemSelected = isSelected(row?.userID);
                    const labelId = `enhanced-table-checkbox-${index}`;
                    return (
                      <TableRow
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.userID}
                        selected={isItemSelected}
                        className={classes.tableRow}
                      >
                        <TableCell padding="checkbox" className={classes.checkboxColumn}>
                          <Checkbox
                            onClick={(event) => handleClick(event, row?.userID)}
                            checked={isItemSelected}
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </TableCell>
                        <TableCell className={`${classes.tableCell} ${classes.idColumn}`} align="left">
                          {row?.userID || "-"}
                        </TableCell>
                        <TableCell className={`${classes.tableCell} ${classes.avatarColumn}`} align="left">
                          <Avatar
                            src={`${getImgSrc(row?.profileUrl)}`}
                            alt={getIntial(row?.name)}
                          />
                        </TableCell>
                        <TableCell className={`${classes.tableCell} ${classes.nameColumn}`} align="left">
                          {row?.name} {row?.surname || ""}
                        </TableCell>
                        <TableCell className={`${classes.tableCell} ${classes.guardianColumn}`} align="left">
                          {row?.guadian?.length > 0 ? (
                            row.guadian.map((g, index) => (
                              <div key={index}>
                                {g.name} ({g.relationship})
                              </div>
                            ))
                          ) : (
                            "No Parents"
                          )}
                        </TableCell>
                        <TableCell className={`${classes.tableCell} ${classes.dormitoryColumn}`} align="left">
                          {dormitories[row?.dormitoryID] || "Loading..."}
                        </TableCell>
                        <TableCell className={`${classes.tableCell} ${classes.classColumn}`} align="left">
                          {row?.classID || "-"}
                        </TableCell>
                        <TableCell className={`${classes.tableCell} ${classes.genderColumn}`} align="left">
                          {row?.gender || "-"}
                        </TableCell>
                        {!noActions && (
                          <TableCell className={`${classes.tableCell} ${classes.actionsColumn}`} align="left">
                            <IconButton
                              onClick={() => history.push(`/${route}/${row?.userID}`)}
                              aria-label="view"
                            >
                              <VisibilityIcon className={classes.iconView} />
                            </IconButton>
                            <IconButton
                              onClick={() => history.push(`/${route}/edit/${row?.userID}`)}
                              aria-label="edit"
                            >
                              <EditIcon className={classes.iconEdit} />
                            </IconButton>
                            <IconButton
                              onClick={() => handleDelete(row?.userID)}
                              aria-label="delete"
                            >
                              <DeleteIcon className={classes.iconDelete} />
                            </IconButton>
                          </TableCell>
                        )}
                      </TableRow>
                    );
                  })
              ) : (
                <TableRow>
                  <TableCell
                    className={classes.noDataCell}
                    colSpan={headCells.length + 2}
                  >
                    {noData || "No data available"}
                  </TableCell>
                </TableRow>
              )}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={headCells.length + 2} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {students?.length > 0 && (
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={students.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        )}
      </Paper>
    </div>
  );
}

































// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TablePagination from "@material-ui/core/TablePagination";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import Checkbox from "@material-ui/core/Checkbox";
// import Avatar from "@material-ui/core/Avatar";
// import { useHistory } from "react-router-dom";
// import TableHeader from "./TableHeader";
// import { getImgSrc, getIntial } from "../../utils";
// import ViewActions from "./ViewOptions";

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === "desc"
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//   },
//   paper: {
//     width: "100%",
//     marginBottom: theme.spacing(2),
//   },
//   table: {
//     minWidth: 750,
//   },
//   visuallyHidden: {
//     border: 0,
//     clip: "rect(0 0 0 0)",
//     height: 1,
//     margin: -1,
//     overflow: "hidden",
//     padding: 0,
//     position: "absolute",
//     top: 20,
//     width: 1,
//   },
// }));

// export default function EnhancedTable({
//   students,
//   headCells,
//   route,
//   handleWithdraw,
//   handleDelete,
//   noData,
//   noActions,
// }) {
//   const classes = useStyles();
//   const [order, setOrder] = React.useState("asc");
//   const [orderBy, setOrderBy] = React.useState("name");
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);
//   const history = useHistory();

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === "asc";
//     setOrder(isAsc ? "desc" : "asc");
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelecteds = students.map((n) => n.name);
//       setSelected(newSelecteds);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event, name) => {
//     const selectedIndex = selected.indexOf(name);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1)
//       );
//     }

//     setSelected(newSelected);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const isSelected = (userID) => selected.indexOf(userID) !== -1;

//   const emptyRows =
//     rowsPerPage - Math.min(rowsPerPage, students?.length - page * rowsPerPage);
//   console.log(students);

//   return (
//     <div className={classes.root}>
//       <Paper className={classes.paper}>
//         <TableContainer>
//           <Table
//             className={classes.table}
//             aria-labelledby="tableTitle"
//             size="medium"
//             aria-label="enhanced table"
//           >
//             <TableHeader
//               classes={classes}
//               headCells={headCells}
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               noActions={noActions}
//               onSelectAllClick={handleSelectAllClick}
//               onRequestSort={handleRequestSort}
//               rowCount={students?.length}
//             />
//             {students?.length > 0 ? (
//               <TableBody>
//                 {stableSort(students, getComparator(order, orderBy))
//                   ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                   ?.map((row, index) => {
//                     const isItemSelected = isSelected(row?.userID);
//                     const labelId = `enhanced-table-checkbox-${index}`;
//                     return (
//                       <TableRow
//                         hover
//                         role="checkbox"
//                         aria-checked={isItemSelected}
//                         tabIndex={-1}
//                         key={row.userID}
//                         selected={isItemSelected}
//                       >
//                         <TableCell padding="checkbox">
//                           <Checkbox
//                             onClick={(event) => handleClick(event, row?.userID)}
//                             checked={isItemSelected}
//                             inputProps={{ "aria-labelledby": labelId }}
//                           />
//                         </TableCell>
//                         <TableCell align="left" id={labelId}>
//                           {row?.userID || "-"}
//                         </TableCell>
//                         <TableCell align="left">
//                           <Avatar
//                             src={`${getImgSrc(row?.profileUrl)}`}
//                             alt={getIntial(row?.name)}
//                           ></Avatar>
//                         </TableCell>
//                         <TableCell align="left">{row?.name}</TableCell>
//                         <TableCell align="left">
//                           {" "}
//                           {row?.middleName || "-"}
//                         </TableCell>
//                         <TableCell align="left">
//                           {row?.surname || "-"}
//                         </TableCell>
//                         <TableCell align="left">
//                           {row?.status || row?.position}
//                         </TableCell>
//                         {row?.role === "student" && (
//                           <TableCell align="left">
//                             {row?.classID || "-"}
//                           </TableCell>
//                         )}
//                         <TableCell align="left">{row?.gender || "-"}</TableCell>
//                         {!noActions && (
//                           <TableCell align="left">
//                             <ViewActions
//                               id={row?.userID}
//                               route={route}
//                               isWithdraw={row?.withdraw}
//                               history={history}
//                               handleWithdraw={handleWithdraw}
//                               handleDelete={handleDelete}
//                             />
//                           </TableCell>
//                         )}
//                       </TableRow>
//                     );
//                   })}
//                 {emptyRows > 0 && (
//                   <TableRow style={{ height: 53 * emptyRows }}>
//                     <TableCell colSpan={6} />
//                   </TableRow>
//                 )}
//               </TableBody>
//             ) : (
//               <TableBody>
//                 <TableRow>
//                   <TableCell
//                     className="text-danger text-center"
//                     colSpan={headCells.length + 2}
//                   >
//                     {noData || "NO DATA"}
//                   </TableCell>
//                 </TableRow>
//                 {emptyRows > 0 && (
//                   <TableRow style={{ height: 53 * emptyRows }}>
//                     <TableCell colSpan={6} />
//                   </TableRow>
//                 )}
//               </TableBody>
//             )}
//           </Table>
//         </TableContainer>
//         {students?.length > 5 && (
//           <TablePagination
//             rowsPerPageOptions={[5, 10, 25]}
//             component="div"
//             count={students.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onChangePage={handleChangePage}
//             onChangeRowsPerPage={handleChangeRowsPerPage}
//           />
//         )}
//       </Paper>
//     </div>
//   );
// }



// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TablePagination from "@material-ui/core/TablePagination";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import Checkbox from "@material-ui/core/Checkbox";
// import Avatar from "@material-ui/core/Avatar";
// import { useHistory } from "react-router-dom";
// import TableHeader from "./TableHeader";
// import { getImgSrc, getIntial } from "../../utils";
// import ViewActions from "./ViewOptions";

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === "desc"
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//   },
//   paper: {
//     width: "100%",
//     marginBottom: theme.spacing(2),
//   },
//   table: {
//     minWidth: 750,
//   },
//   tableContainer: {
//     maxHeight: "620px",
//   },
//   tableCell: {
//     whiteSpace: "nowrap",
//     overflow: "visible",
//     fontFamily: "'Baskerville', serif",
//     padding: "16px",
//     fontSize: "14px",
//     fontWeight: "bold",
//     color: "#444",
//     // textAlign: "center",
//   },
//   tableHeadCell: {
//     backgroundColor: "#01a6ca",
//     color: "#fff",
//     fontFamily: "'Times New Roman', serif",
//     fontWeight: "bold",
//     textAlign: "center",
//     position: "sticky",
//     top: 0,
//     zIndex: 1000,
//     padding: "16px",
//   },
//   tableRow: {
//     "&:nth-of-type(even)": {
//       backgroundColor: "#fffff7",
//     },
//     "&:nth-of-type(odd)": {
//       backgroundColor: "#f0f8ff",
//     },
//   },
//   noDataCell: {
//     textAlign: "center",
//     color: "#fa6767",
//     fontFamily: "'Baskerville', serif",
//     fontSize: "14px",
//   },
//   stickyHeader: {
//     position: "sticky",
//     top: 0,
//     backgroundColor: "#01a6ca", // Header background color
//     color: "#fff",
//     zIndex: 1000,
//     fontFamily: "'Times New Roman', serif",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   visuallyHidden: {
//     border: 0,
//     clip: "rect(0 0 0 0)",
//     height: 1,
//     margin: -1,
//     overflow: "hidden",
//     padding: 0,
//     position: "absolute",
//     top: 20,
//     width: 1,
//   },
// }));

// export default function EnhancedTable({
//   students,
//   headCells,
//   route,
//   handleWithdraw,
//   handleDelete,
//   noData,
//   noActions,
// }) {
//   const classes = useStyles();
//   const [order, setOrder] = React.useState("asc");
//   const [orderBy, setOrderBy] = React.useState("name");
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);
//   const history = useHistory();

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === "asc";
//     setOrder(isAsc ? "desc" : "asc");
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelecteds = students.map((n) => n.name);
//       setSelected(newSelecteds);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event, name) => {
//     const selectedIndex = selected.indexOf(name);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1)
//       );
//     }

//     setSelected(newSelected);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const isSelected = (userID) => selected.indexOf(userID) !== -1;

//   const emptyRows =
//     rowsPerPage - Math.min(rowsPerPage, students?.length - page * rowsPerPage);
//   console.log(students);

//   return (
//     <div className={classes.root}>
//       <Paper className={classes.paper}>
//         <TableContainer className={classes.tableContainer}>
//           <Table
//             className={classes.table}
//             aria-labelledby="tableTitle"
//             size="medium"
//             aria-label="enhanced table"
//           >
//             <TableHeader
//               className={classes.stickyHeader}
//               classes={classes}
//               headCells={headCells}
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               noActions={noActions}
//               onSelectAllClick={handleSelectAllClick}
//               onRequestSort={handleRequestSort}
//               rowCount={students?.length}
//             />
//             {students?.length > 0 ? (
//               <TableBody>
//                 {stableSort(students, getComparator(order, orderBy))
//                   ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                   ?.map((row, index) => {
//                     const isItemSelected = isSelected(row?.userID);
//                     const labelId = `enhanced-table-checkbox-${index}`;
//                     return (
//                       <TableRow
//                         hover
//                         role="checkbox"
//                         aria-checked={isItemSelected}
//                         tabIndex={-1}
//                         key={row.userID}
//                         selected={isItemSelected}
//                         className={classes.tableRow}
//                       >
//                         <TableCell padding="checkbox">
//                           <Checkbox
//                             onClick={(event) => handleClick(event, row?.userID)}
//                             checked={isItemSelected}
//                             inputProps={{ "aria-labelledby": labelId }}
//                           />
//                         </TableCell>
//                         <TableCell align="left" id={labelId} className={classes.tableCell}>
//                           {row?.userID || "-"}
//                         </TableCell>
//                         <TableCell align="left">
//                           <Avatar
//                             src={`${getImgSrc(row?.profileUrl)}`}
//                             alt={getIntial(row?.name)}
//                           ></Avatar>
//                         </TableCell>
//                         <TableCell align="left">{row?.name}</TableCell>

//                         <TableCell align="left">
//                           {row?.surname || "-"}
//                         </TableCell>
//                         <TableCell align="left">
//                           {row?.status || row?.position}
//                         </TableCell>
//                         {row?.role === "student" && (
//                           <TableCell align="left">
//                             {row?.classID || "-"}
//                           </TableCell>
//                         )}
//                         <TableCell align="left">{row?.gender || "-"}</TableCell>
//                         {!noActions && (
//                           <TableCell align="left">
//                             <ViewActions
//                               id={row?.userID}
//                               route={route}
//                               isWithdraw={row?.withdraw}
//                               history={history}
//                               handleWithdraw={handleWithdraw}
//                               handleDelete={handleDelete}
//                             />
//                           </TableCell>
//                         )}
//                       </TableRow>
//                     );
//                   })}
//                 {emptyRows > 0 && (
//                   <TableRow style={{ height: 53 * emptyRows }}>
//                     <TableCell colSpan={6} />
//                   </TableRow>
//                 )}
//               </TableBody>
//             ) : (
//               <TableBody>
//                 <TableRow>
//                   <TableCell
//                     className="text-danger text-center"
//                     colSpan={headCells.length + 2}
//                   >
//                     {noData || "NO DATA"}
//                   </TableCell>
//                 </TableRow>
//                 {emptyRows > 0 && (
//                   <TableRow style={{ height: 53 * emptyRows }}>
//                     <TableCell colSpan={6} />
//                   </TableRow>
//                 )}
//               </TableBody>
//             )}
//           </Table>
//         </TableContainer>
//         {students?.length > 5 && (
//           <TablePagination
//             rowsPerPageOptions={[5, 10, 25]}
//             component="div"
//             count={students.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onChangePage={handleChangePage}
//             onChangeRowsPerPage={handleChangeRowsPerPage}
//           />
//         )}
//       </Paper>
//     </div>
//   );
// }