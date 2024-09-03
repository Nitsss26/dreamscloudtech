// import React from "react";
// import { useForm } from "react-hook-form";
// import Checkbox from "@material-ui/core/Checkbox";

// function Form({
//   name,
//   setname,
//   amount,
//   setamount,
//   handleSetStaff,
//   staff,
//   handleSelectAll,
//   Allstaff,
//   onSubmit,
//   loading,
//   isEdit,
// }) {
//   const { register, handleSubmit, errors } = useForm();
//   //console.log(handleSetStaff, isEdit);

//   return (
//     <form style={{ backgroundColor: "#fffff7" }}>
//       <div className=" mb-3">
//         <label htmlFor="name" className=" col-form-label">
//           Name
//         </label>
//         <input
//           style={{ backgroundColor: "#fffffa" }}
//           value={name}
//           placeholder="Name"
//           onChange={(e) => setname(e.target.value)}
//           type="text"
//           ref={register({ required: true })}
//           className="form-control"
//           name="name"
//         />
//         {errors.name && (
//           <span className=" form-error text-danger mb-2">
//             This field is required
//           </span>
//         )}
//       </div>
//       <div className="mb-3">
//         <label htmlFor="amount" className=" col-form-label">
//           Amount
//         </label>
//         <input
//           style={{ backgroundColor: "#fffffa" }}
//           placeholder="Amount"
//           value={amount}
//           onChange={(e) => setamount(e.target.value)}
//           type="number"
//           ref={register({ required: true })}
//           className="form-control"
//           name="amount"
//         />
//         {errors.amount && (
//           <span className=" form-error text-danger mb-2">
//             This field is required
//           </span>
//         )}
//       </div>
//       <div className="mb-3 row">
//         <label htmlFor="amount" className=" col-form-label col-6">
//           Select Staff
//         </label>
//         <div className="row col-6">
//           <div className="col-5 ml-2 mr-1 mt-2">Select All</div>
//           <div className="col-1">
//             <Checkbox
//               // checked={Allstaff.length === staff.length ? true : false}
//               onChange={handleSelectAll}
//               color="primary"
//             />
//           </div>
//         </div>
//         <hr />
//         {Allstaff &&
//           Allstaff.map((e, i) => (
//             <div key={i} className="row">
//               <div className="col-9">
//                 {e?.name} {e?.surname}
//               </div>
//               <div className="col-3">
//                 <Checkbox
//                   value={e?.userID}
//                   checked={staff.includes(e?.userID)}
//                   onChange={handleSetStaff}
//                   color="primary"
//                 />
//               </div>
//             </div>
//           ))}
//       </div>
//       <div>
//         <button onClick={handleSubmit(onSubmit)} className="btn blue__btn">
//           {loading && (
//             <span
//               className="spinner-border spinner-border-sm"
//               role="status"
//               aria-hidden="true"
//             ></span>
//           )}
//           {isEdit ? "Save Changes" : "Add"}
//         </button>
//       </div>
//     </form>
//   );
// }

// export default Form;

import React from "react";
import { useForm } from "react-hook-form";
import Checkbox from "@material-ui/core/Checkbox";

function Form({
  name,
  setname,
  amount,
  setamount,
  handleSetStaff,
  staff,
  handleSelectAll,
  Allstaff,
  onSubmit,
  loading,
  isEdit,
}) {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form style={{ backgroundColor: "#fffff7" }}>
      <div className="mb-3">
        <label htmlFor="name" className="col-form-label" style={{ fontWeight: "bold" }}>
          Name
        </label>
        <input
          style={{ backgroundColor: "#fffffa", fontWeight: "bold" }}
          value={name}
          placeholder="Name"
          onChange={(e) => setname(e.target.value)}
          type="text"
          ref={register({ required: true })}
          className="form-control"
          name="name"
        />
        {errors.name && (
          <span className="form-error text-danger mb-2" style={{ fontWeight: "bold" }}>
            This field is required
          </span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="col-form-label" style={{ fontWeight: "bold" }}>
          Amount
        </label>
        <input
          style={{ backgroundColor: "#fffffa", fontWeight: "bold" }}
          placeholder="Amount"
          value={amount}
          onChange={(e) => setamount(e.target.value)}
          type="number"
          ref={register({ required: true })}
          className="form-control"
          name="amount"
        />
        {errors.amount && (
          <span className="form-error text-danger mb-2" style={{ fontWeight: "bold" }}>
            This field is required
          </span>
        )}
      </div>
      <div className="mb-3 row">
        <label htmlFor="amount" className="col-form-label col-6" style={{ fontWeight: "bold" }}>
          Select Staff
        </label>
        <div className="row col-6">
          <div className="col-5 ml-2 mr-1 mt-2" style={{ fontWeight: "bold" }}>
            Select All
          </div>
          <div className="col-1">
            <Checkbox
              onChange={handleSelectAll}
              color="primary"
            />
          </div>
        </div>
        <hr />
        {Allstaff &&
          Allstaff.map((e, i) => (
            <div key={i} className="row" style={{ fontWeight: "bold" }}>
              <div className="col-9">
                {e?.name} {e?.surname}
              </div>
              <div className="col-3">
                <Checkbox
                  value={e?.userID}
                  checked={staff.includes(e?.userID)}
                  onChange={handleSetStaff}
                  color="primary"
                />
              </div>
            </div>
          ))}
      </div>
      <div>
        <button
          onClick={handleSubmit(onSubmit)}
          className="btn blue__btn"
          style={{ fontWeight: "bold" }}
        >
          {loading && (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          )}
          {isEdit ? "Save Changes" : "Add"}
        </button>
      </div>
    </form>
  );
}

export default Form;
