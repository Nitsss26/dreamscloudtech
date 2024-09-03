// import React, { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import PrintIcon from "@material-ui/icons/Print";
// import axios from "../../../store/axios";
// //import { pdf } from "../../../components/tables/pdf";

// const useStyles = makeStyles({
//   table: {
//     width: "100%",
//   },
// });

// function getCapitalize(str) {
//   if (!str) return ''; // Handle empty or null strings
//   return str
//     .split(' ')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//     .join(' ');
// }
// function SbaTable({ rows, classID }) {
//   const classes = useStyles();
//   const [school, setschool] = useState([]);

//   useEffect(() => {
//     axios.get("/school").then((res) => {
//       setschool(res.data);
//     });
//   }, []);

//   const getTotal = (exams, work) => {
//     if (!work && !exams) {
//       return "-";
//     }
//     return Number(exams || 0) + Number(work || 0);
//   };

//   const getGrade = (classwork, exam) => {
//     if (!classwork && !exam) {
//       return "-";
//     }
//     let num = getTotal(classwork, exam);
//     if (num >= 75 && num <= 100) {
//       return "A1";
//     } else if (num >= 70 && num <= 74) {
//       return "B2";
//     } else if (num >= 65 && num <= 69) {
//       return "B3";
//     } else if (num >= 60 && num <= 64) {
//       return "C4";
//     } else if (num >= 55 && num <= 59) {
//       return "C5";
//     } else if (num >= 50 && num <= 54) {
//       return "C6";
//     } else if (num >= 45 && num <= 49) {
//       return "D7";
//     } else if (num >= 40 && num <= 44) {
//       return "E8";
//     } else if (num >= 0 && num <= 39) {
//       return "F9";
//     } else {
//       return null;
//     }
//   };

//   const getInterpretation = (classwork, exam) => {
//     if (!classwork && !exam) {
//       return "-";
//     }
//     let num = getTotal(classwork, exam);
//     num = Number(num);
//     if (num > 75 && num <= 100) {
//       return "Excellent";
//     } else if (num >= 70 && num <= 74) {
//       return "Vert good";
//     } else if (num >= 65 && num <= 69) {
//       return "Good";
//     } else if (num >= 60 && num <= 64) {
//       return "Credit";
//     } else if (num >= 55 && num <= 59) {
//       return "Credit";
//     } else if (num >= 50 && num <= 54) {
//       return "Credit";
//     } else if (num >= 45 && num <= 49) {
//       return "Pass";
//     } else if (num >= 40 && num <= 44) {
//       return "Pass";
//     } else if (num >= 0 && num <= 39) {
//       return "Failure";
//     } else {
//       return null;
//     }
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   return (
//     <div className="content__container" style={{ backgroundColor: "#fffff7" }}>
//       <button onClick={handlePrint} className="btn blue__btn float-right">
//         Print <PrintIcon />
//       </button>
//       <div className=" mb-3" id="section-to-print">
//         <div className="text-center" style={{ marginBottom: "20px" }}>
//           <h3>{school?.fullName}</h3>
//           <h4>
//             <strong>{school?.motto}</strong>
//           </h4>
//         </div>
//         <h5 className=" text-center mb-4 mt-2" style={{ marginRight: "80px", }}>Results For Class {classID ? classID.toUpperCase() : "N/A"}</h5>
//         <TableContainer className="mb-5" component={Paper}>
//           <Table className={classes.table} aria-label="spanning table">
//             <TableHead>
//               <TableRow>
//                 <TableCell align="left">Course</TableCell>
//                 <TableRow>
//                   <TableCell style={{ width: 160 }} align="left">
//                     Name of Student
//                   </TableCell>
//                   <TableCell style={{ width: 160 }} align="left">
//                     ClassWork (%)
//                   </TableCell>
//                   <TableCell style={{ width: 160 }} align="left">
//                     Exam (%)
//                   </TableCell>
//                   <TableCell style={{ width: 160 }} align="left">
//                     Total (%)
//                   </TableCell>
//                   <TableCell style={{ width: 160 }} align="left">
//                     Grade
//                   </TableCell>
//                   <TableCell style={{ width: 160 }} align="left">
//                     Interpretation
//                   </TableCell>
//                   <TableCell style={{ width: 160 }} align="left">
//                     Position
//                   </TableCell>
//                 </TableRow>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {rows?.map((row) => (
//                 <TableRow key={row?._id}>
//                   <TableCell>{getCapitalize(row?.course)}</TableCell>
//                   <TableCell align="left">
//                     {row?.students.map((user) => (
//                       <TableRow
//                         align="left"
//                         key={user?._id}
//                         className="table-borderless"
//                       >
//                         <TableCell style={{ width: 160 }}>
//                           {user?.name}
//                         </TableCell>
//                         <TableCell style={{ width: 160 }}>
//                           {user?.classWorkPercentage}
//                         </TableCell>
//                         <TableCell style={{ width: 160 }}>
//                           {user?.examPercentage || "-"}
//                         </TableCell>
//                         <TableCell style={{ width: 160 }}>
//                           {getTotal(
//                             user?.examPercentage,
//                             user?.classWorkPercentage
//                           )}
//                         </TableCell>
//                         <TableCell style={{ width: 160 }}>
//                           {getGrade(
//                             user?.examPercentage,
//                             user?.classWorkPercentage
//                           )}
//                         </TableCell>
//                         <TableCell style={{ width: 160 }}>
//                           {getInterpretation(
//                             user?.examPercentage,
//                             user?.classWorkPercentage
//                           )}
//                         </TableCell>
//                         <TableCell style={{ width: 160 }}>
//                           {user?.position}
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableCell>
//                 </TableRow>
//               ))}
//               {rows.length === 0 && (
//                 <TableRow>
//                   <TableCell colSpan={6} className="text-center text-danger">
//                     No data yet
//                   </TableCell>
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>
//     </div >
//   );
// }

// export default SbaTable;

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PrintIcon from "@material-ui/icons/Print";
import axios from "../../../store/axios";

const useStyles = makeStyles({
  table: {
    width: "100%",
  },
  tableHead: {
    backgroundColor: "#01a6ca",
    color: "#fff",
    fontFamily: "'Times New Roman', serif",
    fontWeight: "bold",
    fontSize: "16px",
  },
  tableCell: {
    fontSize: "14px",
    fontFamily: "'Baskerville', serif",
    fontWeight: "bold",
  },
  tableContainer: {
    borderRadius: "8px",
    backgroundColor: "#fffff5",
  },
  tableRowEven: {
    backgroundColor: "#f0f8ff",
  },
  tableRowOdd: {
    backgroundColor: "#fffff7",
  },
  noDataCell: {
    textAlign: "center",
    color: "#fa6767",
    fontFamily: "'Baskerville', serif",
    fontWeight: "bold",
  },
  courseNameCell: {
    borderRight: "1px solid #ccc",
    borderLeft: "1px solid #ccc" // Add this style to create a vertical line
  },
});

function getCapitalize(str) {
  if (!str) return ""; // Handle empty or null strings
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function SbaTable({ rows, classID }) {
  const classes = useStyles();
  const [school, setSchool] = useState([]);

  useEffect(() => {
    axios.get("/school").then((res) => {
      setSchool(res.data);
    });
  }, []);

  const getTotal = (exams, work) => {
    if (!work && !exams) {
      return "-";
    }
    return Number(exams || 0) + Number(work || 0);
  };

  const getGrade = (classwork, exam) => {
    if (!classwork && !exam) {
      return "-";
    }
    let num = getTotal(classwork, exam);
    if (num >= 75 && num <= 100) {
      return "A1";
    } else if (num >= 70 && num <= 74) {
      return "B2";
    } else if (num >= 65 && num <= 69) {
      return "B3";
    } else if (num >= 60 && num <= 64) {
      return "C4";
    } else if (num >= 55 && num <= 59) {
      return "C5";
    } else if (num >= 50 && num <= 54) {
      return "C6";
    } else if (num >= 45 && num <= 49) {
      return "D7";
    } else if (num >= 40 && num <= 44) {
      return "E8";
    } else if (num >= 0 && num <= 39) {
      return "F9";
    } else {
      return null;
    }
  };

  const getInterpretation = (classwork, exam) => {
    if (!classwork && !exam) {
      return "-";
    }
    let num = getTotal(classwork, exam);
    num = Number(num);
    if (num > 75 && num <= 100) {
      return "Excellent";
    } else if (num >= 70 && num <= 74) {
      return "Very good";
    } else if (num >= 65 && num <= 69) {
      return "Good";
    } else if (num >= 60 && num <= 64) {
      return "Credit";
    } else if (num >= 55 && num <= 59) {
      return "Credit";
    } else if (num >= 50 && num <= 54) {
      return "Credit";
    } else if (num >= 45 && num <= 49) {
      return "Pass";
    } else if (num >= 40 && num <= 44) {
      return "Pass";
    } else if (num >= 0 && num <= 39) {
      return "Failure";
    } else {
      return null;
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Group rows by course
  const groupedRows = rows.reduce((acc, row) => {
    const courseName = getCapitalize(row?.course);
    if (!acc[courseName]) {
      acc[courseName] = [];
    }
    acc[courseName].push(row);
    return acc;
  }, {});

  return (
    <div className="content__container" style={{ backgroundColor: "#fffff7" }}>
      <button onClick={handlePrint} className="btn blue__btn float-right">
        Print <PrintIcon />
      </button>
      <div className="mb-3" id="section-to-print">
        <div className="text-center" style={{ marginBottom: "20px" }}>
          <h3>{school?.fullName}</h3>
          <h4>
            <strong>{school?.motto}</strong>
          </h4>
        </div>
        <h5 className="text-center mb-4 mt-2" style={{ marginRight: "80px" }}>
          Results For Class {classID ? classID.toUpperCase() : "N/A"}
        </h5>
        <TableContainer
          className="mb-5"
          component={Paper}
          classes={{ root: classes.tableContainer }}
        >
          <Table className={classes.table} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="left" className={classes.tableHead}>
                  Course
                </TableCell>
                <TableCell
                  style={{ width: 160 }}
                  align="left"
                  className={classes.tableHead}
                >
                  Name of Student
                </TableCell>
                <TableCell
                  style={{ width: 160 }}
                  align="left"
                  className={classes.tableHead}
                >
                  ClassWork (%)
                </TableCell>
                <TableCell
                  style={{ width: 160 }}
                  align="left"
                  className={classes.tableHead}
                >
                  Exam (%)
                </TableCell>
                <TableCell
                  style={{ width: 160 }}
                  align="left"
                  className={classes.tableHead}
                >
                  Total (%)
                </TableCell>
                <TableCell
                  style={{ width: 160 }}
                  align="left"
                  className={classes.tableHead}
                >
                  Grade
                </TableCell>
                <TableCell
                  style={{ width: 160 }}
                  align="left"
                  className={classes.tableHead}
                >
                  Interpretation
                </TableCell>
                <TableCell
                  style={{ width: 130 }}
                  align="left"
                  className={classes.tableHead}
                >
                  Position
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(groupedRows).map((course, groupIndex) => (
                <React.Fragment key={course}>
                  {groupedRows[course].map((row, rowIndex) =>
                    row?.students.map((user, userIndex) => (
                      <TableRow
                        key={user?._id}
                        className={
                          groupIndex % 2 === 0
                            ? classes.tableRowEven
                            : classes.tableRowOdd
                        }
                      >
                        {/* Merge cells and conditionally render Course name */}
                        {userIndex === 0 && rowIndex === 0 && (
                          <TableCell
                            className={`${classes.tableCell} ${classes.courseNameCell}`} // Added the courseNameCell class
                            rowSpan={groupedRows[course].reduce(
                              (acc, r) => acc + r.students.length,
                              0
                            )}
                          >
                            {getCapitalize(row?.course)}
                          </TableCell>
                        )}
                        <TableCell
                          style={{ width: 160 }}
                          className={classes.tableCell}
                        >
                          {user?.name}
                        </TableCell>
                        <TableCell
                          style={{ width: 160 }}
                          className={classes.tableCell}
                        >
                          {user?.classWorkPercentage}
                        </TableCell>
                        <TableCell
                          style={{ width: 160 }}
                          className={classes.tableCell}
                        >
                          {user?.examPercentage || "-"}
                        </TableCell>
                        <TableCell
                          style={{ width: 160 }}
                          className={classes.tableCell}
                        >
                          {getTotal(user?.examPercentage, user?.classWorkPercentage)}
                        </TableCell>
                        <TableCell
                          style={{ width: 160 }}
                          className={classes.tableCell}
                        >
                          {getGrade(user?.examPercentage, user?.classWorkPercentage)}
                        </TableCell>
                        <TableCell
                          style={{ width: 160 }}
                          className={classes.tableCell}
                        >
                          {getInterpretation(user?.examPercentage, user?.classWorkPercentage)}
                        </TableCell>
                        <TableCell
                          style={{ width: 130 }}
                          className={classes.tableCell}
                        >
                          {user?.position || "-"}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default SbaTable;
