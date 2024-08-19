// import React from "react";
// import { withStyles, makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import CheckIcon from "@material-ui/icons/Check";
// import EditIcon from "@material-ui/icons/Edit";
// import RemoveIcon from "@material-ui/icons/Remove";
// import moment from "moment";
// import { Link } from "react-router-dom";

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: "#051f3e",
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     "&:nth-of-type(odd)": {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);

// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
//   list: {
//     listStyle: "none",
//   },
//   iconSize: {
//     width: 20,
//     height: 20,
//   },
//   textDanger: {
//     color: "red",
//   },
// });

// export default function CustomizedTables({ attendanceData, isStaff, isClass, variData }) {
//   const classes = useStyles();

//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell align="left">Student ID</StyledTableCell>
//             <StyledTableCell align="left">ClassID</StyledTableCell>
//             <StyledTableCell align="left">Name</StyledTableCell>
//             <StyledTableCell align="left">Last Name</StyledTableCell>
//             <StyledTableCell align="left">Gender</StyledTableCell>
//             <StyledTableCell align="left">Status</StyledTableCell>
//             <StyledTableCell align="left">Attendance Report</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {attendanceData?.length > 0 ? (
//             attendanceData?.map((row,) => (
//               <StyledTableRow key={row._id}>
//                 <StyledTableCell align="left">{row?.userID}</StyledTableCell>
//                 <StyledTableCell align="left">{row?.classID}</StyledTableCell>
//                 <StyledTableCell align="left">{row?.name}</StyledTableCell>
//                 <StyledTableCell align="left">{row?.surname}</StyledTableCell>
//                 <StyledTableCell align="left">{row?.gender}</StyledTableCell>
//                 <StyledTableCell align="left">{row?.status}</StyledTableCell>
//                 <StyledTableCell>
//                   <div className="d-flex">
//                     {Array.apply(null, { length: row?.attendance }).map((e) => {
//                       return (
//                         <span className="px-2" key={e}>
//                           ✅
//                           {/* ❌ */}
//                         </span>
//                       );
//                     })}
//                   </div>
//                   <div>
//                     <strong className="px-5"> Present 0 out of {row?.attendance}</strong>
//                   </div>
//                 </StyledTableCell>
//               </StyledTableRow>
//             ))
//           ) : (
//             <div className="p-5"> No Students in this class </div>
//           )}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }


import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CheckIcon from "@material-ui/icons/Check";
import EditIcon from "@material-ui/icons/Edit";
import RemoveIcon from "@material-ui/icons/Remove";
import moment from "moment";
import { Link } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#051f3e",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  list: {
    listStyle: "none",
  },
  iconSize: {
    width: 20,
    height: 20,
  },
  textDanger: {
    color: "red",
  },
});

export default function CustomizedTables({ attendanceData, isStaff, isClass, variData }) {
  const classes = useStyles();

  // Function to get the attendance status for a particular period
  const getAttendanceStatus = (userID, periodName, index) => {
    const userAttendance = variData?.counts?.[userID] || {};
    const periodData = userAttendance?.[periodName] || {};
    return periodData?.trueIndices?.includes(index) ? "✅" : "❌";
  };

  // Function to get the present count for a particular period
  const getPresentCount = (userID, periodName) => {
    const userAttendance = variData?.counts?.[userID] || {};
    const periodData = userAttendance?.[periodName] || {};
    return periodData?.true || 0;
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Student ID</StyledTableCell>
            <StyledTableCell align="left">ClassID</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Last Name</StyledTableCell>
            <StyledTableCell align="left">Gender</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
            <StyledTableCell align="left">Attendance Report</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {attendanceData?.length > 0 ? (
            attendanceData?.map((row) => {
              // Calculate the number of days in the selected period
              const totalDays = variData.selectedPeriod === "today" ? 1 :
                variData.selectedPeriod === "yesterday" ? 2 :
                  variData.selectedPeriod === "week" ? 7 :
                    variData.selectedPeriod === "lastWeek" ? 7 :
                      variData.selectedPeriod === "last30Days" ? 30 :
                        variData.selectedPeriod === "lastMonth" ? 30 : 0;

              return (
                <StyledTableRow key={row._id}>
                  <StyledTableCell align="left">{row?.userID}</StyledTableCell>
                  <StyledTableCell align="left">{row?.classID}</StyledTableCell>
                  <StyledTableCell align="left">{row?.name}</StyledTableCell>
                  <StyledTableCell align="left">{row?.surname}</StyledTableCell>
                  <StyledTableCell align="left">{row?.gender}</StyledTableCell>
                  <StyledTableCell align="left">{row?.status}</StyledTableCell>
                  <StyledTableCell>
                    <div className="d-flex">
                      {Array.from({ length: totalDays }, (_, index) => {
                        // Adjust index based on selected period
                        const periodIndex = variData.selectedPeriod === "today" ? 1 :
                          variData.selectedPeriod === "yesterday" ? index + 1 :
                            variData.selectedPeriod === "week" ? index + 1 :
                              variData.selectedPeriod === "lastWeek" ? index + 1 :
                                variData.selectedPeriod === "last30Days" ? index + 1 :
                                  variData.selectedPeriod === "lastMonth" ? index + 1 : 0;
                        return (
                          <span className="px-2" key={index}>
                            {getAttendanceStatus(row?.userID, variData.selectedPeriod, periodIndex)}
                          </span>
                        );
                      })}
                    </div>
                    <div>
                      <strong className="px-5"> Present {getPresentCount(row?.userID, variData.selectedPeriod)} out of {row?.attendance}</strong>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })
          ) : (
            <div className="p-5"> No Students in this class </div>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
