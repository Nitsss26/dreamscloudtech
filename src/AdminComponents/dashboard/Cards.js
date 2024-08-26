// // import React, { useState, useEffect } from "react";
// // import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
// // import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';

// // import Card from "../../components/dashboard/Card";
// // import ClassIcon from "@material-ui/icons/Class";
// // import HomeWorkIcon from "@material-ui/icons/HomeWork";
// // import ImportContactsIcon from "@material-ui/icons/ImportContacts";
// // import BrandingWatermarkIcon from "@material-ui/icons/BrandingWatermark";
// // import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';

// // function Cards({ counts }) {
// //   const [students, setstudents] = useState(0);
// //   const [staff, setstaff] = useState(0);
// //   const [classes, setclasses] = useState(0);
// //   const [campuses, setcampuses] = useState(0);
// //   const [course, setcourse] = useState(0);
// //   const [divisions, setdivisions] = useState(0);

// //   useEffect(() => {
// //     setstudents(counts?.students);
// //     setstaff(counts?.staff);
// //     setclasses(counts?.classes);
// //     setcourse(counts?.courses);
// //     setcampuses(counts?.campuses);
// //     setdivisions(counts?.divisions);
// //   }, [counts]);

// //   return (
// //     <div className="row">
// //       <Card
// //         icon={<SchoolOutlinedIcon style={{ fontSize: 65, color: "#ff4081" }} />}
// //         value={students}
// //         title="Students"
// //         message="Registered Students"
// //         link="/students"
// //       />
// //       <Card
// //         icon={<PeopleAltIcon style={{ fontSize: 65, color: "#32CD32" }} />}
// //         value={staff}
// //         title="Teachers"
// //         message="Registered Teachers"
// //         link="/staff"

// //       />
// //       <Card
// //         icon={<InsertChartOutlinedIcon style={{ fontSize: 65, color: "#fbc02d" }} />}
// //         value={classes}
// //         title="Classes"
// //         message="Registered Classes"
// //         link="/academics/classes"
// //       />
// //       {/* <Card
// //         icon={<BrandingWatermarkIcon />}
// //         value={divisions}
// //         title="Divisions"
// //         message="Registered "
// //         link="/academics/divisions"
// //       />
// //       <Card
// //         icon={<HomeWorkIcon />}
// //         value={campuses}
// //         title="Campuses"
// //         message="Registered Campuses"
// //         link="/students/campus"
// //       /> */}
// //       <Card
// //         icon={<ImportContactsIcon style={{ fontSize: 65, color: "#00bcd4" }} />}
// //         value={course}
// //         title="Courses"
// //         message="Registered Cources"
// //         link="/academics/courses"
// //       />
// //       <Card
// //         icon={<SchoolOutlinedIcon style={{ fontSize: 65, color: "#ff4081" }} />}
// //         value={students}
// //         title="Students"
// //         message="Registered Students"
// //         link="/students"
// //       />
// //       <Card
// //         icon={<PeopleAltIcon style={{ fontSize: 65, color: "#32CD32" }} />}
// //         value={staff}
// //         title="Teachers"
// //         message="Registered Teachers"
// //         link="/staff"

// //       />
// //       <Card
// //         icon={<InsertChartOutlinedIcon style={{ fontSize: 65, color: "#fbc02d" }} />}
// //         value={classes}
// //         title="Classes"
// //         message="Registered Classes"
// //         link="/academics/classes"
// //       />
// //       {/* <Card
// //         icon={<BrandingWatermarkIcon />}
// //         value={divisions}
// //         title="Divisions"
// //         message="Registered "
// //         link="/academics/divisions"
// //       />
// //       <Card
// //         icon={<HomeWorkIcon />}
// //         value={campuses}
// //         title="Campuses"
// //         message="Registered Campuses"
// //         link="/students/campus"
// //       /> */}
// //       <Card
// //         icon={<ImportContactsIcon style={{ fontSize: 65, color: "#00bcd4" }} />}
// //         value={course}
// //         title="Courses"
// //         message="Registered Cources"
// //         link="/academics/courses"
// //       />
// //         <Card
// //         icon={<SchoolOutlinedIcon style={{ fontSize: 65, color: "#ff4081" }} />}
// //         value={students}
// //         title="Students"
// //         message="Registered Students"
// //         link="/students"
// //       />
// //       <Card
// //         icon={<PeopleAltIcon style={{ fontSize: 65, color: "#32CD32" }} />}
// //         value={staff}
// //         title="Teachers"
// //         message="Registered Teachers"
// //         link="/staff"

// //       />
// //       <Card
// //         icon={<InsertChartOutlinedIcon style={{ fontSize: 65, color: "#fbc02d" }} />}
// //         value={classes}
// //         title="Classes"
// //         message="Registered Classes"
// //         link="/academics/classes"
// //       />
// //       {/* <Card
// //         icon={<BrandingWatermarkIcon />}
// //         value={divisions}
// //         title="Divisions"
// //         message="Registered "
// //         link="/academics/divisions"
// //       />
// //       <Card
// //         icon={<HomeWorkIcon />}
// //         value={campuses}
// //         title="Campuses"
// //         message="Registered Campuses"
// //         link="/students/campus"
// //       /> */}
// //       <Card
// //         icon={<ImportContactsIcon style={{ fontSize: 65, color: "#00bcd4" }} />}
// //         value={course}
// //         title="Courses"
// //         message="Registered Cources"
// //         link="/academics/courses"
// //       />
// //     </div>
// //   );
// // }

// // export default Cards;


import React, { useState, useEffect } from "react";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import CIcon from "@coreui/icons-react";
import Card from "../../components/dashboard/Card";
import Card2 from "../../components/dashboard/Card2";
import ClassIcon from "@material-ui/icons/Class";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import BrandingWatermarkIcon from "@material-ui/icons/BrandingWatermark";
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';

function Cards({ counts }) {
    const [students, setstudents] = useState(0);
    const [staff, setstaff] = useState(0);
    const [classes, setclasses] = useState(0);
    const [campuses, setcampuses] = useState(0);
    const [course, setcourse] = useState(0);
    const [divisions, setdivisions] = useState(0);

    useEffect(() => {
        setstudents(counts?.students);
        setstaff(counts?.staff);
        setclasses(counts?.classes);
        setcourse(counts?.courses);
        setcampuses(counts?.campuses);
        setdivisions(counts?.divisions);
    }, [counts]);

    return (
        <div className="row mt-2 mb-2">
            <Card
                icon={<SchoolOutlinedIcon style={{ fontSize: 65, color: "#ff4081" }} />}
                value={students}
                title="Students"
                message="Registered Students"
                link="/students"
            />
            <Card
                icon={<CIcon
                    name="cil-contact"
                    size="4xl"
                    style={{ color: " #9c27b0" }} // Pink
                />}
                value={staff}
                title="Teachers"
                message="Registered Teachers"
                link="/staff"

            />
            <Card2
                icon={<CIcon name="cil-bank" size="4xl" style={{ color: "#fe3131" }} />}
                // value={classes}
                title="Finanace"
                // message="Registered Classes"
                link="/finance/students"
            />
            {/* <Card
        icon={<BrandingWatermarkIcon />}
        value={divisions}
        title="Divisions"
        message="Registered "
        link="/academics/divisions"
      />
      <Card
        icon={<HomeWorkIcon />}
        value={campuses}
        title="Campuses"
        message="Registered Campuses"
        link="/students/campus"
      /> */}
            <Card2
                icon={<CIcon name="cil-calendar-check"
                    size="4xl"
                    style={{ color: "#00bcd4" }}
                />}
                value={course}
                title="Attendance"
                message="Registered Cources"
                link="/attendance/students"
            />
            <Card2
                icon={<CIcon
                    name="cil-truck"

                    size="4xl"
                    style={{ color: "#fbc02d" }}
                />}
                value={students}
                title="Transport"
                message="Registered Students"
                link="/students/dormitories"
            />
            <Card2
                icon={<CIcon
                    name="cil-cash"
                    size="4xl"
                    style={{ color: "#2ad76c" }}
                />}
                value={staff}
                title="Payrow"
                message="Registered Teachers"
                link="/finance/staff/payrow"

            />
            <Card
                icon={<InsertChartOutlinedIcon style={{ fontSize: 65, color: "#fbc02d" }} />}
                value={classes}
                title="Classes"
                message="Registered Classes"
                link="/academics/classes"
            />
            {/* <Card
        icon={<BrandingWatermarkIcon />}
        value={divisions}
        title="Divisions"
        message="Registered "
        link="/academics/divisions"
      />
      <Card
        icon={<HomeWorkIcon />}
        value={campuses}
        title="Campuses"
        message="Registered Campuses"
        link="/students/campus"
      /> */}
            <Card
                icon={<CIcon
                    name="cil-notes"
                    size="4xl"
                    style={{ color: "#00bcd4" }}
                />}
                value={course}
                title="Courses"
                message="Registered Cources"
                link="/academics/courses"
            />
            <Card2
                icon={<CIcon
                    name="cil-clock"
                    size="4xl"
                    style={{ color: "#7e57c2" }}
                />}
                value={students}
                title="TimeTable"
                message="Registered Students"
                link="/timetable"
            />
            <Card2
                icon={<CIcon
                    name="cil-calendar"
                    size="4xl"
                    style={{ color: "#2ad76c" }}
                />}
                value={staff}
                title="Calendar"
                message="Registered Teachers"
                link="/academics/calender"

            />
            <Card2
                icon={<CIcon name="cil-envelope-open" style={{ color: "#ff5722" }} size="4xl" />}
                value={classes}
                title="School Notice"
                message="Registered Classes"
                link="/notifications"
            />
            {/* <Card
        icon={<BrandingWatermarkIcon />}
        value={divisions}
        title="Divisions"
        message="Registered "
        link="/academics/divisions"
      />
      <Card
        icon={<HomeWorkIcon />}
        value={campuses}
        title="Campuses"
        message="Registered Campuses"
        link="/students/campus"
      /> */}
            <Card2
                icon={<CIcon
                    name="cil-chat-bubble"
                    style={{ color: "#3f51b5" }}
                    size="4xl"
                />}
                value={course}
                title="Message"
                message="Registered Cources"
                link="/messages/students"
            />
            <Card
                icon={<CIcon
                    name="cil-bus-alt"
                    style={{ color: "#7e57c2" }}
                    size="4xl"
                />}
                value={20}
                title="Buses"
                message="Registered Buses"
                link="/students/dormitories"
            />
            <Card
                icon={<CIcon
                    name="cib-whatsapp"
                    style={{ color: "#32CD32" }}
                    size="4xl"
                />}
                value={50}
                title="SMS"
                message="Registered Count"
                link="/messages/group"

            />
            <Card2
                icon={<CIcon name="cilCart" size="4xl" style={{ color: "#ff4081" }} />}
                value={classes}
                title="Inventory"
                message="Registered Classes"
                link="/store/inventory"
            />
            {/* <Card
        icon={<BrandingWatermarkIcon />}
        value={divisions}
        title="Divisions"
        message="Registered "
        link="/academics/divisions"
      />
      <Card
        icon={<HomeWorkIcon />}
        value={campuses}
        title="Campuses"
        message="Registered Campuses"
        link="/students/campus"
      /> */}
            <Card2
                icon={<CIcon
                    name="cil-book"
                    size="4xl"
                    style={{ color: "#fbc02d" }}
                />}
                value={course}
                title="Library"
                message="Registered Cources"
                link="/library"
            />
            <Card2
                icon={<CIcon
                    name="cil-description"
                    size="4xl"
                    style={{ color: " #9c27b0" }}
                />}
                value={students}
                title="Certificates"
                message="Registered Students"
                link="/certificates"
            />
            <Card2
                icon={<CIcon
                    name="cil-settings"
                    size="4xl"
                    style={{ color: "#00bcd4" }}
                />}
                value={staff}
                title="Settings"
                message="Registered Teachers"
                link="/settings"

            />
        </div>
    );
}

export default Cards;

// import React, { useState, useEffect } from "react";
// import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
// import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';

// import Card from "../../components/dashboard/Card";
// import ClassIcon from "@material-ui/icons/Class";
// import HomeWorkIcon from "@material-ui/icons/HomeWork";
// import ImportContactsIcon from "@material-ui/icons/ImportContacts";
// import BrandingWatermarkIcon from "@material-ui/icons/BrandingWatermark";
// import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';

// function Cards({ counts }) {
//   const [students, setstudents] = useState(0);
//   const [staff, setstaff] = useState(0);
//   const [classes, setclasses] = useState(0);
//   const [campuses, setcampuses] = useState(0);
//   const [course, setcourse] = useState(0);
//   const [divisions, setdivisions] = useState(0);

//   useEffect(() => {
//     setstudents(counts?.students);
//     setstaff(counts?.staff);
//     setclasses(counts?.classes);
//     setcourse(counts?.courses);
//     setcampuses(counts?.campuses);
//     setdivisions(counts?.divisions);
//   }, [counts]);

//   return (
//     <div className="row">
//       <Card
//         icon={<SchoolOutlinedIcon style={{ fontSize: 65, color: "#ff4081" }} />}
//         value={students}
//         title="Students"
//         message="Registered Students"
//         link="/students"
//       />
//       <Card
//         icon={<PeopleAltIcon style={{ fontSize: 65, color: "#32CD32" }} />}
//         value={staff}
//         title="Teachers"
//         message="Registered Teachers"
//         link="/staff"

//       />
//       <Card
//         icon={<InsertChartOutlinedIcon style={{ fontSize: 65, color: "#fbc02d" }} />}
//         value={classes}
//         title="Classes"
//         message="Registered Classes"
//         link="/academics/classes"
//       />
//       {/* <Card
//         icon={<BrandingWatermarkIcon />}
//         value={divisions}
//         title="Divisions"
//         message="Registered "
//         link="/academics/divisions"
//       />
//       <Card
//         icon={<HomeWorkIcon />}
//         value={campuses}
//         title="Campuses"
//         message="Registered Campuses"
//         link="/students/campus"
//       /> */}
//       <Card
//         icon={<ImportContactsIcon style={{ fontSize: 65, color: "#00bcd4" }} />}
//         value={course}
//         title="Courses"
//         message="Registered Cources"
//         link="/academics/courses"
//       />
//       <Card
//         icon={<SchoolOutlinedIcon style={{ fontSize: 65, color: "#ff4081" }} />}
//         value={students}
//         title="Students"
//         message="Registered Students"
//         link="/students"
//       />
//       <Card
//         icon={<PeopleAltIcon style={{ fontSize: 65, color: "#32CD32" }} />}
//         value={staff}
//         title="Teachers"
//         message="Registered Teachers"
//         link="/staff"

//       />
//       <Card
//         icon={<InsertChartOutlinedIcon style={{ fontSize: 65, color: "#fbc02d" }} />}
//         value={classes}
//         title="Classes"
//         message="Registered Classes"
//         link="/academics/classes"
//       />
//       {/* <Card
//         icon={<BrandingWatermarkIcon />}
//         value={divisions}
//         title="Divisions"
//         message="Registered "
//         link="/academics/divisions"
//       />
//       <Card
//         icon={<HomeWorkIcon />}
//         value={campuses}
//         title="Campuses"
//         message="Registered Campuses"
//         link="/students/campus"
//       /> */}
//       <Card
//         icon={<ImportContactsIcon style={{ fontSize: 65, color: "#00bcd4" }} />}
//         value={course}
//         title="Courses"
//         message="Registered Cources"
//         link="/academics/courses"
//       />
//         <Card
//         icon={<SchoolOutlinedIcon style={{ fontSize: 65, color: "#ff4081" }} />}
//         value={students}
//         title="Students"
//         message="Registered Students"
//         link="/students"
//       />
//       <Card
//         icon={<PeopleAltIcon style={{ fontSize: 65, color: "#32CD32" }} />}
//         value={staff}
//         title="Teachers"
//         message="Registered Teachers"
//         link="/staff"

//       />
//       <Card
//         icon={<InsertChartOutlinedIcon style={{ fontSize: 65, color: "#fbc02d" }} />}
//         value={classes}
//         title="Classes"
//         message="Registered Classes"
//         link="/academics/classes"
//       />
//       {/* <Card
//         icon={<BrandingWatermarkIcon />}
//         value={divisions}
//         title="Divisions"
//         message="Registered "
//         link="/academics/divisions"
//       />
//       <Card
//         icon={<HomeWorkIcon />}
//         value={campuses}
//         title="Campuses"
//         message="Registered Campuses"
//         link="/students/campus"
//       /> */}
//       <Card
//         icon={<ImportContactsIcon style={{ fontSize: 65, color: "#00bcd4" }} />}
//         value={course}
//         title="Courses"
//         message="Registered Cources"
//         link="/academics/courses"
//       />
//     </div>
//   );
// }

// export default Cards;


// import React, { useState, useEffect } from "react";
// import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
// import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';

// import Card from "../../components/dashboard/Card";
// import ClassIcon from "@material-ui/icons/Class";
// import HomeWorkIcon from "@material-ui/icons/HomeWork";
// import ImportContactsIcon from "@material-ui/icons/ImportContacts";
// import BrandingWatermarkIcon from "@material-ui/icons/BrandingWatermark";
// import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';

// function Cards({ counts }) {
//   const [students, setstudents] = useState(0);
//   const [staff, setstaff] = useState(0);
//   const [classes, setclasses] = useState(0);
//   const [campuses, setcampuses] = useState(0);
//   const [course, setcourse] = useState(0);
//   const [divisions, setdivisions] = useState(0);

//   useEffect(() => {
//     setstudents(counts?.students);
//     setstaff(counts?.staff);
//     setclasses(counts?.classes);
//     setcourse(counts?.courses);
//     setcampuses(counts?.campuses);
//     setdivisions(counts?.divisions);
//   }, [counts]);

//   return (
//     <div className="row">
//       <Card
//         icon={<SchoolOutlinedIcon style={{ fontSize: 65, color: "#ff4081" }} />}
//         value={students}
//         title="Students"
//         message="Registered Students"
//         link="/students"
//       />
//       <Card
//         icon={<PeopleAltIcon style={{ fontSize: 65, color: "#32CD32" }} />}
//         value={staff}
//         title="Teachers"
//         message="Registered Teachers"
//         link="/staff"

//       />
//       <Card
//         icon={<InsertChartOutlinedIcon style={{ fontSize: 65, color: "#fbc02d" }} />}
//         value={classes}
//         title="Classes"
//         message="Registered Classes"
//         link="/academics/classes"
//       />
//       {/* <Card
//         icon={<BrandingWatermarkIcon />}
//         value={divisions}
//         title="Divisions"
//         message="Registered "
//         link="/academics/divisions"
//       />
//       <Card
//         icon={<HomeWorkIcon />}
//         value={campuses}
//         title="Campuses"
//         message="Registered Campuses"
//         link="/students/campus"
//       /> */}
//       <Card
//         icon={<ImportContactsIcon style={{ fontSize: 65, color: "#00bcd4" }} />}
//         value={course}
//         title="Courses"
//         message="Registered Cources"
//         link="/academics/courses"
//       />

//     </div>
//   );
// }

// export default Cards;
