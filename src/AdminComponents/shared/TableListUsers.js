import React from "react";
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
import { useHistory } from "react-router-dom";
import TableHeader from "./TableHeader";
import { getImgSrc, getIntial } from "../../utils";
import ViewActions from "./ViewOptions";

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
    marginBottom: theme.spacing(2),
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
    overflow: "visible",
    fontFamily: "'Baskerville', serif",
    padding: "16px",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#444",
    textAlign: "center",
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
    padding: "16px",
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
    backgroundColor: "#01a6ca", // Header background color
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
}));

export default function EnhancedTable({
  students,
  headCells,
  route,
  handleWithdraw,
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
  const history = useHistory();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = students.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
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
          >
            <TableHeader
              className={classes.stickyHeader}
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
            {students?.length > 0 ? (
              <TableBody>
                {stableSort(students, getComparator(order, orderBy))
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  ?.map((row, index) => {
                    const isItemSelected = isSelected(row?.userID);
                    const labelId = `enhanced-table-checkbox-${index}`;
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.userID}
                        selected={isItemSelected}
                        className={classes.tableRow}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            onClick={(event) => handleClick(event, row?.userID)}
                            checked={isItemSelected}
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </TableCell>
                        <TableCell align="center" className={classes.tableCell}>
                          <Avatar
                            src={`${getImgSrc(row?.profileUrl)}`}
                            alt={getIntial(row?.name)}
                          />
                        </TableCell>
                        <TableCell align="center" id={labelId} className={classes.tableCell}>
                          {row?.userID || "-"}
                        </TableCell>
                        <TableCell align="center" className={classes.tableCell}>
                          {row?.classID || "-"}
                        </TableCell>
                        <TableCell align="center" className={classes.tableCell}>{row?.name}</TableCell>
                        <TableCell align="center" className={classes.tableCell}>
                          {row?.surname || "-"}
                        </TableCell>
                        <TableCell align="center" className={classes.tableCell}>
                          {row?.status || row?.position}
                        </TableCell>
                        <TableCell align="center" className={classes.tableCell}>{row?.gender || "-"}</TableCell>
                        {!noActions && (
                          <TableCell align="center" className={classes.tableCell}>
                            <ViewActions
                              id={row?.userID}
                              route={route}
                              isWithdraw={row?.withdraw}
                              history={history}
                              handleWithdraw={handleWithdraw}
                              handleDelete={handleDelete}
                            />
                          </TableCell>
                        )}
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={headCells.length + 2} />
                  </TableRow>
                )}
              </TableBody>
            ) : (
              <TableBody>
                <TableRow>
                  <TableCell
                    className={classes.noDataCell}
                    colSpan={headCells.length + 2}
                  >
                    {noData || "NO DATA"}
                  </TableCell>
                </TableRow>
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={headCells.length + 2} />
                  </TableRow>
                )}
              </TableBody>
            )}
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={students?.length || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          style={{ color: "#333" }}
        />
      </Paper>
    </div>
  );
}
