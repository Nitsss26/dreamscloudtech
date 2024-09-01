// import React from "react";
// import { getCapitalize } from "../../utils";
// import moment from "moment";

// function InfoTab({ user, isStaff }) {
//   return (
//     <div className="row justify-content-center align-items-center " style={{ backgroundColor: "#fffff9" }}>
//       {isStaff && (
//         <div className="row mb-3 justify-content-center align-items-center">
//           <div className="col-4 text-left">Title:</div>
//           <div className="col-6 text-left">{getCapitalize(user?.title || "N/A")}</div>
//         </div>
//       )}
//       <div className="col-4">
//         <div className="row mb-3 justify-content-center align-items-center">
//           <div className="col-4 text-left">Name:</div>
//           <div className="col-6 text-left">{user?.name || "N/A"}</div>
//         </div>
//         <div className="row mb-3 justify-content-center align-items-center">
//           <div className="col-4 text-left">Surname:</div>
//           <div className="col-6 text-left">{getCapitalize(user?.surname || "N/A")}</div>
//         </div>
//         {user?.middleName && (
//           <div className="row mb-3 justify-content-center align-items-center">
//             <div className="col-4 text-left">Middle Name:</div>
//             <div className="col-6 text-left">
//               {getCapitalize(user?.middleName || "N/A")}
//             </div>
//           </div>
//         )}
//         <div className="row mb-3 justify-content-center align-items-center">
//           <div className="col-4 text-left">Gender:</div>
//           <div className="col-6 text-left">{getCapitalize(user?.gender || "N/A")}</div>
//         </div>
//         <div className="row mb-3 justify-content-center align-items-center">
//           <div className="col-4 text-left">Email:</div>
//           <div className="col-6 text-left">{user?.email || "N/A"}</div>
//         </div>
//       </div>
// a
//       <div className="col-4">
//         <div className="row mb-3 justify-content-center align-items-center">
//           <div className="col-6 text-left">Date of Birth:</div>
//           <div className="col-6 text-left">
//             {user?.dateOfBirth || "N/A"}
//           </div>
//         </div>

//         <div className="row mb-3 justify-content-center align-items-center">
//           <div className="col-6 text-left">Caste:</div>
//           <div className="col-6 text-left">{user?.religion || "N/A"}</div>
//         </div>
//         <div className="row mb-3 justify-content-center align-items-center">
//           <div className="col-6 text-left">Category:</div>
//           <div className="col-6 text-left">{user?.nationality || "N/A"}</div>
//         </div>
//         <div className="row mb-3 justify-content-center align-items-center">
//           <div className="col-6 text-left">Date of Admission:</div>
//           <div className="col-6 text-left">{user?.disease || "N/A"}</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default InfoTab;


import React from "react";
import { getCapitalize } from "../../utils";
import moment from "moment";

function InfoTab({ user, isStaff }) {
  // Debugging information to check if dates are coming through correctly
  console.log("User Data:", user);

  return (
    <div className="row justify-content-center align-items-center" style={{ backgroundColor: "#fffff9" }}>
      {isStaff && (
        <div className="row mb-3 justify-content-center align-items-center">
          <div className="col-4 text-left" style={{ fontWeight: 500 }}>Title:</div>
          <div className="col-6 text-left" style={{ fontWeight: 500 }}>{getCapitalize(user?.title || "N/A")}</div>
        </div>
      )}
      <div className="col-4">
        <div className="row mb-3 justify-content-center align-items-center">
          <div className="col-4 text-left" style={{ fontWeight: 500 }}>Name:</div>
          <div className="col-6 text-left" style={{ fontWeight: 500 }}>{user?.name || "N/A"}</div>
        </div>
        <div className="row mb-3 justify-content-center align-items-center">
          <div className="col-4 text-left" style={{ fontWeight: 500 }}>Surname:</div>
          <div className="col-6 text-left" style={{ fontWeight: 500 }}>{getCapitalize(user?.surname || "N/A")}</div>
        </div>
        {user?.middleName && (
          <div className="row mb-3 justify-content-center align-items-center">
            <div className="col-4 text-left" style={{ fontWeight: 500 }}>Middle Name:</div>
            <div className="col-6 text-left" style={{ fontWeight: 500 }}>
              {getCapitalize(user?.middleName || "N/A")}
            </div>
          </div>
        )}
        <div className="row mb-3 justify-content-center align-items-center">
          <div className="col-4 text-left" style={{ fontWeight: 500 }}>Gender:</div>
          <div className="col-6 text-left" style={{ fontWeight: 500 }}>{getCapitalize(user?.gender || "N/A")}</div>
        </div>
        <div className="row mb-3 justify-content-center align-items-center">
          <div className="col-4 text-left" style={{ fontWeight: 500 }}>Email:</div>
          <div className="col-6 text-left" style={{ fontWeight: 500 }}>{user?.email || "N/A"}</div>
        </div>
      </div>

      <div className="col-4">
        <div className="row mb-3 justify-content-center align-items-center">
          <div className="col-6 text-left" style={{ fontWeight: 500 }}>Date of Birth:</div>
          <div className="col-6 text-left" style={{ fontWeight: 500 }}>
            {user?.dateofBirth
              ? moment(user?.dateofBirth).format("DD-MM-YYYY")
              : "N/A"}
          </div>
        </div>

        <div className="row mb-3 justify-content-center align-items-center">
          <div className="col-6 text-left" style={{ fontWeight: 500 }}>Caste:</div>
          <div className="col-6 text-left" style={{ fontWeight: 500 }}>{user?.religion || "N/A"}</div>
        </div>
        <div className="row mb-3 justify-content-center align-items-center">
          <div className="col-6 text-left" style={{ fontWeight: 500 }}>Category:</div>
          <div className="col-6 text-left" style={{ fontWeight: 500 }}>{user?.nationality || "N/A"}</div>
        </div>
        <div className="row mb-3 justify-content-center align-items-center">
          <div className="col-6 text-left" style={{ fontWeight: 500 }}>Date of Admission:</div>
          <div className="col-6 text-left" style={{ fontWeight: 500 }}>
            {user?.disease
              ? moment(user?.disease).format("DD-MM-YYYY")
              : "N/A"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoTab;

