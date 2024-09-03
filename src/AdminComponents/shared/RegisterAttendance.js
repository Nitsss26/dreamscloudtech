// import React from 'react';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';



// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     // backgroundColor: "#051f3e",
//     backgroundColor: "#01a6ca",
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//     fontWeight: "bold",
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     "&:nth-of-type(odd)": {
//       backgroundColor: "#f0f8ff", // Alternate row color for odd rows
//     },
//     "&:nth-of-type(even)": {
//       backgroundColor: "#fffff9", // Alternate row color for even rows
//     },
//   },
// }))(TableRow);

// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
// });


// export default function CustomizedTables({
//   isStaff,
//   handleResetAttendance,
//   attendanceData,
//   setattendanceData,
//   loading,
//   handleRegister,
//   isClass,
//   isEdit }) {
//   const classes = useStyles();

//   const registerStudent = (id) => {
//     let objIndex = attendanceData.findIndex((data => data.userID === id));
//     let updatedObj = { ...attendanceData[objIndex], status: !attendanceData[objIndex].status };
//     const updatedProjects = [
//       ...attendanceData.slice(0, objIndex),
//       updatedObj,
//       ...attendanceData.slice(objIndex + 1),
//     ];
//     setattendanceData(updatedProjects)
//   }

//   const handleReset = () => {
//     console.log("reset")
//     const newData = (attendanceData?.map(data => {
//       return { ...data, status: false }
//     }))
//     console.log(newData);
//     setattendanceData(newData)
//   }

//   return (
//     <>
//       <TableContainer component={Paper} >
//         <Table className={classes.table} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell align="left"> {isStaff ? "Staff ID" : "Student ID"}</StyledTableCell>
//               <StyledTableCell align="left">Name</StyledTableCell>
//               <StyledTableCell align="left">Last Name</StyledTableCell>
//               <StyledTableCell align="left">Status</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {attendanceData?.length > 0 ? attendanceData.map((row) => (
//               <StyledTableRow key={row?.userID}>
//                 <StyledTableCell >
//                   {row?.userID}
//                 </StyledTableCell>
//                 <StyledTableCell >
//                   {row?.name}
//                 </StyledTableCell>
//                 <StyledTableCell>
//                   {row?.surname}
//                 </StyledTableCell>
//                 <StyledTableCell>
//                   <div className="form-check">
//                     <input style={{ backgroundColor: " #fffff9" }}
//                       onChange={() => registerStudent(row?.userID)}
//                       className="form-check-input"
//                       type="checkbox"
//                       value={row?.status}
//                       id="flexCheckChecked"
//                       checked={row?.status} />
//                   </div>
//                 </StyledTableCell>
//               </StyledTableRow>
//             )) : <div className="p-3"> {isStaff ? "No Staff data" : "No students in this class"}</div>
//             }
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <div className="my-3 d-flex justify-content-end">
//         <div>
//           <button onClick={handleRegister} disabled={loading || !attendanceData?.length > 0} className="btn green__btn mr-2">
//             {loading && <span className="spinner-border spinner-border-sm" role="status" ></span>}
//             {isEdit ? "Submit" : "Save Changes"}
//           </button>
//           {isEdit ? <button onClick={handleResetAttendance} className="btn orange__btn">Cancel Changes</button> :
//             <button className="btn red__btn" onClick={handleReset}>Reset</button>}
//         </div>
//       </div>
//     </>
//   );
// }


import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#01a6ca",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    fontWeight: 500,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#f0f8ff", // Alternate row color for odd rows
    },
    "&:nth-of-type(even)": {
      backgroundColor: "#fffff9", // Alternate row color for even rows
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  checkbox: {
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    marginLeft: '10px', // Adjust as needed
  },
});

export default function CustomizedTables({
  isStaff,
  handleResetAttendance,
  attendanceData,
  setattendanceData,
  loading,
  handleRegister,
  isClass,
  isEdit
}) {
  const classes = useStyles();

  const registerStudent = (id) => {
    let objIndex = attendanceData.findIndex((data) => data.userID === id);
    let updatedObj = { ...attendanceData[objIndex], status: !attendanceData[objIndex].status };
    const updatedProjects = [
      ...attendanceData.slice(0, objIndex),
      updatedObj,
      ...attendanceData.slice(objIndex + 1),
    ];
    setattendanceData(updatedProjects);
  };

  const handleReset = () => {
    const newData = attendanceData?.map((data) => ({
      ...data,
      status: false,
    }));
    setattendanceData(newData);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">
                {isStaff ? "Staff ID" : "Student ID"}
              </StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Last Name</StyledTableCell>
              <StyledTableCell align="left">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendanceData?.length > 0 ? (
              attendanceData.map((row) => (
                <StyledTableRow key={row?.userID}>
                  <StyledTableCell>{row?.userID}</StyledTableCell>
                  <StyledTableCell>{row?.name}</StyledTableCell>
                  <StyledTableCell>{row?.surname}</StyledTableCell>
                  <StyledTableCell>
                    <div className="form-check">
                      <input
                        className={`${classes.checkbox} form-check-input`}
                        type="checkbox"
                        onChange={() => registerStudent(row?.userID)}
                        checked={row?.status}
                      />
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))
            ) : (
              <div className="p-3">
                {isStaff ? "No Staff data" : "No students in this class"}
              </div>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="my-3 d-flex justify-content-end">
        <div>
          <button
            onClick={handleRegister}
            disabled={loading || !attendanceData?.length > 0}
            className="btn green__btn mr-2"
          >
            {loading && (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
              ></span>
            )}
            {isEdit ? "Submit" : "Save Changes"}
          </button>
          {isEdit ? (
            <button
              onClick={handleResetAttendance}
              className="btn orange__btn"
            >
              Cancel Changes
            </button>
          ) : (
            <button className="btn red__btn" onClick={handleReset}>
              Reset
            </button>
          )}
        </div>
      </div>
    </>
  );
}
