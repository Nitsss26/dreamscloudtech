// import React from "react";
// import PropTypes from "prop-types";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import TableSortLabel from "@material-ui/core/TableSortLabel";
// import Checkbox from "@material-ui/core/Checkbox";

// function EnhancedTableHead(props) {
//   const {
//     classes,
//     onSelectAllClick,
//     order,
//     orderBy,
//     numSelected,
//     headCells,
//     noActions,
//     rowCount,
//     onRequestSort,
//   } = props;

//   const createSortHandler = (property) => (event) => {
//     onRequestSort(event, property);
//   };

//   return (
//     <>
//       <TableHead>
//         <TableRow>
//           <TableCell padding="checkbox" style={{ backgroundColor: "#eef2f7" }}>
//             <Checkbox
//               indeterminate={numSelected > 0 && numSelected < rowCount}
//               checked={rowCount > 0 && numSelected === rowCount}
//               onChange={onSelectAllClick}
//               inputProps={{ "aria-label": "select all desserts" }}

//             />
//           </TableCell>
//           {headCells.map((headCell) => (
//             <TableCell
//               key={headCell.id}
//               align="left"
//               padding="checkbox"
//               style={{ backgroundColor: "#eef2f7" }}
//               sortDirection={orderBy === headCell.id ? order : false}
//             >
//               <TableSortLabel
//                 active={orderBy === headCell.id}
//                 direction={orderBy === headCell.id ? order : "asc"}
//                 onClick={createSortHandler(headCell.id)}
//               >
//                 {headCell.label}
//                 {orderBy === headCell.id ? (
//                   <span className={classes.visuallyHidden}>
//                     {order === "desc"
//                       ? "sorted descending"
//                       : "sorted ascending"}
//                   </span>
//                 ) : null}
//               </TableSortLabel>
//             </TableCell>
//           ))}
//           {!noActions && <TableCell padding="checkbox" style={{ backgroundColor: "#eef2f7" }}>Actions</TableCell>}
//         </TableRow>
//       </TableHead>
//     </>
//   );
// }

// EnhancedTableHead.propTypes = {
//   classes: PropTypes.object.isRequired,
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(["asc", "desc"]).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

// export default EnhancedTableHead;


import React from "react";
import PropTypes from "prop-types";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tableHeadCell: {
    backgroundColor: "#01a6ca",
    color: "#fff",
    fontFamily: "'Times New Roman', serif",
    fontWeight: "bold",
    // textAlign: "center",
  },
  tableSortLabel: {
    color: "#fff !important",  // Ensure the text remains white when sorting
    "&:hover": {
      color: "#fff",  // Keep the hover color white
    },
    "&.Mui-active": {
      color: "#fff",  // Keep the active (sorted) color white
    },
    "& .MuiTableSortLabel-icon": {
      color: "#fff !important",  // Ensure the sort icon is also white
    },
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
}));

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    headCells,
    noActions,
    rowCount,
    onRequestSort,
  } = props;

  const classes = useStyles();

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox" className={classes.tableHeadCell}>
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all items" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding="checkbox"
            className={classes.tableHeadCell}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
              className={classes.tableSortLabel}  // Apply custom sort label styles
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        {!noActions && (
          <TableCell padding="checkbox" className={classes.tableHeadCell}>
            Actions
          </TableCell>
        )}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  headCells: PropTypes.array.isRequired,
  noActions: PropTypes.bool,
};

export default EnhancedTableHead;
