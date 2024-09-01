// import React from 'react'
// import Card from '@material-ui/core/Card';
// import HighlightOffIcon from '@material-ui/icons/HighlightOff';
// import { IconButton } from '@material-ui/core'

// function GuadianCard({ guadian, handleDeleteGuadian, noEdit }) {

//     return (
//         <Card className="p-4 mb-3">
//             {!noEdit &&
//                 <div className="float-end">
//                     <IconButton onClick={() => handleDeleteGuadian(guadian.id)}> <HighlightOffIcon /></IconButton>
//                 </div>
//             }
//             <div className="float-start">
//                 <div className="row  mb-3">
//                     <div className="col-6"> Name: </div>
//                     <div className="col-6">{guadian?.name} </div>
//                 </div>
//                 <div className="row  mb-3">
//                     <div className="col-6"> Surname : </div>
//                     <div className="col-6">{guadian?.lastname}</div>
//                 </div>
//                 <div className="row  mb-3">
//                     <div className="col-6">Occupation: </div>
//                     <div className="col-6">{guadian?.occupation || null}</div>
//                 </div>
//                 <div className="row  mb-3">
//                     <div className="col-6">Contact: </div>
//                     <div className="col-6">{guadian?.mobile || null}</div>
//                 </div>
//                 <div className="row  mb-3">
//                     <div className="col-6">Email: </div>
//                     <div className="col-6">{guadian?.email || null}</div>
//                 </div>
//                 <div className="row  mb-3">
//                     <div className="col-6">Relationship: </div>
//                     <div className="col-6">{guadian?.relationship || null}</div>
//                 </div>
//                 <div className="row  mb-3">
//                     <div className="col-6">Address: </div>
//                     <div className="col-6">{guadian?.address || null}</div>
//                 </div>
//             </div>

//         </Card>
//     )
// }

// export default GuadianCard

import React from 'react';
import Card from '@material-ui/core/Card';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { IconButton } from '@material-ui/core';

function GuadianCard({ guadian, handleDeleteGuadian, noEdit }) {
    return (
        <Card className="p-4 mb-3" style={{
            backgroundColor: "#fffff9",
            marginLeft: "20px",
            border: "none"  // Remove border
        }}>
            {!noEdit &&
                <div className="float-end">
                    <IconButton onClick={() => handleDeleteGuadian(guadian.id)}>
                        <HighlightOffIcon />
                    </IconButton>
                </div>
            }
            <div className="d-flex justify-content-between ml-2"> {/* Use flexbox for spacing */}
                <div className="flex-fill pr-3"> {/* Add padding to the right */}
                    <div className="row mb-2 align-items-center">
                        <div className="col-6 text-left" style={{ fontWeight: 500, fontSize: "14px", lineHeight: "1.2" }}>
                            Name:
                        </div>
                        <div className="col-6 text-left" style={{ fontWeight: 500, fontSize: "14px", lineHeight: "1.2" }}>
                            {guadian?.name} {guadian?.lastname}
                        </div>
                    </div>
                    <div className="row mb-2 align-items-center">
                        <div className="col-6 text-left" style={{ fontWeight: 500, fontSize: "14px", lineHeight: "1.2" }}>
                            Relationship:
                        </div>
                        <div className="col-6 text-left" style={{ fontWeight: 500, fontSize: "14px", lineHeight: "1.2" }}>
                            {guadian?.relationship || "N/A"}
                        </div>
                    </div>
                    <div className="row mb-2 align-items-center">
                        <div className="col-6 text-left" style={{ fontWeight: 500, fontSize: "14px", lineHeight: "1.2" }}>
                            Occupation:
                        </div>
                        <div className="col-6 text-left" style={{ fontWeight: 500, fontSize: "14px", lineHeight: "1.2" }}>
                            {guadian?.occupation || "N/A"}
                        </div>
                    </div>
                </div>
                <div className="flex-fill pl-3"> {/* Add padding to the left */}
                    <div className="row mb-2 align-items-center">
                        <div className="col-6 text-left" style={{ fontWeight: 500, fontSize: "14px", lineHeight: "1.2" }}>
                            Contact:
                        </div>
                        <div className="col-6 text-left" style={{ fontWeight: 500, fontSize: "14px", lineHeight: "1.2" }}>
                            {guadian?.mobile || "N/A"}
                        </div>
                    </div>
                    <div className="row mb-2 align-items-center">
                        <div className="col-6 text-left" style={{ fontWeight: 500, fontSize: "14px", lineHeight: "1.2" }}>
                            Email:
                        </div>
                        <div className="col-6 text-left" style={{ fontWeight: 500, fontSize: "14px", lineHeight: "1.2" }}>
                            {guadian?.email || "N/A"}
                        </div>
                    </div>
                    <div className="row mb-2 align-items-center">
                        <div className="col-6 text-left" style={{ fontWeight: 500, fontSize: "14px", lineHeight: "1.2" }}>
                            Address:
                        </div>
                        <div className="col-6 text-left" style={{ fontWeight: 500, fontSize: "14px", lineHeight: "1.2" }}>
                            {guadian?.address || "N/A"}
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default GuadianCard;
