// import React, { useState, useEffect } from "react";
// import moment from "moment";
// import axios from "../../store/axios";
// import ListTable from "../../AdminComponents/shared/ListTable";

// let thismonth = moment().month();
// let thisyear = moment().year();
// let dayOne = moment(`01/${thismonth}/${thisyear}`).format("YYYY-MM-DD");

// const tableHeader = [
//   { id: "createdAt", name: "date" },
//   { id: "activity", name: "Activity" },
//   { id: "user", name: "User" },
// ];

// function ActivityTabs() {
//   const [from, setfrom] = useState(dayOne);
//   const [to, setto] = useState(moment().format("YYYY-MM-DD"));
//   const [loading, setloading] = useState(false);
//   const [data, setdata] = useState([]);

//   useEffect(() => {
//     axios.get("/activitylog").then((res) => setdata(res.data));
//   }, []);

//   const handleSearch = (e) => {
//     setloading(true);
//     e.preventDefault();
//     setloading(false);
//   };

//   const handleDelete = (id) => {
//     axios.delete(`/activitylog/delete/${id}`).then((res) => {
//       setdata(data.filter((i) => i._id !== id));
//     });
//   };

//   return (
//     <div>
//       <h3>Activity Logs</h3>
//       <form action="" className="row mb-3 content__container d-flex" style={{ backgroundColor: "#fffff7" }}>
//         <div className="col-sm-6 col-md-4 mb-3">
//           <label htmlFor="name" className=" col-form-label">
//             From
//           </label>
//           <div className="å">
//             <input
//               value={from}
//               style={{ backgroundColor: "#fffffa" }}
//               onChange={(e) => setfrom(e.target.value)}
//               type="date"
//               className="form-control"
//               name="from"
//             />
//           </div>
//         </div>
//         <div className="col-sm-6 col-md-4 mb-3">
//           <label htmlFor="name" className=" col-form-label">
//             To
//           </label>
//           <div className="">
//             <input
//               style={{ backgroundColor: "#fffffa" }}
//               value={to}
//               onChange={(e) => setto(e.target.value)}
//               type="date"
//               className="form-control"
//               name="to"
//             />
//           </div>
//         </div>
//         <div className="mb-3">
//           <button
//             onClick={handleSearch}
//             disabled={loading}
//             type="submit"
//             className="btn red__btn"
//           >
//             {loading && (
//               <span
//                 className="spinner-border spinner-border-sm"
//                 role="status"
//                 aria-hidden="true"
//               ></span>
//             )}
//             Search
//           </button>
//         </div>
//       </form>

//       <div>
//         <ListTable
//           handleDelete={handleDelete}
//           data={data}
//           tableHeader={tableHeader}
//           isEdit={true}
//         />
//       </div>
//     </div>
//   );
// }

// export default ActivityTabs;

import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "../../store/axios";
import ListTable from "../../AdminComponents/shared/ListTable";

let thismonth = moment().month();
let thisyear = moment().year();
let dayOne = moment(`01/${thismonth}/${thisyear}`).format("YYYY-MM-DD");

const tableHeader = [
  { id: "createdAt", name: "Date" },
  { id: "activity", name: "Activity" },
  { id: "user", name: "User" },
];

function ActivityTabs() {
  const [from, setfrom] = useState(dayOne);
  const [to, setto] = useState(moment().format("YYYY-MM-DD"));
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get("/activitylog").then((res) => setdata(res.data));
  }, []);

  const handleSearch = (e) => {
    setloading(true);
    e.preventDefault();
    setloading(false);
  };

  const handleDelete = (id) => {
    axios.delete(`/activitylog/delete/${id}`).then((res) => {
      setdata(data.filter((i) => i._id !== id));
    });
  };

  return (
    <div>
      <h3>Activity Logs</h3>
      <form
        action=""
        className="row mb-3 align-items-center content__container"
        style={{ backgroundColor: "#fffff7" }}
      >
        <div className="col-md-3 mb-3">
          <label htmlFor="from" className="col-form-label">
            From
          </label>
          <input
            value={from}
            style={{ backgroundColor: "#fffffa" }}
            onChange={(e) => setfrom(e.target.value)}
            type="date"
            className="form-control"
            name="from"
          />
        </div>

        <div className="col-md-3 mb-3">
          <label htmlFor="to" className="col-form-label">
            To
          </label>
          <input
            style={{ backgroundColor: "#fffffa" }}
            value={to}
            onChange={(e) => setto(e.target.value)}
            type="date"
            className="form-control"
            name="to"
          />
        </div>

        <div className="col-md-3 mb-3">
          <button
            onClick={handleSearch}
            disabled={loading}
            type="submit"
            className="btn red__btn"
            style={{ marginTop: "32px" }} // To align with inputs
          >
            {loading && (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            )}
            Search
          </button>
        </div>
      </form>

      <div>
        <ListTable
          handleDelete={handleDelete}
          data={data}
          tableHeader={tableHeader}
          isEdit={true}
        />
      </div>
    </div>
  );
}

export default ActivityTabs;
