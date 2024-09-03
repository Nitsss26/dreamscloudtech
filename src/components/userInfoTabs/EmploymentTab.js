// import moment from "moment";
// import React, { useState, useEffect } from "react";
// import axios from "../../store/axios";

// function EmploymentTab({ user }) {
//   const [campus, setcampus] = useState("");

//   useEffect(() => {
//     if (user?.campusID) {
//       axios.get(`/campuses/${user?.campusID}`).then((res) => {
//         setcampus(res.data.docs.name);
//       });
//     }
//   }, [user]);

//   return (
//     <div>
//       <div className="row  mb-3">
//         <div className="col-4">Position Role: </div>
//         <div className="col-6">{user?.position || "N/A"}</div>
//       </div>
//       <div className="row  mb-3">
//         <div className="col-4">Department: </div>
//         <div className="col-6">{user?.department || "N/A"}</div>
//       </div>
//       <div className="row  mb-3">
//         <div className="col-4">Campus: </div>
//         <div className="col-6">{campus || "N/A"} </div>
//       </div>
//       <div className="row  mb-3">
//         <div className="col-4">Employment Date</div>
//         <div className="col-6">
//           {moment(user?.employmentDate).format("DD MMMM YYYY") || "N/A"}{" "}
//         </div>
//       </div>
//       <div className="row  mb-3">
//         <div className="col-4">Qualification: </div>
//         <div className="col-6">{user?.qualifications || "N/A"}</div>
//       </div>
//       <div className="row  mb-3">
//         <div className="col-4">Years of Experience: </div>
//         <div className="col-6">{user?.years || "N/A"} </div>
//       </div>
//       <div className="row  mb-3">
//         <div className="col-4">Bank: </div>
//         <div className="col-6">{user?.bank || "N/A"} </div>
//       </div>
//       <div className="row  mb-3">
//         <div className="col-4">Account Number: </div>
//         <div className="col-6">{user?.accountNumber || "N/A"} </div>
//       </div>
//     </div>
//   );
// }

// export default EmploymentTab;

import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "../../store/axios";

function EmploymentTab({ user }) {
  const [campus, setCampus] = useState("");

  useEffect(() => {
    if (user?.campusID) {
      axios.get(`/campuses/${user?.campusID}`).then((res) => {
        setCampus(res.data.docs.name);
      });
    }
  }, [user]);

  return (
    <div className="row justify-content-center align-items-center" style={{ backgroundColor: "#fffff9" }}>
      <div className="col-4">
        <div className="row mb-3 justify-content-center align-items-center">
          <div className="col-6 text-left" style={{ fontWeight: 500 }}>Position Role:</div>
          <div className="col-6 text-left" style={{ fontWeight: 500 }}>{user?.position || "N/A"}</div>
        </div>
        <div className="row mb-3 justify-content-center align-items-center">
          <div className="col-6 text-left" style={{ fontWeight: 500 }}>Department:</div>
          <div className="col-6 text-left" style={{ fontWeight: 500 }}>{user?.department || "N/A"}</div>
        </div>
        <div className="row mb-3 justify-content-center align-items-center">
          <div className="col-6 text-left" style={{ fontWeight: 500 }}>Campus:</div>
          <div className="col-6 text-left" style={{ fontWeight: 500 }}>{campus || "N/A"}</div>
        </div>
        <div className="row mb-3 justify-content-center align-items-center">
          <div className="col-6 text-left" style={{ fontWeight: 500 }}>Employment Date:</div>
          <div className="col-6 text-left" style={{ fontWeight: 500 }}>
            {user?.employmentDate
              ? moment(user?.employmentDate).format("DD MMMM YYYY")
              : "N/A"}
          </div>
        </div>
      </div>

      <div className="col-4">
        <div className="row mb-3 justify-content-center align-items-center">
          <div className="col-6 text-left" style={{ fontWeight: 500 }}>Qualification:</div>
          <div className="col-6 text-left" style={{ fontWeight: 500 }}>{user?.qualifications || "N/A"}</div>
        </div>
        <div className="row mb-3 justify-content-center align-items-center">
          <div className="col-6 text-left" style={{ fontWeight: 500 }}>Years of Experience:</div>
          <div className="col-6 text-left" style={{ fontWeight: 500 }}>{user?.years || "N/A"}</div>
        </div>
        <div className="row mb-3 justify-content-center align-items-center">
          <div className="col-6 text-left" style={{ fontWeight: 500 }}>Bank:</div>
          <div className="col-6 text-left" style={{ fontWeight: 500 }}>{user?.bank || "N/A"}</div>
        </div>
        <div className="row mb-3 justify-content-center align-items-center">
          <div className="col-6 text-left" style={{ fontWeight: 500 }}>Account Number:</div>
          <div className="col-6 text-left" style={{ fontWeight: 500 }}>{user?.accountNumber || "N/A"}</div>
        </div>
      </div>
    </div>
  );
}

export default EmploymentTab;
