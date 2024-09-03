// import React, { useState, useEffect } from "react";
// import axios from "../../../store/axios";
// import { useParams, useHistory } from "react-router-dom";
// import moment from "moment";
// import { errorAlert, currentCurrency } from "../../../utils";

// function PaymentReceipt() {
//   const [state, setstate] = useState({});
//   const [transaction, settransaction] = useState({});
//   const [user, setuser] = useState({});
//   const { id } = useParams();
//   const history = useHistory();

//   useEffect(() => {
//     axios.get("/school").then((res) => {
//       console.log(res.data);
//       setstate(res.data);
//     });
//   }, []);

//   useEffect(() => {
//     axios.get(`/transactions/${id}`).then(async (res) => {
//       settransaction(res.data);
//       const userDetails = await axios.get(
//         `/students/student/${res.data.fees.userID}`
//       );
//       setuser(userDetails.data.student);
//     });
//   }, [id]);

//   const handlePrint = () => {
//     window.print();
//   };

//   const handleDelete = () => {
//     axios.delete(`/transactions/delete/${id}`).then((res) => {
//       if (res.data.error) {
//         errorAlert(res.data.error);
//         return 0;
//       }
//       history.goBack();
//       // history.push("/finance/transactions");
//     });
//   };

//   return (
//     <>
//       <div className="border content__container mb-5" id="section-to-print">
//         <div className="text-center border-bottom p-3">
//           <h2>{state?.fullName}</h2>
//           <p>{state?.motto}</p>
//         </div>
//         <div className="row p-3">
//           <div className="col-6">
//             <div className="d-flex">
//               <h6 className="col-4">
//                 {" "}
//                 <strong>Date</strong>
//               </h6>
//               <h6>
//                 <strong>
//                   {moment(transaction?.date).format("D MMMM YYYY")}
//                 </strong>
//               </h6>
//             </div>
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
//                 <strong>Class</strong>
//               </h6>
//               <h6>
//                 <strong>{user?.classID}</strong>
//               </h6>
//             </div>
//             <div className="d-flex ">
//               <h6 className="col-4">
//                 {" "}
//                 <strong>UserID</strong>
//               </h6>
//               <h6>
//                 <strong>{transaction.fees?.userID} </strong>
//               </h6>
//             </div>
//           </div>
//           <div className="col-6">
//             <div className="d-flex ">
//               <h6 className="col-4">
//                 {" "}
//                 <strong>Academic Year</strong>
//               </h6>
//               <h6>
//                 <strong>{transaction?.fees?.academicYear || "-"} </strong>
//               </h6>
//             </div>
//             <div className="d-flex ">
//               <h6 className="col-4">
//                 {" "}
//                 <strong>Term</strong>
//               </h6>
//               <h6>
//                 <strong>{transaction?.fees?.term || "-"} </strong>
//               </h6>
//             </div>
//             <div className="d-flex ">
//               <h6 className="col-4">
//                 {" "}
//                 <strong>Amount Paid</strong>
//               </h6>
//               <h6>
//                 <strong>
//                   {currentCurrency()} {transaction?.amount || "-"}{" "}
//                 </strong>
//               </h6>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="d-flex justify-content-center">
//         <button onClick={handlePrint} className="btn blue__btn">
//           Print Receipt
//         </button>
//         <button onClick={handleDelete} className=" ml-5 btn btn-danger">
//           Cancel Payment
//         </button>
//       </div>
//     </>
//   );
// }

// export default PaymentReceipt;


// import React, { useState, useEffect } from "react";
// import axios from "../../../store/axios";
// import { useParams, useHistory } from "react-router-dom";
// import moment from "moment";
// import { errorAlert, currentCurrency } from "../../../utils";

// function PaymentReceipt() {
//   const [state, setState] = useState({});
//   const [transaction, setTransaction] = useState({});
//   const [user, setUser] = useState({});
//   const [guardianName, setGuardianName] = useState('');
//   const [feeBreakdown, setFeeBreakdown] = useState([]);
//   const { id } = useParams();
//   const history = useHistory();

//   useEffect(() => {
//     axios.get("/school").then((res) => {
//       setState(res.data);
//     });
//   }, []);

//   useEffect(() => {
//     const fetchTransactionDetails = async () => {
//       try {
//         const transactionResponse = await axios.get(`/transactions/${id}`);
//         const transactionData = transactionResponse.data;
//         setTransaction(transactionData);

//         const userResponse = await axios.get(`/students/student/${transactionData.fees.userID}`);
//         const userDetails = userResponse.data.student;
//         setUser(userDetails);

//         // Fetch guardian details
//         const studentsResponse = await axios.get("/students");
//         const students = studentsResponse.data;
//         const matchedStudent = students.find(student => student.userID === transactionData.fees.userID);

//         const defaultFees = {
//           tuitionFee: 500,
//           examFee: 100,
//           maintenanceFee: 100,
//         };
//         if (matchedStudent) {
//           const { guadian } = matchedStudent;
//           const guardianName = guadian.length > 0 ? guadian[0].name : 'No guardian info';
//           setGuardianName(guardianName);
//         }

//         // Set fee breakdown
//         const breakdown = [
//           { name: "Tuition Fee", amount: transactionData.fees?.tuitionFee || 0 },
//           { name: "Exam Fee", amount: transactionData.fees?.examFee || 0 },
//           { name: "Transport Fee", amount: transactionData.fees?.transportFee || 0 },
//           { name: "Maintenance Fee", amount: transactionData.fees?.maintenanceFee || 0 }
//         ];
//         setFeeBreakdown(breakdown);

//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchTransactionDetails();
//   }, [id]);

//   const handlePrint = () => {
//     window.print();
//   };

//   const handleDelete = () => {
//     axios.delete(`/transactions/delete/${id}`).then((res) => {
//       if (res.data.error) {
//         errorAlert(res.data.error);
//         return;
//       }
//       history.goBack();
//     });
//   };

//   return (
//     <>
//       <div className="border content__container mb-5" id="section-to-print">
//         <div className="text-center border-bottom p-3">
//           <h2>{state?.fullName}</h2>
//           <p>{state?.motto}</p>
//         </div>
//         <div className="row p-3">
//           <div className="col-6">
//             <div className="d-flex">
//               <h6 className="col-4">
//                 <strong>Date</strong>
//               </h6>
//               <h6>
//                 <strong>{moment(transaction?.date).format("D MMMM YYYY")}</strong>
//               </h6>
//             </div>
//             <div className="d-flex">
//               <h6 className="col-4">
//                 <strong>Name</strong>
//               </h6>
//               <h6>
//                 <strong>
//                   {user?.name} {user?.middleName} {user?.surname}
//                 </strong>
//               </h6>
//             </div>
//             <div className="d-flex">
//               <h6 className="col-4">
//                 <strong>Class</strong>
//               </h6>
//               <h6>
//                 <strong>{user?.classID ? user.classID.toUpperCase() : "-"}</strong>
//               </h6>
//             </div>
//             <div className="d-flex">
//               <h6 className="col-4">
//                 <strong>UserID</strong>
//               </h6>
//               <h6>
//                 <strong>{transaction.fees?.userID || "-"}</strong>
//               </h6>
//             </div>
//             <div className="d-flex">
//               <h6 className="col-4">
//                 <strong>Guardian Name</strong>
//               </h6>
//               <h6>
//                 <strong>{guardianName}</strong>
//               </h6>
//             </div>
//           </div>
//           <div className="col-6">
//             <div className="d-flex">
//               <h6 className="col-4">
//                 <strong>Academic Year</strong>
//               </h6>
//               <h6>
//                 <strong>{transaction?.fees?.academicYear || "-"}</strong>
//               </h6>
//             </div>
//             <div className="d-flex">
//               <h6 className="col-4">
//                 <strong>Term</strong>
//               </h6>
//               <h6>
//                 <strong>{transaction?.fees?.term || "-"}</strong>
//               </h6>
//             </div>
//             <div className="d-flex">
//               <h6 className="col-4">
//                 <strong>Amount Paid</strong>
//               </h6>
//               <h6>
//                 <strong>
//                   {currentCurrency()} {transaction?.amount || "-"}
//                 </strong>
//               </h6>
//             </div>
//             <div className="d-flex">
//               <h6 className="col-4">
//                 <strong>Payment Method</strong>
//               </h6>
//               <h6>
//                 <strong>{transaction?.paymentMethod || "N/A"}</strong>
//               </h6>
//             </div>
//             <div className="d-flex">
//               <h6 className="col-4">
//                 <strong>Description</strong>
//               </h6>
//               <h6>
//                 <strong>{transaction?.description || "N/A"}</strong>
//               </h6>
//             </div>
//           </div>
//         </div>
//         {/* <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th scope="col">Fee Type</th>
//               <th scope="col">Amount ({currentCurrency()})</th>
//             </tr>
//           </thead>
//           <tbody>
//             {feeBreakdown.map((fee, index) => (
//               <tr key={index}>
//                 <td>{fee.name}</td>
//                 <td>{fee.amount}</td>
//               </tr>
//             ))}
//             <tr>
//               <td><strong>Total</strong></td>
//               <td><strong>{currentCurrency()} {transaction?.amount || "-"}</strong></td>
//             </tr>
//           </tbody>
//         </table> */}


//         <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th>Fee Type</th>
//               <th>Amount ({currentCurrency()})</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Tuition Fee</td>
//               <td>500</td>
//             </tr>
//             <tr>
//               <td>Maintenance Fee</td>
//               <td>100</td>
//             </tr>
//             <tr>
//               <td>Exam Fee</td>
//               <td>100</td>
//             </tr>
//             <tr>
//               <td>Transport Fee</td>
//               <td>0</td>
//             </tr>
//             <tr>
//               <td><strong>Total</strong></td>
//               <td><strong>700</strong></td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <div className="d-flex justify-content-center">
//         <button onClick={handlePrint} className="btn blue__btn">
//           Print Receipt
//         </button>
//         <button onClick={handleDelete} className="ml-5 btn btn-danger">
//           Cancel Payment
//         </button>
//       </div>
//     </>
//   );
// }

// export default PaymentReceipt;


import React, { useState, useEffect } from "react";
import axios from "../../../store/axios";
import { useParams, useHistory } from "react-router-dom";
import moment from "moment";
import { errorAlert, currentCurrency } from "../../../utils";
import { monthYear } from "../../../data";
import "./PaymentReceipt.css"; // Import the CSS file


const today = new Date();

function PaymentReceipt() {
  const [state, setState] = useState({});
  const [transaction, setTransaction] = useState({});
  const [user, setUser] = useState({});
  const [guardianName, setGuardianName] = useState('');
  const [feeBreakdown, setFeeBreakdown] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios.get("/school").then((res) => {
      setState(res.data);
    });
  }, []);

  useEffect(() => {
    const fetchTransactionDetails = async () => {
      try {
        const transactionResponse = await axios.get(`/transactions/${id}`);
        const transactionData = transactionResponse.data;
        setTransaction(transactionData);

        const userResponse = await axios.get(`/students/student/${transactionData.fees.userID}`);
        const userDetails = userResponse.data.student;
        setUser(userDetails);

        // Fetch guardian details
        const studentsResponse = await axios.get("/students");
        const students = studentsResponse.data;
        const matchedStudent = students.find(student => student.userID === transactionData.fees.userID);

        const defaultFees = {
          tuitionFee: 500,
          examFee: 100,
          maintenanceFee: 100,
        };
        if (matchedStudent) {
          const { guadian } = matchedStudent;
          const guardianName = guadian.length > 0 ? guadian[0].name : 'No guardian info';
          setGuardianName(guardianName);
        }

        // Set fee breakdown
        const breakdown = [
          { name: "Tuition Fee", amount: transactionData.fees?.tuitionFee || 500 },
          { name: "Exam Fee", amount: transactionData.fees?.examFee || 100 },
          { name: "Transport Fee", amount: transactionData.fees?.transportFee || 0 },
          { name: "Maintenance Fee", amount: transactionData.fees?.maintenanceFee || 100 }
        ];
        setFeeBreakdown(breakdown);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTransactionDetails();
  }, [id]);

  const handlePrint = () => {
    window.print();
  };

  const handleDelete = () => {
    axios.delete(`/transactions/delete/${id}`).then((res) => {
      if (res.data.error) {
        errorAlert(res.data.error);
        return;
      }
      history.goBack();
    });
  };

  const renderPaySlip = () => (<div className="border content__container1 mb-5 blue-border  image-container">
    <img src="https://i.ibb.co/7QQgtgn/Pngtree-education-and-school-logo-design-9035365.png" alt="Left" className="left-image" />
    <img src="https://i.ibb.co/fMm814T/IMG-20240730-WA0009-removebg-preview.png" alt="Right" className="right-image" />
    <div className="text-center border-bottom p-3 blue-border-bottom">
      <h2 className="title-text">{state?.fullName}</h2>
      <h5 className="motto-text">{state?.motto}</h5>
      <h6 style={{ fontWeight: "bold" }}>
        <strong>
          Receipt for {moment(transaction?.date).format("D MMMM YYYY")}
        </strong>
      </h6>
    </div>
    <div className=" key-value-container" >
      <div className="row p-3 " style={{
        marginLeft: window.innerWidth >= 1200 ? "60px" : "0px"
      }}>
        <div className="col-6">
          <div className="d-flex align-items-center mb-2">
            <h6 className="key-col col-6">
              <strong style={{ fontWeight: "bold", color: "#fe3131" }} >Date :</strong>
            </h6>
            <h6 className="value-col">
              <strong style={{ fontWeight: "bold", color: "#14c859" }}>{moment(transaction?.date).format("D MMMM YYYY")}</strong>
            </h6>
          </div>
          <div className="d-flex align-items-center mb-2">
            <h6 className="key-col col-6">
              <strong style={{ fontWeight: "bold", color: "#fe3131" }}>Name :</strong>
            </h6>
            <h6 className="value-col">
              <strong style={{ fontWeight: "bold", color: "#14c859" }}>{user?.name} {user?.middleName} {user?.surname}</strong>
            </h6>
          </div>
          <div className="d-flex align-items-center mb-2">
            <h6 className="key-col col-6">
              <strong style={{ fontWeight: "bold", color: "#fe3131" }}>Class :</strong>
            </h6>
            <h6 className="value-col">
              <strong style={{ fontWeight: "bold", color: "#14c859" }}>{user?.classID ? user.classID.toUpperCase() : "-"}</strong>
            </h6>
          </div>
          <div className="d-flex align-items-center mb-2">
            <h6 className="key-col col-6">
              <strong style={{ fontWeight: "bold", color: "#fe3131" }}>UserID :</strong>
            </h6>
            <h6 className="value-col">
              <strong style={{ fontWeight: "bold", color: "#14c859" }}>{transaction.fees?.userID || "-"}</strong>
            </h6>
          </div>
          <div className="d-flex align-items-center mb-2">
            <h6 className="key-col col-6">
              <strong style={{ fontWeight: "bold", color: "#fe3131" }}>Guardian Name :</strong>
            </h6>
            <h6 className="value-col">
              <strong style={{ fontWeight: "bold", color: "#14c859" }}>{guardianName}</strong>
            </h6>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex align-items-center mb-2">
            <h6 className="key-col col-6">
              <strong style={{ fontWeight: "bold", color: "#fe3131" }}>Academic Year :</strong>
            </h6>
            <h6 className="value-col">
              <strong style={{ fontWeight: "bold", color: "#14c859" }}>{transaction?.fees?.academicYear || "-"}</strong>
            </h6>
          </div>
          <div className="d-flex align-items-center mb-2">
            <h6 className="key-col col-6">
              <strong style={{ fontWeight: "bold", color: "#fe3131" }}>Term :</strong>
            </h6>
            <h6 className="value-col">
              <strong style={{ fontWeight: "bold", color: "#14c859" }}>{transaction?.fees?.term || "-"}</strong>
            </h6>
          </div>
          <div className="d-flex align-items-center mb-2">
            <h6 className="key-col col-6">
              <strong style={{ fontWeight: "bold", color: "#fe3131" }}>Amount Paid :</strong>
            </h6>
            <h6 className="value-col">
              <strong style={{ fontWeight: "bold", color: "#14c859" }}>{currentCurrency()} {transaction?.amount || "-"}</strong>
            </h6>
          </div>
          <div className="d-flex align-items-center mb-2">
            <h6 className="key-col col-6">
              <strong style={{ fontWeight: "bold", color: "#fe3131" }}>Payment Method :</strong>
            </h6>
            <h6 className="value-col">
              <strong style={{ fontWeight: "bold", color: "#14c859" }}>{transaction?.paymentMethod || "N/A"}</strong>
            </h6>
          </div>
          <div className="d-flex align-items-center mb-2">
            <h6 className="key-col col-6">
              <strong style={{ fontWeight: "bold", color: "#fe3131" }}>Description :</strong>
            </h6>
            <h6 className="value-col">
              <strong style={{ fontWeight: "bold", color: "#14c859" }}>{transaction?.description || "N/A"}</strong>
            </h6>
          </div>
        </div>
      </div>
    </div>

    <table className="table table-bordered blue-border">
      <thead>
        <tr>
          <th className="text-left" style={{ width: "50%", fontWeight: "bold" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fee Type
          </th>
          <th className="text-left" style={{ width: "50%", fontWeight: "bold" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amount ({currentCurrency()})
          </th>
        </tr>
      </thead>
      <tbody>
        {feeBreakdown.map((fee, index) => (
          <tr key={index}>
            <td style={{ fontWeight: "bold" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{fee.name}</td>
            <td style={{ fontWeight: "bold" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{fee.amount}</td>
          </tr>
        ))}
        <tr>
          <td ><strong style={{ fontWeight: "bold" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total</strong></td>
          <td><strong style={{ fontWeight: "bold" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{transaction?.amount || "-"} &nbsp;{currentCurrency()}</strong></td>
        </tr>
      </tbody>
    </table>
    <div>
      <div>
        <h6 style={{ fontWeight: "bold" }}>
          Date: <strong>{moment().format("dddd Do MMMM YYYY")}</strong>
        </h6>
      </div>
      <div className="d-flex justify-content-between">
        <div>
          <h6 style={{ fontWeight: "bold" }}>
            Signature of Receiver: ..........................
          </h6>
        </div>
        <div>
          <h6 style={{ fontWeight: "bold" }}>
            Signature of Guardian: ..........................
          </h6>
        </div>
      </div>
    </div>
  </div>)


  return (
    <>
      <div className="container" id="section-to-print">
        {/* Render the pay slip twice */}
        {renderPaySlip()}
        {renderPaySlip()}
      </div>
      <div className="d-flex justify-content-center">
        <button onClick={handlePrint} className="btn blue__btn">
          Print Receipt
        </button>
        <button onClick={handleDelete} className="ml-5 btn btn-danger">
          Cancel Payment
        </button>
      </div>
    </>
  );
}

export default PaymentReceipt;
