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


import React, { useState, useEffect } from "react";
import axios from "../../../store/axios";
import { useParams, useHistory } from "react-router-dom";
import moment from "moment";
import { errorAlert, currentCurrency } from "../../../utils";

function PaymentReceipt() {
  const [state, setstate] = useState({});
  const [transaction, settransaction] = useState({});
  const [user, setuser] = useState({});
  const [guardianName, setGuardianName] = useState('');
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios.get("/school").then((res) => {
      setstate(res.data);
    });
  }, []);

  useEffect(() => {
    const fetchTransactionDetails = async () => {
      try {
        const transactionResponse = await axios.get(`/transactions/${id}`);
        const transactionData = transactionResponse.data;
        settransaction(transactionData);

        const userResponse = await axios.get(`/students/student/${transactionData.fees.userID}`);
        const userDetails = userResponse.data.student;
        setuser(userDetails);

        // Fetch guardian details
        const studentsResponse = await axios.get("/students");
        const students = studentsResponse.data;
        const matchedStudent = students.find(student => student.userID === transactionData.fees.userID);

        if (matchedStudent) {
          const { guadian } = matchedStudent;
          const guardianName = guadian.length > 0 ? guadian[0].name : 'No guardian info';
          setGuardianName(guardianName);
        }
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

  return (
    <>
      <div className="border content__container mb-5" id="section-to-print">
        <div className="text-center border-bottom p-3">
          <h2>{state?.fullName}</h2>
          <p>{state?.motto}</p>
        </div>
        <div className="row p-3">
          <div className="col-6">
            <div className="d-flex">
              <h6 className="col-4">
                <strong>Date</strong>
              </h6>
              <h6>
                <strong>{moment(transaction?.date).format("D MMMM YYYY")}</strong>
              </h6>
            </div>
            <div className="d-flex">
              <h6 className="col-4">
                <strong>Name</strong>
              </h6>
              <h6>
                <strong>
                  {user?.name} {user?.middleName} {user?.surname}
                </strong>
              </h6>
            </div>
            <div className="d-flex">
              <h6 className="col-4">
                <strong>Class</strong>
              </h6>
              <h6>
                <strong>{user?.classID ? user.classID.toUpperCase() : "-"}</strong>
              </h6>
            </div>
            <div className="d-flex">
              <h6 className="col-4">
                <strong>UserID</strong>
              </h6>
              <h6>
                <strong>{transaction.fees?.userID || "-"}</strong>
              </h6>
            </div>
            <div className="d-flex">
              <h6 className="col-4">
                <strong>Guardian Name</strong>
              </h6>
              <h6>
                <strong>{guardianName}</strong>
              </h6>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex">
              <h6 className="col-4">
                <strong>Academic Year</strong>
              </h6>
              <h6>
                <strong>{transaction?.fees?.academicYear || "-"}</strong>
              </h6>
            </div>
            <div className="d-flex">
              <h6 className="col-4">
                <strong>Term</strong>
              </h6>
              <h6>
                <strong>{transaction?.fees?.term || "-"}</strong>
              </h6>
            </div>
            <div className="d-flex">
              <h6 className="col-4">
                <strong>Amount Paid</strong>
              </h6>
              <h6>
                <strong>
                  {currentCurrency()} {transaction?.amount || "-"}
                </strong>
              </h6>
            </div>
            <div className="d-flex">
              <h6 className="col-4">
                <strong>Payment Method</strong>
              </h6>
              <h6>
                <strong>{transaction?.paymentMethod || "N/A"}</strong>
              </h6>
            </div>
            <div className="d-flex">
              <h6 className="col-4">
                <strong>Description</strong>
              </h6>
              <h6>
                <strong>{transaction?.description || "N/A"}</strong>
              </h6>
            </div>
          </div>
        </div>
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
