import React from 'react';

function ContactInfo({ user }) {
    return (
        <div className="row justify-content-center align-items-center" style={{ backgroundColor: "#fffff9" }}>
            <div className="col-6 ml-6" style={{ marginLeft: "130px" }}>
                <div className="row mb-3 justify-content-center align-items-center">
                    <div className="col-4 text-left" style={{ fontWeight: 500 }}>Telephone Number:</div>
                    <div className="col-6 text-left" style={{ fontWeight: 500 }}>{user?.telephone || "N/A"}</div>
                </div>
                <div className="row mb-3 justify-content-center align-items-center">
                    <div className="col-4 text-left" style={{ fontWeight: 500 }}>Mobile Number:</div>
                    <div className="col-6 text-left" style={{ fontWeight: 500 }}>{user?.mobilenumber || "N/A"}</div>
                </div>
                <div className="row mb-3 justify-content-center align-items-center">
                    <div className="col-4 text-left" style={{ fontWeight: 500 }}>Area of Residence:</div>
                    <div className="col-6 text-left" style={{ fontWeight: 500 }}>{user?.physicalAddress || "N/A"}</div>
                </div>
                <div className="row mb-3 justify-content-center align-items-center">
                    <div className="col-4 text-left" style={{ fontWeight: 500 }}>Postal Address:</div>
                    <div className="col-6 text-left" style={{ fontWeight: 500 }}>{user?.postalAddress || "N/A"}</div>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;
