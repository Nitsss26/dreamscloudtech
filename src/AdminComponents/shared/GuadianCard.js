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
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(2),
        backgroundColor: '#fffff9', // Light cream background to match your theme
        marginBottom: theme.spacing(2),
        textAlign: 'center', // Align the entire content to the right
        maxWidth: '300px', // Reduce the width to eliminate empty space
        marginLeft: '120px', // Align the card to the right side of its container
    },
    deleteIcon: {
        float: 'right',
        marginTop: '72px',
    },
    container: {
        display: 'grid',
        gridTemplateColumns: 'max-content auto',
        alignItems: 'right',
        rowGap: theme.spacing(1),
    },
    field: {
        fontWeight: 'bold',
        textAlign: 'left',
        paddingRight: theme.spacing(2),
    },
    value: {
        textAlign: 'left',
        color: '#333', // Darker color for contrast
        wordBreak: 'break-word', // Handle long text without overflow
    },
}));

function GuadianCard({ guadian, handleDeleteGuadian, noEdit }) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            {!noEdit && (
                <div className={classes.deleteIcon}>
                    <IconButton onClick={() => handleDeleteGuadian(guadian.id)}>
                        <HighlightOffIcon />
                    </IconButton>
                </div>
            )}
            <div className={classes.container}>
                {[
                    { label: 'Name', value: guadian?.name },
                    { label: 'Surname', value: guadian?.lastname },
                    { label: 'Occupation', value: guadian?.occupation || 'N/A' },
                    { label: 'Contact', value: guadian?.mobile || 'N/A' },
                    { label: 'Email', value: guadian?.email || 'N/A' },
                    { label: 'Relationship', value: guadian?.relationship || 'N/A' },
                    { label: 'Address', value: guadian?.address || 'N/A' },
                ].map((item, index) => (
                    <React.Fragment key={index}>
                        <div className={classes.field}>{item.label}:</div>
                        <div className={classes.value}>{item.value}</div>
                    </React.Fragment>
                ))}
            </div>
        </Card>
    );
}

export default GuadianCard;
