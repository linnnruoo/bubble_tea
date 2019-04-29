import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const Spinner = () => {
  return (
    <div
      className="container"
      style={{
        marginTop: 50,
        marginBottom: 50,
        display: "flex",
        justifyContent: "center"
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default Spinner;
