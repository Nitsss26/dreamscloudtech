// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "../../store/axios";
// // import { selectClasses } from "../../../store/slices/schoolSlice";
// // import { useSelector } from "react-redux";
// import { pdf } from "../../components/tables/pdf";
// import { Link } from "react-router-dom";
// import AddIcon from "@material-ui/icons/Add";


// function Search(props) {
//   let {
//     inputFields,
//     title,
//     handleSearch,
//     isReset,
//     handleReset,
//     noActions,
//   } = props;

//   const [name, setname] = useState("");
//   const [userID, setuserID] = useState("");
//   const [staff, setstaff] = useState([]);
//   const [storeData, setstoreData] = useState([]);
//   const [loading, setloading] = useState(false);

//   useEffect(() => {
//     setloading(true);
//     axios
//       .get("/teachers")
//       .then((res) => {
//         setloading(false);
//         setstaff(res.data);
//         setstoreData(res.data);
//       })
//       .catch((err) => {
//         setloading(false);
//       });
//   }, []);

//   const generatePDF = () => {
//     const headers = [
//       { key: "userID", label: "UserID" },
//       { key: "name", label: "Name" },
//       // { key: "middleName", label: "Middle Name" },
//       { key: "surname", label: " SurName" },
//       { key: "gender", label: "Gender" },
//       { key: "position", label: "Position" },
//     ];

//     pdf({ data: staff, headers, filename: "AllStaff" });
//   };


//   return (
//     <form className="mb-0 content__container">
//       <h3 className="mb-3">{title || ""}</h3>
//       <div className="d-flex justify-content-between mb-3">
//         <div className="d-flex align-items-center">
//           <Link
//             className="btn btn-danger text-white me-3"
//             to="/staff/new"
//             style={{ backgroundColor: '#fa6767', border: 'none' }} // Red background
//           >
//             +Add Staff
//           </Link>
//           <Link
//             className="btn btn-danger text-white me-3"
//             to="/staff/new"
//             style={{ backgroundColor: '#42d29d', border: 'none' }} // Red background
//           >
//             Import
//           </Link>
//         </div>
//         {!noActions && (
//           <div className="d-flex align-items-center gap-2">
//             <button
//               className="btn orange__btn"
//               type="button"
//               onClick={handleSearch}
//             >
//               Search
//             </button>
//             {!isReset && (
//               <button
//                 className="btn blue__btn"
//                 type="button"
//                 onClick={handleReset}
//               >
//                 Reset
//               </button>
//             )}
//             <button
//               onClick={generatePDF}
//               className="btn"
//               style={{ backgroundColor: '#42d29d', color: '#fff' }} // Green background
//             >
//               ↓ Download PDF
//             </button>
//           </div>
//         )}
//       </div>
//       <div className="row g-3">
//         {inputFields &&
//           inputFields.map((input) => (
//             <div key={input?.name} className="col-xs-12 col-sm-3 mb-2">
//               <label htmlFor={input?.name} className="form-label">
//                 {input.label}
//               </label>
//               {input.type === "select" ? (
//                 <select
//                   value={input?.value}
//                   name={input?.name}
//                   onChange={(e) => input?.onChange(e.target.value)}
//                   className="form-select form-select-sm py-2"
//                 >
//                   <option hidden defaultValue>
//                     Select
//                   </option>
//                   {input?.options.length > 0 ? (
//                     input?.options.map((option) => (
//                       <option key={option.id} value={option.id}>
//                         {option.name}
//                       </option>
//                     ))
//                   ) : (
//                     <option disabled>No data</option>
//                   )}
//                 </select>
//               ) : (
//                 <input
//                   type={input.type}
//                   value={input.value}
//                   name={input?.name}
//                   className="form-control py-3"
//                   placeholder={`Search by ${input.name}`}
//                   onChange={(e) => input?.onChange(e.target.value)}
//                 />
//               )}
//             </div>
//           ))}
//       </div>
//     </form>
//   );
// }

// export default Search;

import React, { useState, useEffect } from "react";
import axios from "../../store/axios";
import { pdf } from "../../components/tables/pdf";
import { Link } from "react-router-dom";

function Search(props) {
  const {
    inputFields,
    title,
    handleSearch,
    isReset,
    handleReset,
    noActions,
  } = props;

  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/teachers")
      .then((res) => {
        setLoading(false);
        setStaff(res.data);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const generatePDF = () => {
    const headers = [
      { key: "userID", label: "UserID" },
      { key: "name", label: "Name" },
      { key: "surname", label: "SurName" },
      { key: "gender", label: "Gender" },
      { key: "position", label: "Position" },
    ];

    pdf({ data: staff, headers, filename: "AllStaff" });
  };

  return (
    <form className="mb-0 content__container" style={{ backgroundColor: "#fffff7" }}>
      <h3 className="mb-">{title || ""}</h3>
      <div className="d-flex align-items-center mb-4">
        <div className="d-flex align-items-center gap-2 me-3 mt-4">
          <Link
            className="btn text-white"
            to="/staff/new"
            style={{ backgroundColor: '#fa6767', border: 'none' }}
          >
            +Add Staff
          </Link>
          <Link
            className="btn text-white"
            to="/staff/new"
            style={{ backgroundColor: '#42d29d', border: 'none' }}
          >
            Import
          </Link>
        </div>
        <div className="d-flex align-items-center gap-2 flex-grow-1">
          {inputFields &&
            inputFields.map((input) => (
              <div key={input?.name} className="flex-grow-1 me-2">
                <label htmlFor={input?.name} className="form-label">
                  {input.label}
                </label>
                {input.type === "select" ? (
                  <select
                    style={{ backgroundColor: "#fffffa" }}
                    value={input?.value}
                    name={input?.name}
                    onChange={(e) => input?.onChange(e.target.value)}
                    className="form-select form-select-sm py-2"
                  >
                    <option hidden defaultValue>
                      Select
                    </option>
                    {input?.options.length > 0 ? (
                      input?.options.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))
                    ) : (
                      <option disabled>No data</option>
                    )}
                  </select>
                ) : (
                  <input
                    style={{ backgroundColor: "#fffffa" }}
                    type={input.type}
                    value={input.value}
                    name={input?.name}
                    className="form-control py-3"
                    placeholder={`Search by ${input.name}`}
                    onChange={(e) => input?.onChange(e.target.value)}
                  />
                )}
              </div>
            ))}
        </div>
        {!noActions && (
          <div className="d-flex align-items-center gap-2 mt-4">
            <button
              className="btn orange__btn"
              type="button"
              onClick={handleSearch}
            >
              Search
            </button>
            {!isReset && (
              <button
                className="btn blue__btn"
                type="button"
                onClick={handleReset}
              >
                Reset
              </button>
            )}
            <button
              onClick={generatePDF}
              className="btn"
              style={{ backgroundColor: '#42d29d', color: '#fff' }}
            >
              ↓ Download PDF
            </button>
          </div>
        )}
      </div>
    </form>
  );
}

export default Search;
