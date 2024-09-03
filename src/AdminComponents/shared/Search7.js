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
//     <form className="mb-0 content__container">
//       <div className="row">
//         <div className="col-6 justify-content-end">
//           <h3 className="mb-3">{title || ""}</h3>
//         </div>
//         <div className="col-6">
//           <div className="row g-3 mb-3">
//             {inputFields &&
//               inputFields.map((input) => {
//                 return (
//                   <div key={input?.name} className="col-xs-12 col-sm-6 col-md-4">
//                     <label htmlFor="">{input.label}</label>
//                     {input.type === "select" ? (
//                       <select
//                         value={input?.value}
//                         name={input?.name}
//                         onChange={(e) => input?.onChange(e.target.value)}
//                         className="form-select form-select-sm py-2"
//                       >
//                         <option hidden defaultValue>
//                           Select
//                         </option>
//                         {input?.options.length > 0 ? (
//                           input?.options.map((option) => (
//                             <option key={option.id} value={option.id}>
//                               {option.name}
//                             </option>
//                           ))
//                         ) : (
//                           <option disabled>No data </option>
//                         )}
//                       </select>
//                     ) : (
//                       <input
//                         type={input.type}
//                         value={input.value}
//                         name={input?.name}
//                         className="form-control py-3"
//                         placeholder={`Search by ${input.name}`}
//                         onChange={(e) => input?.onChange(e.target.value)}
//                       />
//                     )}
//                   </div>
//                 );
//               })}
//             {!noActions && (
//               <div className="col-xs-12 col-sm-6 col-md-4 d-flex mt-5">
//                 <div className="mb-3">
//                   <button className="btn orange__btn " onClick={handleSearch}>
//                     Search
//                   </button>
//                 </div>
//                 {!isReset && (
//                   <div className=" mb-3 ml-3">
//                     <button onClick={handleReset} className="btn blue__btn ">
//                       Reset
//                     </button>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// }

// export default Search;


import React from "react";

function Search(props) {
  let {
    inputFields,
    title,
    handleSearch,
    isReset,
    handleReset,
    noActions,
  } = props;

  return (
    <form className="mb-0 content__container" style={{ backgroundColor: "#fffff7" }}>
      <div className="d-flex align-items-center justify-content-center" style={{ marginLeft: "100px" }}>
        {/* Title */}
        <h3 className="mb-0 me-3">{title || ""}</h3>

        {/* Input Fields */}
        {inputFields &&
          inputFields.map((input) => (
            <div key={input?.name} className="mx-2 mb-4" >
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

        {/* Actions: Search and Reset Buttons */}
        {!noActions && (
          <div className="d-flex align-items-center ms-3">
            <button className="btn orange__btn me-2" onClick={handleSearch}>
              Search
            </button>
            {!isReset && (
              <button onClick={handleReset} className="btn red__btn">
                Reset
              </button>
            )}
          </div>
        )}
      </div>
    </form>
  );
}

export default Search;
