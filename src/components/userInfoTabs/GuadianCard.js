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
//                     <div className="col-6"> Surname: </div>
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
        <Card className="p-0 mb-0" style={{ backgroundColor: "#fffff9", border: "none", boxShadow: "none", marginLeft: "80px" }}>
            {!noEdit && (
                <div className="float-end">
                    <IconButton onClick={() => handleDeleteGuadian(guadian.id)}>
                        <HighlightOffIcon />
                    </IconButton>
                </div>
            )}
            <div className="row justify-content-center align-items-center">
                <div className="col-4">
                    <div className="row mb-3 justify-content-center align-items-center">
                        <div className="col-6 text-left" style={{ fontWeight: 500 }}>Name:</div>
                        <div className="col-6 text-left" style={{ fontWeight: 500 }}>{guadian?.name || "N/A"}</div>
                    </div>
                    <div className="row mb-3 justify-content-center align-items-center">
                        <div className="col-6 text-left" style={{ fontWeight: 500 }}>Surname:</div>
                        <div className="col-6 text-left" style={{ fontWeight: 500 }}>{guadian?.lastname || "N/A"}</div>
                    </div>
                    <div className="row mb-3 justify-content-center align-items-center">
                        <div className="col-6 text-left" style={{ fontWeight: 500 }}>Occupation:</div>
                        <div className="col-6 text-left" style={{ fontWeight: 500 }}>{guadian?.occupation || "N/A"}</div>
                    </div>
                    <div className="row mb-3 justify-content-center align-items-center">
                        <div className="col-6 text-left" style={{ fontWeight: 500 }}>Contact:</div>
                        <div className="col-6 text-left" style={{ fontWeight: 500 }}>{guadian?.mobile || "N/A"}</div>
                    </div>
                </div>

                <div className="col-4">

                    <div className="row mb-3 justify-content-center align-items-center">
                        <div className="col-6 text-left" style={{ fontWeight: 500 }}>Email:</div>
                        <div className="col-6 text-left" style={{ fontWeight: 500 }}>{guadian?.email || "N/A"}</div>
                    </div>
                    <div className="row mb-3 justify-content-center align-items-center">
                        <div className="col-6 text-left" style={{ fontWeight: 500 }}>Relationship:</div>
                        <div className="col-6 text-left" style={{ fontWeight: 500 }}>{guadian?.relationship || "N/A"}</div>
                    </div>
                    <div className="row mb-3 justify-content-center align-items-center">
                        <div className="col-6 text-left" style={{ fontWeight: 500 }}>Address:</div>
                        <div className="col-6 text-left" style={{ fontWeight: 500 }}>{guadian?.address || "N/A"}</div>
                    </div>
                </div>


            </div>
        </Card>
    );
}

export default GuadianCard;

