import React from "react";
import Notice from "../../components/dashboard/Notice";

function Notices({
  openEdit,
  setopenEdit,
  notices,
  searchDate,
  handleSearch,
  handleReset,
  setsearchDate,
  searchTitle,
  setsearchTitle,
  editData,
  handleDelete,
}) {
  return (
    <div className="content__container" style={{ backgroundColor: " #fffff5" }}>
      <h3>Notice Board</h3>
      <form action="" className="row">
        <div className="col-sm-4 mb-0 mt-2">
          <input
            type="text"
            style={{ backgroundColor: " #fffff9" }}
            value={searchDate}
            onChange={(e) => setsearchDate(e.target.value)}
            placeholder="Search by Date"
            className="form-control"
          />
        </div>
        <div className="col-sm-4 mb-3 mt-2">
          <input
            type="text"
            style={{ backgroundColor: " #fffff9" }}
            value={searchTitle}
            onChange={(e) => setsearchTitle(e.target.value)}
            placeholder="Search by Title"
            className="form-control"
          />
        </div>
        <div className="col-sm-3 d-flex justify-content-between mt-2">
          <div>
            <button onClick={handleSearch} className="btn blue__btn">
              Search
            </button>
          </div>
          <div>
            <button onClick={handleReset} className="btn red__btn">
              Reset
            </button>
          </div>
        </div>
      </form>
      <div className="notice__container my-5">
        {notices?.length > 0 ? (
          notices?.map((e) => (
            <div className="py-3" key={e._id}>
              <Notice
                description={e.description}
                open={openEdit}
                isEdit={true}
                setOpen={setopenEdit}
                date={e.date}
                id={e._id}
                createdAt={e.createdAt}
                title={e.title}
                createdBy={e.createdBy}
                editData={editData}
                handleDelete={handleDelete}
              />
              <hr />
            </div>
          ))
        ) : (
          <h4>No Notice yet</h4>
        )}
      </div>
    </div>
  );
}

export default Notices;
