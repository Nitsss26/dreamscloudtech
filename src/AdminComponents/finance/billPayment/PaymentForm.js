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



import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { bankOptions } from "../../../data";
import { currentCurrency } from "../../../utils";

function PaymentForm({
  applyTo,
  setapplyTo,
  bank,
  setbank,
  setchequeNo,
  chequeNo,
  amount,
  setamount,
  remarks,
  setremarks,
  loading,
  handlePayement,
  balance,
  date,
  setdate,
  paymentType,
  setpaymentType,
  scholarship,
}) {
  const { register, handleSubmit, errors } = useForm();

  const handleSelectall = (e) => {
    setapplyTo({
      all: !applyTo?.all,
      tuition: !applyTo?.all,
      examination: !applyTo?.all,
      facility: !applyTo?.all,
      maintanance: !applyTo?.all,
    });
  };

  const [showCheck, setshowCheck] = useState(false);
  return (
    <div className="content__container">
      <form action="">
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">Fees Due</label>
          <div className="col-md-6">
            <div className="input-group">
              <div className="input-group-text">{currentCurrency()}</div>
              <input
                type="number"
                value={balance}
                readOnly
                className="form-control"
                name="amount"
              />
            </div>
          </div>
          <div className="col-md-3">
            <button
              type="button"
              onClick={() => setamount(balance)}
              className="btn blue__btn"
            >
              Pay All
            </button>
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">Amount</label>
          <div className="col-sm-9">
            <div className="input-group">
              <div className="input-group-text">{currentCurrency()}</div>
              <input
                type="number"
                ref={register({ required: true, max: balance + 1 })}
                value={amount}
                onChange={(e) => setamount(e.target.value)}
                className="form-control"
                name="amount"
                placeholder="Enter amount in $"
              />
            </div>

            {errors.amount && (
              <div className="text-danger">
                Amount is required and it should not be above {balance}{" "}
              </div>
            )}
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">Date Paid</label>
          <div className="col-sm-9">
            <input
              type="date"
              value={date}
              ref={register({ required: true })}
              onChange={(e) => setdate(e.target.value)}
              className="form-control"
              name="date"
            />
            {errors.date && (
              <div className="text-danger">This field is required</div>
            )}
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">
            Apply to Billed items(s)
          </label>
          <div className="col-sm-9">
            <div className="selectBox">
              <select
                onClick={() => setshowCheck(!showCheck)}
                className="form-select"
              >
                <option hidden>Select options</option>
              </select>
              {showCheck && (
                <div className="showcheckboxes px-3">
                  <>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        onChange={handleSelectall}
                        checked={applyTo?.all}
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                      />
                      <label className="form-check-label">Select All</label>
                    </div>
                    <hr />
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="exampleRadios"
                        value="option1"
                        onChange={() =>
                          setapplyTo({ ...applyTo, tuition: !applyTo?.tuition })
                        }
                        checked={applyTo?.tuition}
                      />
                      <label className="form-check-label">Tuition Fee</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="option1"
                        name="exampleRadios"
                        onChange={() =>
                          setapplyTo({
                            ...applyTo,
                            examination: !applyTo?.examination,
                          })
                        }
                        checked={applyTo?.examination}
                      />
                      <label className="form-check-label">
                        Examination Fee
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="exampleRadios"
                        value="option1"
                        onChange={() =>
                          setapplyTo({
                            ...applyTo,
                            maintanance: !applyTo?.maintanance,
                          })
                        }
                        checked={applyTo?.maintanance}
                      />
                      <label className="form-check-label">
                        Maintenance Fee
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="exampleRadios"
                        value="option1"
                        onChange={() =>
                          setapplyTo({
                            ...applyTo,
                            facility: !applyTo?.facility,
                          })
                        }
                        checked={applyTo?.facility}
                      />
                      <label className="form-check-label">Transport Fee</label>
                    </div>
                  </>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">Payment Type</label>
          <div className="col-sm-9">
            <select
              value={paymentType}
              ref={register({ required: true })}
              onChange={(e) => setpaymentType(e.target.value)}
              name="students"
              className="form-select"
            >
              <option hidden defaultValue>
                Choose...
              </option>
              <option value="cash">Cash</option>
              <option value="cheque">Cheque</option>
              <option value="bank-deposit">Bank Deposit</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        {paymentType === "bank-deposit" && (
          <div className=" mb-3">
            <label className=" col-form-label">Bank</label>
            <div className="">
              <select
                value={bank}
                ref={register({ required: true })}
                onChange={(e) => setbank(e.target.value)}
                name="students"
                className="form-select"
              >
                <option hidden defaultValue>
                  Choose...
                </option>
                {bankOptions &&
                  bankOptions.map((e) => (
                    <option key={e} value={e}>
                      {e}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        )}
        {paymentType === "cheque" && (
          <>
            <div className=" mb-3">
              <label className=" col-form-label">Bank</label>
              <div className="">
                <select
                  value={bank}
                  ref={register({ required: true })}
                  onChange={(e) => setbank(e.target.value)}
                  name="students"
                  className="form-select"
                >
                  <option hidden defaultValue>
                    Choose...
                  </option>
                  {bankOptions &&
                    bankOptions.map((e) => (
                      <option key={e} value={e}>
                        {e}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label className=" col-form-label">Cheque Number</label>
              <div className="">
                <input
                  type="text"
                  className="form-control"
                  value={chequeNo}
                  onChange={(e) => setchequeNo(e.target.value)}
                  name="cheque"
                />
              </div>
            </div>
          </>
        )}
        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">Remarks</label>
          <div className="col-sm-9">
            <textarea
              rows={5}
              className="form-control"
              value={remarks}
              onChange={(e) => setremarks(e.target.value)}
              name="remarks"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-9 offset-sm-3">
            <button
              disabled={loading}
              onClick={handleSubmit(handlePayement)}
              className="btn blue__btn"
            >
              {loading && (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              )}
              Record Payment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PaymentForm;
