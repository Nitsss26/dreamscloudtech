// import React from "react";

// function AddDormitories({ name, setname, loading, onSubmit }) {
//   return (
//     <div className="content__container">
//       <h5 className="mb-4">Add Section</h5>
//       <form>
//         <div className="row mb-3 align-items-center">
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
//         <div className=" mb-3">
//           <button
//             onClick={onSubmit}
//             disabled={loading || name === ""}
//             className="btn btn-danger text-white me-3 w-50"
//             style={{ backgroundColor: '#ff3131', border: 'none' }}
//           >
//             Add
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AddDormitories;
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
    <div className="content__container">
      <h5 className="mb-4">Add Section</h5>
      <form>
        <div className="row mb-3 align-items-center">
          <label className="col-sm-12 col-form-label">Name</label>
          <div className="col-sm-9">
            <input
              value={name}
              onChange={(e) => setname(e.target.value)}
              type="text"
              className="form-control"
              id="name"
            />
          </div>
          <div className="col-sm-3">
            <button
              onClick={onSubmit}
              disabled={loading || name === ""}
              className="btn btn-danger text-white me-3 w-50"
              style={{ backgroundColor: '#ff3131', border: 'none' }}
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddDormitories;
