import React from "react";
import { getImgSrc } from "../../utils";

function ProfileInfo({ admin }) {
  return (
    <div className="content__container mb-0 text-center" style={{ backgroundColor: "#fffff7" }}>
      <div className="">
        <img height="200px" src={getImgSrc(admin?.profileUrl)} alt="" />
      </div>
      <div className="mb-3">
        <h3 style={{ color: "red" }}>{admin?.fullName}</h3>
        <h5 style={{ color: "blue" }}>{admin?.motto}</h5>
      </div>
      <div className="row">
        <div className="col">
          <h6 style={{ color: "#42d29d" }}>Email</h6>
          <h5>
            <strong style={{ color: "purple" }}>{admin?.email || "not set"}</strong>{" "}
          </h5>
        </div>
        <div className="col">
          <h6 style={{ color: "#42d29d" }}>Telephone</h6>
          <h5>
            {" "}
            <strong style={{ color: "purple" }}>{admin?.telephone || "not set"}</strong>
          </h5>
        </div>
        <div className="col">
          <h6 style={{ color: "#42d29d" }}>Address</h6>
          <h5>
            <strong style={{ color: "purple" }}>{admin?.address || "not set"}</strong>{" "}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
