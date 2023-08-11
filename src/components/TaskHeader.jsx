import React from "react";
import { Link } from "react-router-dom";

const TaskHeader = ({ heading }) => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mt-1">
        <h2 className="fw-bold">{heading}</h2>
        {heading === "Progress" ? (
          ""
        ) : (
          <p className="blue-text">
            <Link
              className="text-decoration-none me-5 fs-5 blue-text fw-bold create-link"
              to="/create"
            >
              {" "}
              + Add New Tasks
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default TaskHeader;