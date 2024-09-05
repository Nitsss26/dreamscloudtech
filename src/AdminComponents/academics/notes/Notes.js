// import React, { useState, useEffect } from "react";
// import FileTable from "./NotesTable";
// import { Link } from "react-router-dom";
// import Search from "../../shared/Search";
// import { useHistory } from "react-router-dom";
// import axios from "../../../store/axios";
// import { errorAlert } from "../../../utils";
// import { useSelector } from "react-redux";
// import { selectUser } from "../../../store/slices/userSlice";

// const tableHead = [
//   { id: "date", name: "Added" },
//   { id: "topic", name: "Topic" },
//   { id: "courseID", name: "Course" },
//   { id: "classID", name: "Class" },
//   { id: "senderId", name: "Teacher" },
//   { id: "file", name: "File" },
// ];

// function Notes() {
//   const [subject, setsubject] = useState("");
//   const [classID, setclass] = useState("");
//   const [teacher, setteacher] = useState("");
//   const [notes, setnotes] = useState([]);
//   const [storedata, setstoredata] = useState([]);
//   const history = useHistory();
//   const user = useSelector(selectUser);

//   console.log(notes);

//   useEffect(() => {
//     axios.get("/notes").then((res) => {
//       setnotes(res.data);
//       setstoredata(res.data);
//     });
//   }, []);

//   const handleReset = (e) => {
//     e.preventDefault();
//     setteacher("");
//     setclass("");
//     setsubject("");
//     setnotes(storedata);
//   };

//   const handleEdit = (id) => {
//     history.push(`/academics/notes/edit/${id}`);
//   };

//   const handleDelete = (id) => {
//     axios.delete(`/notes/delete/${id}`).then((res) => {
//       if (res.data.error) {
//         errorAlert(res.data.error);
//       }
//       setnotes(notes.filter((e) => e._id !== id));
//     });
//   };

//   const searchInputForm = [
//     {
//       type: "text",
//       name: "subject",
//       label: "Search by Course",
//       value: subject,
//       onChange: setsubject,
//     },
//     {
//       type: "text",
//       name: "class",
//       label: "Search by Class",
//       value: classID,
//       onChange: setclass,
//     },
//     {
//       type: "text",
//       name: "teacher",
//       label: "Search by Teacher",
//       value: teacher,
//       onChange: setteacher,
//     },
//   ];

//   const handleSearch = (e) => {
//     e.preventDefault();
//     let newClasses = [];
//     if (classID) {
//       newClasses = storedata.filter((i) =>
//         i?.classID?.toLowerCase().includes(classID?.toLowerCase())
//       );
//     }
//     if (subject) {
//       newClasses = storedata.filter((i) =>
//         i?.courseID?.toLowerCase().includes(subject?.toLowerCase())
//       );
//     }
//     if (teacher) {
//       newClasses = storedata.filter((i) =>
//         i?.senderId?.toLowerCase().includes(teacher?.toLowerCase())
//       );
//     }
//     setnotes(newClasses);
//   };

//   return (
//     <div>
//       <Search
//         title="Academics Notes"
//         handleReset={handleReset}
//         handleSearch={handleSearch}
//         inputFields={searchInputForm}
//       />
//       <div className="content__container">
//         <div className="d-flex justify-content-between">
//           <h3>Notes List</h3>
//           <Link to="/academics/notes/add" className="btn blue__btn ">
//             Add Notes
//           </Link>
//         </div>
//         <FileTable
//           handleDelete={handleDelete}
//           handleEdit={handleEdit}
//           data={notes}
//           user={user?.id}
//           tableHeader={tableHead}
//         />
//       </div>
//     </div>
//   );
// }

// export default Notes;


import React, { useState } from "react";
import { TextField, Button, Card, CardMedia, CardContent, Typography, Grid, Box } from "@mui/material";
import './Library.css'; // Custom CSS for additional styles

const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", rating: 4.5, image: "https://m.media-amazon.com/images/I/41XMaCHkrgL._SY1000_.jpg" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", rating: 4.8, image: "https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UF1000,1000_QL80_.jpg" },
  { id: 3, title: "1984", author: "George Orwell", rating: 4.7, image: "https://m.media-amazon.com/images/I/7180qjGSgDL._AC_UF1000,1000_QL80_.jpg" },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", rating: 4.6, image: "https://m.media-amazon.com/images/I/91eKRbuhgaL._AC_UF1000,1000_QL80_.jpg" },
];

function Notes() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm) ||
    book.author.toLowerCase().includes(searchTerm)
  );

  return (
    <Box sx={{ backgroundColor: "#fffff5", padding: "20px", minHeight: "100vh" }}>
      <Typography variant="h3" align="center" gutterBottom>
        Welcome to the Library
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <TextField
          variant="outlined"
          label="Search for books, authors..."
          value={searchTerm}
          onChange={handleSearch}
          sx={{ width: '50%', backgroundColor: "#ffffff" }}
        />
      </Box>

      <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
        <Typography variant="h6">Categories:</Typography>
        <Button variant="outlined" sx={{ margin: "0 10px" }}>Fiction</Button>
        <Button variant="outlined" sx={{ margin: "0 10px" }}>Non-Fiction</Button>
        <Button variant="outlined" sx={{ margin: "0 10px" }}>Sci-Fi</Button>
        <Button variant="outlined" sx={{ margin: "0 10px" }}>Human Nature</Button>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
              <Card sx={{ backgroundColor: "#ffffff", textAlign: "center" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={book.image}
                  alt={book.title}
                />
                <CardContent>
                  <Typography variant="h5">{book.title}</Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {book.author}
                  </Typography>
                  <Typography variant="body2" sx={{ marginTop: "10px" }}>
                    Rating: {book.rating} ⭐
                  </Typography>
                  <Button variant="contained" sx={{ marginTop: "10px" }}>
                    Borrow
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" color="textSecondary">
            No books found.
          </Typography>
        )}
      </Grid>
    </Box>
  );
}

export default Notes;
