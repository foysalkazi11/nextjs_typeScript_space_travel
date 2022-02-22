import React from "react";
import LargeButton from "./components/theme/largeButton/LargeButton";
import Tab from "./components/theme/tab/Tab";

const Theme = () => {
  return (
    <div className="container text-light">
      <div className="bd-dark" style={{ padding: "1rem" }}>
        <h1 className="fs-600 fw-700">Theme</h1>
      </div>
      <div className="bd-dark" style={{ padding: "1rem" }}>
        <LargeButton />
      </div>
      <div className="bd-dark" style={{ padding: "1rem", display: "flex" }}>
        <Tab />
      </div>
    </div>
  );
};

export default Theme;
