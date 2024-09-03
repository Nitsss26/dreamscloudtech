// // import React, { useState, useEffect } from "react";
// // import axios from "../../../store/axios";
// // import { useParams } from "react-router-dom";
// // import moment from "moment";
// // import { monthYear } from "../../../data";
// // import { currentCurrency } from "../../../utils";

// // const today = new Date();

// // function PaySlip() {
// //   const [state, setstate] = useState({});
// //   const [payrow, setpayrow] = useState({});
// //   const [user, setuser] = useState({});
// //   const [salaryDeducation, setsalaryDeducation] = useState("");
// //   const [istax, setistax] = useState(false);
// //   const { id } = useParams();

// //   useEffect(() => {
// //     axios.get("/school").then((res) => {
// //       setstate(res.data);
// //     });
// //   }, []);

// //   useEffect(() => {
// //     axios.get("/deductions").then((res) => {
// //       let total = [];
// //       res.data.map((e) => {
// //         let isExist = e.staff.find((i) => i === id);
// //         if (isExist) {
// //           return total.push({
// //             amount: e.amount,
// //             name: e.name,
// //           });
// //         }
// //       });
// //       let bal = total.reduce((val, e) => val + e.amount, 0);
// //       setsalaryDeducation(bal);
// //     });
// //   }, [id]);

// //   useEffect(() => {
// //     axios.get(`/teachers/${id}`).then(async (res) => {
// //       setuser(res.data.teacher);
// //       setistax(res.data.teacher?.ssnit ? true : false);
// //       let payData = await axios.get(`/payrow/${res.data.teacher?.position}`);
// //       let pay = payData?.data.docs;
// //       const bill =
// //         Number(pay?.allowance) + Number(pay?.salary) + Number(pay?.bonus);
// //       setpayrow({ ...pay, total: bill });
// //     });
// //   }, [id]);

// //   const handlePrint = () => {
// //     window.print();
// //   };

// //   let totalDeductions =
// //     Number(payrow?.salary * 0.1) +
// //     Number(payrow?.total * 0.05) +
// //     Number(salaryDeducation);

// //   return (
// //     <>
// //       <div className="border content__container mb-4" id="section-to-print">
// //         <div className="text-center border-bottom p-3">
// //           {/* <img height="100px" src={getImgSrc(state?.profileUrl)} alt="" /> */}
// //           <h2>{state?.fullName}</h2>
// //           <p>{state?.motto}</p>
// //           <h6>
// //             <strong>
// //               PaySlip for {monthYear[today.getMonth()].name}{" "}
// //               {today.getFullYear()}
// //             </strong>
// //           </h6>
// //         </div>
// //         <div className="row p-3">
// //           <div className="col-6">
// //             <div className="d-flex">
// //               <h6 className="col-4">
// //                 {" "}
// //                 <strong>Name</strong>
// //               </h6>
// //               <h6>
// //                 <strong>
// //                   {user?.name} {user?.middleName} {user?.surname}{" "}
// //                 </strong>
// //               </h6>
// //             </div>
// //             <div className="d-flex ">
// //               <h6 className="col-4">
// //                 {" "}
// //                 <strong>Position</strong>
// //               </h6>
// //               <h6>
// //                 <strong>{user?.position}</strong>
// //               </h6>
// //             </div>
// //           </div>
// //           <div className="col-6">
// //             <div className="d-flex ">
// //               <h6 className="col-4">
// //                 {" "}
// //                 <strong>Account Number</strong>
// //               </h6>
// //               <h6>
// //                 <strong>{user?.accountNumber || "-"} </strong>
// //               </h6>
// //             </div>
// //             <div className="d-flex ">
// //               <h6 className="col-4">
// //                 {" "}
// //                 <strong>Bank</strong>
// //               </h6>
// //               <h6>
// //                 <strong>{user?.bank || "-"} </strong>
// //               </h6>
// //             </div>
// //           </div>
// //         </div>
// //         <table className="table table-bordered">
// //           <thead>
// //             <tr>
// //               <th colSpan="2" scope="col">
// //                 Income ({currentCurrency()})
// //               </th>
// //               <th colSpan="2" scope="col">
// //                 Deductions ({currentCurrency()})
// //               </th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             <tr>
// //               <td>Basic Salary</td>
// //               <td>{payrow?.salary}</td>
// //               <td>Income Tax</td>
// //               <td>{payrow?.salary * 0.1}</td>
// //             </tr>
// //             <tr>
// //               <td>Allowance</td>
// //               <td>{payrow?.allowance}</td>
// //               <td>Employee SSNIT</td>

// //               <td>{istax ? payrow?.total * 0.05 : "-"}</td>
// //             </tr>
// //             <tr>
// //               <td>Bonus</td>
// //               <td>{payrow.bonus}</td>
// //               <td>Salary Deductions</td>
// //               <td>{salaryDeducation}</td>
// //             </tr>
// //             <tr>
// //               <td>Gross Income</td>
// //               <td>{payrow?.total}</td>
// //               <td>Total Deductions</td>
// //               <td>{totalDeductions}</td>
// //             </tr>
// //             <tr>
// //               <td></td>
// //               <td></td>
// //               <td>Net Salary</td>
// //               <td>
// //                 {currentCurrency()} {payrow?.total - totalDeductions}
// //               </td>
// //             </tr>
// //           </tbody>
// //         </table>
// //         <div>
// //           <div>
// //             <h6>
// //               Date :{" "}
// //               <strong>{moment(today).format("dddd Do MMMM YYYY")}</strong>
// //             </h6>
// //           </div>
// //           <div className="d-flex justify-content-between">
// //             <div>
// //               <h6>Signature of Employer: ..........................</h6>
// //             </div>
// //             <div>
// //               <h6>Signature of Employee: ..........................</h6>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="d-flex justify-content-center mb-3">
// //         <button onClick={handlePrint} className="btn blue__btn">
// //           Print
// //         </button>
// //       </div>
// //     </>
// //   );
// // }

// // export default PaySlip;


// import React, { useState, useEffect } from "react";
// import axios from "../../../store/axios";
// import { useParams } from "react-router-dom";
// import moment from "moment";
// import { monthYear } from "../../../data";
// import { currentCurrency } from "../../../utils";

// const today = new Date();

// function PaySlip() {
//   const [state, setstate] = useState({});
//   const [payrow, setpayrow] = useState({});
//   const [user, setuser] = useState({});
//   const [salaryDeducation, setsalaryDeducation] = useState(0);
//   const [istax, setistax] = useState(false);
//   const { id } = useParams();

//   useEffect(() => {
//     axios.get("/school").then((res) => {
//       setstate(res.data);
//     });
//   }, []);

//   useEffect(() => {
//     axios.get("/deductions").then((res) => {
//       let total = [];
//       res.data.forEach((e) => {
//         let isExist = e.staff.includes(id);
//         if (isExist) {
//           total.push({
//             amount: e.amount,
//             name: e.name,
//           });
//         }
//       });
//       let bal = total.reduce((val, e) => val + Number(e.amount), 0);
//       setsalaryDeducation(bal);
//     });
//   }, [id]);

//   useEffect(() => {
//     axios.get(`/teachers/${id}`).then(async (res) => {
//       setuser(res.data.teacher);
//       setistax(res.data.teacher?.ssnit ? true : false);
//       let payData = await axios.get(`/payrow/${res.data.teacher?.position}`);
//       let pay = payData?.data.docs;
//       const bill =
//         Number(pay?.allowance) + Number(pay?.salary) + Number(pay?.bonus);
//       setpayrow({ ...pay, total: bill });
//     });
//   }, [id]);

//   const handlePrint = () => {
//     window.print();
//   };

//   const incomeTax = Number(payrow?.salary) * 0.1;
//   const employeeSSNIT = istax ? Number(payrow?.total) * 0.05 : 0;

//   let totalDeductions =
//     incomeTax +
//     employeeSSNIT +
//     Number(salaryDeducation);

//   return (
//     <>
//       <div className="border content__container mb-4" id="section-to-print">
//         <div className="text-center border-bottom p-3">
//           <h2>{state?.fullName}</h2>
//           <p>{state?.motto}</p>
//           <h6>
//             <strong>
//               PaySlip for {monthYear[today.getMonth()].name}{" "}
//               {today.getFullYear()}
//             </strong>
//           </h6>
//         </div>
//         <div className="row p-3">
//           <div className="col-6">
//             <div className="d-flex">
//               <h6 className="col-4">
//                 {" "}
//                 <strong>Name</strong>
//               </h6>
//               <h6>
//                 <strong>
//                   {user?.name} {user?.middleName} {user?.surname}{" "}
//                 </strong>
//               </h6>
//             </div>
//             <div className="d-flex ">
//               <h6 className="col-4">
//                 {" "}
//                 <strong>Position</strong>
//               </h6>
//               <h6>
//                 <strong>{user?.position}</strong>
//               </h6>
//             </div>
//           </div>
//           <div className="col-6">
//             <div className="d-flex ">
//               <h6 className="col-4">
//                 {" "}
//                 <strong>Account Number</strong>
//               </h6>
//               <h6>
//                 <strong>{user?.accountNumber || "-"} </strong>
//               </h6>
//             </div>
//             <div className="d-flex ">
//               <h6 className="col-4">
//                 {" "}
//                 <strong>Bank</strong>
//               </h6>
//               <h6>
//                 <strong>{user?.bank || "-"} </strong>
//               </h6>
//             </div>
//           </div>
//         </div>
//         <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th colSpan="2" scope="col">
//                 Income ({currentCurrency()})
//               </th>
//               <th colSpan="2" scope="col">
//                 Deductions ({currentCurrency()})
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Basic Salary</td>
//               <td>{payrow?.salary}</td>
//               <td>Income Tax</td>
//               <td>{incomeTax}</td>
//             </tr>
//             <tr>
//               <td>Allowance</td>
//               <td>{payrow?.allowance}</td>
//               <td>Employee SSNIT</td>
//               <td>{employeeSSNIT}</td>
//             </tr>
//             <tr>
//               <td>Bonus</td>
//               <td>{payrow.bonus}</td>
//               <td>Salary Deductions</td>
//               <td>{salaryDeducation}</td>
//             </tr>
//             <tr>
//               <td>Gross Income</td>
//               <td>{payrow?.total}</td>
//               <td>Total Deductions</td>
//               <td>{totalDeductions}</td>
//             </tr>
//             <tr>
//               <td></td>
//               <td></td>
//               <td>Net Salary</td>
//               <td>
//                 {currentCurrency()} {payrow?.total - totalDeductions}
//               </td>
//             </tr>
//           </tbody>
//         </table>
//         <div>
//           <div>
//             <h6>
//               Date :{" "}
//               <strong>{moment(today).format("dddd Do MMMM YYYY")}</strong>
//             </h6>
//           </div>
//           <div className="d-flex justify-content-between">
//             <div>
//               <h6>Signature of Employer: ..........................</h6>
//             </div>
//             <div>
//               <h6>Signature of Employee: ..........................</h6>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="d-flex justify-content-center mb-3">
//         <button onClick={handlePrint} className="btn blue__btn">
//           Print
//         </button>
//       </div>
//     </>
//   );
// }

// export default PaySlip;


import React, { useState, useEffect } from "react";
import axios from "../../../store/axios";
import { useParams } from "react-router-dom";
import moment from "moment";
import { monthYear } from "../../../data";
import { currentCurrency } from "../../../utils";
import "./PaySlip.css"; // Import the CSS file

const today = new Date();

function capitalizeWords(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

function PaySlip() {
  const [state, setstate] = useState({});
  const [payrow, setpayrow] = useState({});
  const [user, setuser] = useState({});
  const [salaryDeducation, setsalaryDeducation] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    axios.get("/school").then((res) => {
      setstate(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("/deductions").then((res) => {
      let total = [];
      res.data.forEach((e) => {
        let isExist = e.staff.includes(id);
        if (isExist) {
          total.push({
            amount: e.amount,
            name: e.name,
          });
        }
      });
      let bal = total.reduce((val, e) => val + Number(e.amount), 0);
      setsalaryDeducation(bal);
    });
  }, [id]);

  useEffect(() => {
    axios.get(`/teachers/${id}`).then(async (res) => {
      setuser(res.data.teacher);
      let payData = await axios.get(`/payrow/${res.data.teacher?.position}`);
      let pay = payData?.data.docs;
      const bill =
        Number(pay?.allowance) + Number(pay?.salary) + Number(pay?.bonus);
      setpayrow({ ...pay, total: bill });
    });
  }, [id]);

  const handlePrint = () => {
    window.print();
  };

  const renderPaySlip = () => (
    <div className="border content__container2 mb-4 blue-border image-container">
      <img src="https://i.ibb.co/7QQgtgn/Pngtree-education-and-school-logo-design-9035365.png" alt="Left" className="left-image" />
      <img src="https://i.ibb.co/fMm814T/IMG-20240730-WA0009-removebg-preview.png" alt="Right" className="right-image" />
      <div className="text-center border-bottom p-3 blue-border-bottom">
        <h2 style={{ fontWeight: "bold", color: "#fe3131" }}>{state?.fullName}</h2>
        <h5 style={{ fontWeight: "bold", color: "#0000FF" }}>{state?.motto}</h5>
        <h6 style={{ fontWeight: "bold" }}>
          <strong>
            PaySlip for {monthYear[today.getMonth()].name} {today.getFullYear()}
          </strong>
        </h6>
      </div>
      <div className="row p-3 text-center">
        <div className="col-6">
          <div className="d-flex justify-content-center">
            <h6 className="col-5" style={{ fontWeight: "bold" }}>
              <strong style={{ fontWeight: "bold", color: "#fe3131" }}>Name :</strong>
            </h6>
            <h6 className="col-7" style={{ fontWeight: "bold" }}>
              <strong style={{ fontWeight: "bold", color: "#14c859" }}>
                {user?.name} {user?.middleName} {user?.surname}
              </strong>
            </h6>
          </div>
          <div className="d-flex justify-content-center">
            <h6 className="col-5" style={{ fontWeight: "bold" }}>
              <strong style={{ fontWeight: "bold", color: "#fe3131" }}>Position :</strong>
            </h6>
            <h6 className="col-7" style={{ fontWeight: "bold" }}>
              <strong style={{ fontWeight: "bold", color: "#14c859" }}>
                {capitalizeWords(user?.position || "")}
              </strong>
            </h6>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex justify-content-center">
            <h6 className="col-5" style={{ fontWeight: "bold" }}>
              <strong style={{ fontWeight: "bold", color: "#fe3131" }}>Account Number :</strong>
            </h6>
            <h6 className="col-7" style={{ fontWeight: "bold", color: "#14c859" }}>
              <strong style={{ fontWeight: "bold" }}>
                {user?.accountNumber || "-"}
              </strong>
            </h6>
          </div>
          <div className="d-flex justify-content-center">
            <h6 className="col-5" style={{ fontWeight: "bold" }}>
              <strong style={{ fontWeight: "bold", color: "#fe3131" }}>Bank :</strong>
            </h6>
            <h6 className="col-7" style={{ fontWeight: "bold" }}>
              <strong style={{ fontWeight: "bold", color: "#14c859" }}>{user?.bank || "-"}</strong>
            </h6>
          </div>
        </div>
      </div>
      <table className="table table-bordered blue-border">
        <thead>
          <tr>
            <th scope="col" className="text-left" style={{ width: "50%", fontWeight: "bold" }}>
              &nbsp; &nbsp; Income ({currentCurrency()})
            </th>
            <th scope="col" className="text-left" style={{ width: "50%", fontWeight: "bold" }}>
              &nbsp; &nbsp; Amount
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ fontWeight: "bold" }}>&nbsp; &nbsp;Basic Salary</td>
            <td className="text-left" style={{ fontWeight: "bold" }}>
              &nbsp; &nbsp; &nbsp;&nbsp;{payrow?.salary}
            </td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>&nbsp; &nbsp;Allowance</td>
            <td className="text-left" style={{ fontWeight: "bold" }}>
              &nbsp; &nbsp; &nbsp;&nbsp;{payrow?.allowance}
            </td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>&nbsp; &nbsp;Bonus</td>
            <td className="text-left" style={{ fontWeight: "bold" }}>
              &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;{payrow?.bonus}
            </td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>&nbsp; &nbsp;Salary Deductions</td>
            <td className="text-left" style={{ fontWeight: "bold" }}>
              &nbsp;&nbsp; &nbsp;- {salaryDeducation}
            </td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>&nbsp; &nbsp;Net Salary</td>
            <td className="text-left" style={{ fontWeight: "bold" }}>
              &nbsp; &nbsp; {payrow?.total - salaryDeducation} {currentCurrency()}
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <div>
          <h6 style={{ fontWeight: "bold" }}>
            Date: <strong>{moment(today).format("dddd Do MMMM YYYY")}</strong>
          </h6>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <h6 style={{ fontWeight: "bold" }}>
              Signature of Employer: ..........................
            </h6>
          </div>
          <div>
            <h6 style={{ fontWeight: "bold" }}>
              Signature of Employee: ..........................
            </h6>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="container" id="section-to-print">
        {/* Render the pay slip twice */}
        {renderPaySlip()}
        {renderPaySlip()}
      </div>

      <div className="d-flex justify-content-center mb-3">
        <button
          onClick={handlePrint}
          className="btn blue__btn"
          style={{ fontWeight: "bold" }}
        >
          Print
        </button>
      </div>
    </>
  );
}

export default PaySlip;
