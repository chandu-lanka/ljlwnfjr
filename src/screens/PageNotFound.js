import React from "react";
import logo from "../assets/logo_channel.png";

const PageNotFound = () => {
  return (
    <div className="pagenotfound">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "300px",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "80px",
            textAlign: "center",
          }}
        >
          4{" "}
          <img
            src={logo}
            alt=""
            style={{ width: "100px", marginTop: "20px" }}
          />{" "}
          4
        </h1>
      </div>
      <h3 style={{ color: "white" }}>This Page Is Not Found</h3>
    </div>
  );
};

export default PageNotFound;
