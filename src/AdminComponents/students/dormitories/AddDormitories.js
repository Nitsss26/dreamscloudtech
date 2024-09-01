// import React from "react";

// function AddDormitories({ name, setname, loading, onSubmit }) {
//   return (
//     <div className="content__container">
//       <h5 className="mb-4">Add Bus / Van Number</h5>
//       <form>
//         <div className="row mb-3">
//           <label className="col-sm-12 col-form-label">Name</label>
//           <div className="col-sm-6">
//             <input
//               value={name}
//               onChange={(e) => setname(e.target.value)}
//               type="text"
//               className="form-control"
//               id="name"
//             />
//           </div>
//         </div>
//         <div className="mb-3">
//           <button
//             onClick={onSubmit}
//             disabled={loading || name === ""}
//             className="btn blue__btn"
//           >
//             Add
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AddDormitories;

import React from "react";

function AddDormitories({ name, setname, loading, onSubmit }) {
  return (
    <div className="content__container " style={{ backgroundColor: "#fffff5", display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
      <div className="d-flex align-items-center mt-2 mb-2">
        <h4 className="mb-0 me-3">Add Bus Name</h4>
        <form className="d-flex flex-grow-1">
          <input
            value={name}
            onChange={(e) => setname(e.target.value)}
            type="text"
            className="form-control me-3"
            id="name"
            placeholder="Enter Bus Name"
            style={{ maxWidth: '320px', backgroundColor: "#fffff9" }}
          />
          <button
            onClick={onSubmit}
            disabled={loading || name === ""}
            className="btn btn-danger text-white"
            style={{ backgroundColor: '#ff3131', border: 'none', width: '100px', maxWidth: '100px' }}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddDormitories;
