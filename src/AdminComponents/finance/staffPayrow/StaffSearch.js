import React from "react";
import { useSelector } from "react-redux";
import {
  selectStaff,
  selectYearGroup,
} from "../../../store/slices/schoolSlice";
import { monthYear } from "../../../data";

function SearchStudent({
  loading,
  userID,
  setuserID,
  setmonth,
  month,
  setyear,
  handleSearch,
  year,
}) {
  const staff = useSelector(selectStaff);
  const years = useSelector(selectYearGroup);

  return (
    <div className="content__container mb-3" style={{ backgroundColor: "#fffff7" }}>
      <h4>Search Staff</h4>
      <form action="">
        <div className="mb-3">
          <label className="form-label">Month</label>
          <select
            value={month}
            style={{ backgroundColor: "#fffffa" }}
            onChange={(e) => setmonth(e.target.value)}
            name="year"
            className="form-select"
          >
            <option hidden defaultValue>
              Choose...
            </option>
            {monthYear &&
              monthYear.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Year</label>
          <select
            style={{ backgroundColor: "#fffffa" }}
            value={year}
            onChange={(e) => setyear(e.target.value)}
            name="year"
            className="form-select"
          >
            <option hidden defaultValue>
              Choose...
            </option>
            {years &&
              years.map((e) => (
                <option key={e.year} value={e.year}>
                  {e.year}
                </option>
              ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Staff ID</label>
          <select
            style={{ backgroundColor: "#fffffa" }}
            value={userID}
            onChange={(e) => setuserID(e.target.value)}
            name="year"
            className="form-select"
          >
            <option hidden defaultValue>
              Choose...
            </option>
            {staff.length > 0 ? (
              staff.map((e) => (
                <option key={e.userID} value={e.userID}>
                  {e.name} {e.surname}
                </option>
              ))
            ) : (
              <option disabled>No data</option>
            )}
          </select>
        </div>
        <div>
          <button
            onClick={handleSearch}
            className="btn red__btn"
            disabled={loading}
          >
            {loading && <div className="spinner-border" role="status"></div>}
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchStudent;
