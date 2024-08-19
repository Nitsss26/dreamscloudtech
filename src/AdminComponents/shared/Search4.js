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
//       <h3 className="mb-3">{title || ""}</h3>
//       <div className="row g-3 mb-3">
//         {inputFields &&
//           inputFields.map((input) => {
//             return (
//               <div key={input?.name} className="col-xs-12 col-sm-6 col-md-4">
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
//           <div className="col-xs-12 col-sm-6 col-md-4 d-flex mt-5">
//             <div className="mb-3">
//               <button className="btn orange__btn " onClick={handleSearch}>
//                 Search
//               </button>
//             </div>
//             {!isReset && (
//               <div className=" mb-3 ml-3">
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


import React from "react";

function Search(props) {
  const {
    inputFields,
    title,
    handleSearch,
    isReset,
    handleReset,
    noActions,
  } = props;

  return (
    <form
      className="content__container"
      style={{ display: "flex", alignItems: "center", flexWrap: "nowrap", width: "100%", marginTop: "-4px" }}
    >
      <h3 style={{ marginRight: "30px", whiteSpace: "nowrap" }}>{title || ""}</h3>
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          overflowX: "auto",
          whiteSpace: "nowrap",
          marginLeft: "8px"
        }}
      >
        {inputFields &&
          inputFields.map((input) => (
            <div
              key={input?.name}
              style={{ marginLeft: "2px", marginRight: "20px", flex: "0 0 auto", minWidth: "170px" }}
            >
              <label htmlFor={input?.name} style={{ display: "block" }}>
                {input.label}
              </label>
              {input.type === "select" ? (
                <select
                  value={input?.value}
                  name={input?.name}
                  onChange={(e) => input?.onChange(e.target.value)}
                  className="form-select form-select-sm"
                  style={{
                    padding: "0.375rem 0.75rem",
                    height: "calc(1.5em + 0.75rem + 2px)",
                    minWidth: "100px",
                  }}
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
                  className="form-control"
                  placeholder={`Search by ${input.name}`}
                  onChange={(e) => input?.onChange(e.target.value)}
                  style={{
                    minWidth: "100px",
                  }}
                />
              )}
            </div>
          ))}
      </div>
      <div style={{ marginLeft: "15px", display: "flex", alignItems: "center" }}>
        {!noActions && (
          <>
            <button
              className="btn orange__btn"
              onClick={handleSearch}
              style={{ marginRight: "10px", marginTop: "30px" }}
            >
              Search
            </button>
            {!isReset && (
              <button className="btn blue__btn" onClick={handleReset} style={{ marginTop: "30px" }}>
                Reset
              </button>
            )}
          </>
        )}
      </div>
    </form>
  );
}

export default Search;
