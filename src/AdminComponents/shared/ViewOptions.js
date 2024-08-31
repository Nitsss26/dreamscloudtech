import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";

export default function SimpleMenu({
  id,
  route,
  history,
  isWithdraw,
  handleDelete,
  handleWithdraw,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const user = useSelector(selectUser);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => history.push(`/${route}/${id}`)}>
          View
        </MenuItem>
        {user?.role === "admin" && (
          <MenuItem onClick={() => history.push(`/${route}/edit/${id}`)}>
            Edit
          </MenuItem>
        )}
        {user?.role === "admin" && (
          <MenuItem
            onClick={() => {
              handleWithdraw(id);
            }}
          >
            {isWithdraw ? "UnWithdraw" : "Withdraw"}
          </MenuItem>
        )}
        {user?.role === "admin" && (
          <MenuItem
            onClick={() => {
              handleDelete(id);
            }}
          >
            Delete
          </MenuItem>
        )}
      </Menu>
    </div>
  );
}





// // import React from "react";
// // import IconButton from "@material-ui/core/IconButton";
// // import Menu from "@material-ui/core/Menu";
// // import MenuItem from "@material-ui/core/MenuItem";
// // import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
// // import VisibilityIcon from "@material-ui/icons/Visibility";
// // import EditIcon from "@material-ui/icons/Edit";
// // import DeleteIcon from "@material-ui/icons/Delete";
// // import WithdrawIcon from "@material-ui/icons/AttachMoney"; // Replace with appropriate icon
// // import UnWithdrawIcon from "@material-ui/icons/Cancel"; // Replace with appropriate icon
// // import { useSelector } from "react-redux";
// // import { selectUser } from "../../store/slices/userSlice";

// // export default function SimpleMenu({
// //   id,
// //   route,
// //   history,
// //   isWithdraw,
// //   handleDelete,
// //   handleWithdraw,
// // }) {
// //   const [anchorEl, setAnchorEl] = React.useState(null);
// //   const user = useSelector(selectUser);

// //   const handleClick = (event) => {
// //     setAnchorEl(event.currentTarget);
// //   };

// //   const handleClose = () => {
// //     setAnchorEl(null);
// //   };

// //   return (
// //     <div>
// //       <IconButton
// //         aria-controls="simple-menu"
// //         aria-haspopup="true"
// //         onClick={handleClick}
// //       >
// //         <MoreHorizIcon />
// //       </IconButton>
// //       <Menu
// //         id="simple-menu"
// //         anchorEl={anchorEl}
// //         keepMounted
// //         open={Boolean(anchorEl)}
// //         onClose={handleClose}
// //       >
// //         <MenuItem onClick={() => history.push(`/${route}/${id}`)}>
// //           <VisibilityIcon style={{ marginRight: 8 }} />
// //           View
// //         </MenuItem>
// //         {user?.role === "admin" && (
// //           <MenuItem onClick={() => history.push(`/${route}/edit/${id}`)}>
// //             <EditIcon style={{ marginRight: 8 }} />
// //             Edit
// //           </MenuItem>
// //         )}
// //         {user?.role === "admin" && (
// //           <MenuItem
// //             onClick={() => {
// //               handleWithdraw(id);
// //             }}
// //           >
// //             {isWithdraw ? (
// //               <>
// //                 <UnWithdrawIcon style={{ marginRight: 8 }} />
// //                 UnWithdraw
// //               </>
// //             ) : (
// //               <>
// //                 <WithdrawIcon style={{ marginRight: 8 }} />
// //                 Withdraw
// //               </>
// //             )}
// //           </MenuItem>
// //         )}
// //         {user?.role === "admin" && (
// //           <MenuItem
// //             onClick={() => {
// //               handleDelete(id);
// //             }}
// //           >
// //             <DeleteIcon style={{ marginRight: 8 }} />
// //             Delete
// //           </MenuItem>
// //         )}
// //       </Menu>
// //     </div>
// //   );
// // }

// import React from "react";
// import IconButton from "@material-ui/core/IconButton";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
// import VisibilityIcon from "@material-ui/icons/Visibility";
// import EditIcon from "@material-ui/icons/Edit";
// import DeleteIcon from "@material-ui/icons/Delete";
// import AttachMoneyIcon from "@material-ui/icons/AttachMoney"; // Withdraw icon
// import CancelIcon from "@material-ui/icons/Cancel"; // UnWithdraw icon
// import { useSelector } from "react-redux";
// import { selectUser } from "../../store/slices/userSlice";

// export default function ViewActions({
//   id,
//   route,
//   history,
//   isWithdraw,
//   handleDelete,
//   handleWithdraw,
// }) {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const user = useSelector(selectUser);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <IconButton
//         aria-controls="action-menu"
//         aria-haspopup="true"
//         onClick={handleClick}
//       >
//         <MoreHorizIcon />
//       </IconButton>
//       <Menu
//         id="action-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         <MenuItem onClick={() => history.push(`/${route}/${id}`)}>
//           <VisibilityIcon style={{ color: "#4caf50", marginRight: 8 }} />
//           View
//         </MenuItem>
//         {user?.role === "admin" && (
//           <MenuItem onClick={() => history.push(`/${route}/edit/${id}`)}>
//             <EditIcon style={{ color: "#ff9800", marginRight: 8 }} />
//             Edit
//           </MenuItem>
//         )}
//         {user?.role === "admin" && (
//           <MenuItem
//             onClick={() => {
//               handleWithdraw(id);
//             }}
//           >
//             {isWithdraw ? (
//               <>
//                 <CancelIcon style={{ color: "#f44336", marginRight: 8 }} />
//                 UnWithdraw
//               </>
//             ) : (
//               <>
//                 <AttachMoneyIcon style={{ color: "#3f51b5", marginRight: 8 }} />
//                 Withdraw
//               </>
//             )}
//           </MenuItem>
//         )}
//         {user?.role === "admin" && (
//           <MenuItem
//             onClick={() => {
//               handleDelete(id);
//             }}
//           >
//             <DeleteIcon style={{ color: "#f44336", marginRight: 8 }} />
//             Delete
//           </MenuItem>
//         )}
//       </Menu>
//     </div>
//   );
// }
