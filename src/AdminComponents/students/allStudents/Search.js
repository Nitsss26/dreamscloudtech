// import React from "react";

// function Search(props) {
//   let {
//     inputFields,
//     title,
//     handleSearch,
//     isReset,
//     handleReset,
//     noActions,
//   } = props;

//   return (
//     <form className="mb-5 content__container">
//       <h3 className="mb-3">{title || ""}</h3>
//       <div className="row g-3 mb-3">
//         {inputFields &&
//           inputFields.map((input) => {
//             return (
//               <div key={input?.name} className="col-xs-12 col-sm-2">
//                 <label htmlFor="">{input.label}</label>
//                 {input.type === "select" ? (
//                   <select
//                     value={input?.value}
//                     name={input?.name}
//                     onChange={(e) => input?.onChange(e.target.value)}
//                     className="form-select form-select-sm py-2"
//                   >
//                     <option hidden defaultValue>
//                       Select
//                     </option>
//                     {input?.options.length > 0 ? (
//                       input?.options.map((option) => (
//                         <option key={option.id} value={option.id}>
//                           {option.name}
//                         </option>
//                       ))
//                     ) : (
//                       <option disabled>No data </option>
//                     )}
//                   </select>
//                 ) : (
//                   <input
//                     type={input.type}
//                     value={input.value}
//                     name={input?.name}
//                     className="form-control py-3"
//                     placeholder={`Search by ${input.name}`}
//                     onChange={(e) => input?.onChange(e.target.value)}
//                   />
//                 )}
//               </div>
//             );
//           })}
//         {!noActions && (
//           <div className="col-xs-12 d-flex  mt-2">
//             <div className="mb-3">
//               <button className="btn orange__btn mr-3" onClick={handleSearch}>
//                 Search
//               </button>
//             </div>
//             {!isReset && (
//               <div className=" mb-3">
//                 <button onClick={handleReset} className="btn blue__btn ">
//                   Reset
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </form>
//   );
// }

// export default Search;

import React, { useState, useEffect } from "react";
import axios from "../../../store/axios";
import { selectClasses } from "../../../store/slices/schoolSlice";
import { useSelector } from "react-redux";
import { pdf } from "../../../components/tables/pdf";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";

function Search(props) {
  const {
    inputFields,
    title,
    handleSearch,
    isReset,
    handleReset,
    noActions,
  } = props;

  const [name, setname] = useState("");
  const [id, setid] = useState("");
  const [classID, setclass] = useState("");
  const [status, setstatus] = useState("");
  const [students, setstudents] = useState([]);
  const [gender, setgender] = useState("");
  const classes = useSelector(selectClasses);
  const [storeData, setstoreData] = useState([]);
  const [loading, setloading] = useState(false);

  const classesOptions = classes.map((e) => ({
    name: e.name,
    id: e.classCode,
  }));

  useEffect(() => {
    setloading(true);
    axios.get("/students").then((res) => {
      setloading(false);
      setstudents(res.data);
      setstoreData(res.data);
    });
  }, []);

  const generatePDF = () => {
    const headers = [
      { key: "userID", label: "UserID" },
      { key: "name", label: "Name" },
      { key: "middleName", label: "Middle Name" },
      { key: "surname", label: "SurName" },
      { key: "gender", label: "Gender" },
      { key: "status", label: "Fee Status" },
      { key: "classID", label: "Class" },
    ];

    pdf({ data: students, headers, filename: "Allstudents" });
  };

  return (
    <form className="mb-0 content__container">
      <h3 className="mb-3">{title || ""}</h3>
      <div className="d-flex justify-content-between mb-3">
        <div className="d-flex align-items-center">
          <Link
            className="btn btn-danger text-white me-3"
            to="/students/new"
            style={{ backgroundColor: '#fa6767', border: 'none' }} // Red background
          >
            <AddIcon /> Add Student
          </Link>
        </div>
        {!noActions && (
          <div className="d-flex align-items-center gap-2">
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
              style={{ backgroundColor: '#42d29d', color: '#fff' }} // Green background
            >
              ↓ Download PDF
            </button>
          </div>
        )}
      </div>
      <div className="row g-3">
        {inputFields &&
          inputFields.map((input) => (
            <div key={input?.name} className="col-xs-12 col-sm-3 mb-2">
              <label htmlFor={input?.name} className="form-label">
                {input.label}
              </label>
              {input.type === "select" ? (
                <select
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
    </form>
  );
}

export default Search;
