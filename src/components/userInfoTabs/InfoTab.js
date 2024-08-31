import React from "react";
import { getCapitalize } from "../../utils";
import moment from "moment";

function InfoTab({ user, isStaff }) {
  return (
    <div className="row justify-content-center align-items-center">
      {isStaff && (
        <div className="row mb-3 justify-content-center align-items-center">
          <div className="col-4 text-left">Title:</div>
          <div className="col-6 text-left">{getCapitalize(user?.title || "N/A")}</div>
        </div>
      )}
      <div className="col-4">
        <div className="row mb-3 justify-content-center align-items-center">
          <div className="col-4 text-left">Name:</div>
          <div className="col-6 text-left">{user?.name || "N/A"}</div>
        </div>
        <div className="row mb-3 justify-content-center align-items-center">
          <div className="col-4 text-left">Surname:</div>
          <div className="col-6 text-left">{getCapitalize(user?.surname || "N/A")}</div>
        </div>
        {user?.middleName && (
          <div className="row mb-3 justify-content-center align-items-center">
            <div className="col-4 text-left">Middle Name:</div>
            <div className="col-6 text-left">
              {getCapitalize(user?.middleName || "N/A")}
            </div>
          </div>
        )}
        <div className="row mb-3 justify-content-center align-items-center">
          <div className="col-4 text-left">Gender:</div>
          <div className="col-6 text-left">{getCapitalize(user?.gender || "N/A")}</div>
        </div>
        <div className="row mb-3 justify-content-center align-items-center">
          <div className="col-4 text-left">Email:</div>
          <div className="col-6 text-left">{user?.email || "N/A"}</div>
        </div>
      </div>

      <div className="col-4">
        <div className="row mb-3 justify-content-center align-items-center">
          <div className="col-6 text-left">Date of Birth:</div>
          <div className="col-6 text-left">
            {user?.dateOfBirth
              ? moment(user?.dateOfBirth).format("D MMMM YYYY")
              : "N/A"}
          </div>
        </div>

        <div className="row mb-3 justify-content-center align-items-center">
          <div className="col-6 text-left">Caste:</div>
          <div className="col-6 text-left">{user?.religion || "N/A"}</div>
        </div>
        <div className="row mb-3 justify-content-center align-items-center">
          <div className="col-6 text-left">Category:</div>
          <div className="col-6 text-left">{user?.nationality || "N/A"}</div>
        </div>
        <div className="row mb-3 justify-content-center align-items-center">
          <div className="col-6 text-left">Date of Admission:</div>
          <div className="col-6 text-left">{user?.disease || "N/A"}</div>
        </div>
      </div>
    </div>
  );
}

export default InfoTab;
