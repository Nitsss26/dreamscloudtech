import React, { useState, useEffect } from "react";
import ListTable from "./billPayment/PaymentTable";
import Search from "../shared/Search4";
import { useSelector } from "react-redux";
import { selectClasses } from "../../store/slices/schoolSlice";
import axios from "../../store/axios";
import { Link, useHistory } from "react-router-dom";
import { errorAlert, currentCurrency } from "../../utils";

const tableHeader = [
  { id: "date", name: "Date" },
  { id: "userID", name: "Student ID" },
  { id: "classID", name: "Class ID" },
  { id: "name", name: "First Name" },
  { id: "surname", name: "Surname" },
  { id: "guardianName", name: "Guardian Name" },
  { id: "paymentMethod", name: "Payment Method" },
  { id: "amount", name: `Amount (${currentCurrency()})` },
];

function PrepareBill() {
  const [data, setData] = useState([]);
  const [storeData, setStoreData] = useState([]);
  const [classID, setClassID] = useState("");
  const [userID, setUserID] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState(""); // New state for date
  const [fullName, setFullName] = useState(""); // New state for full name
  const classes = useSelector(selectClasses);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const transactionsResponse = await axios.get("/transactions/students/fees");
        const transactions = transactionsResponse.data;
        const studentsResponse = await axios.get("/students");
        const students = studentsResponse.data;

        const mergedData = transactions.map((transaction) => {
          const matchedStudent = students.find(student => student.userID === transaction.userID);
          if (matchedStudent) {
            const { classID, name, surname, guadian } = matchedStudent;
            const guardianName = guadian.length > 0 ? guadian[0].name : 'No guardian info';
            return {
              ...transaction,
              classID: classID.toUpperCase(), // Convert classID to uppercase
              name,
              surname,
              guardianName,
            };
          } else {
            return transaction;
          }
        });

        setData(mergedData);
        setStoreData(mergedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const inputFields = [
    {
      label: "Search by Student ID",
      type: "text",
      value: userID,
      name: "studentID",
      onChange: setUserID,
    },
    {
      label: "Search by Class ID",
      type: "text",
      value: classID,
      name: "classID",
      onChange: setClassID,
    },
    {
      label: "Search by Name",
      type: "text",
      value: fullName,
      name: "fullName",
      onChange: setFullName,
    },
    {
      label: "Search by Date",
      type: "date",
      value: date,
      name: "date",
      onChange: setDate,
    },
  ];

  const handleDelete = (id) => {
    axios.delete(`/transactions/delete/${id}`).then((res) => {
      if (res.data.error) {
        errorAlert(res.data.error);
      }
      setData(data.filter((e) => e._id !== id));
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    let newData = [...storeData];
    if (classID) {
      newData = newData.filter((i) =>
        i.classID.toLowerCase().includes(classID.toLowerCase())
      );
    }
    if (userID) {
      newData = newData.filter((i) =>
        i.userID.toLowerCase().includes(userID.toLowerCase())
      );
    }
    if (status) {
      newData = newData.filter((i) =>
        i.status.toLowerCase().includes(status.toLowerCase())
      );
    }
    if (date) {
      newData = newData.filter((i) => new Date(i.date).toISOString().split('T')[0] === date);
    }
    if (fullName) {
      newData = newData.filter((i) =>
        `${i.name} ${i.surname}`.toLowerCase().includes(fullName.toLowerCase())
      );
    }
    setData(newData);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setData(storeData);
    setStatus("");
    setClassID("");
    setDate("");
    setFullName("");
  };

  const handleEdit = (id) => {
    history.push(`/finance/transactions/receipt/${id}`);
  };

  return (
    <div style={{ marginTop: '-1.3rem' }} >
      <div className="float-right mb-2">
        <Link className="btn blue__btn" to="/finance/students/fees">
          Make A Payment
        </Link>
      </div>
      <h3 className="mb-4" style={{ color: '#042954' }}>
        Students Fees Transactions
      </h3>

      <Search
        title="Filter Students"
        handleReset={handleReset}
        handleSearch={handleSearch}
        inputFields={inputFields}
      />
      <ListTable
        data={data}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        tableHeader={tableHeader}
        isEdit={true}
      />
    </div>
  );
}

export default PrepareBill;
