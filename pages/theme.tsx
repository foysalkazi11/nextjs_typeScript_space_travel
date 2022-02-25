import React from "react";
import Dot from "./components/theme/dot/Dot";
import LargeButton from "./components/theme/largeButton/LargeButton";
import Number from "./components/theme/number/Number";
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
      <div className="bd-dark" style={{ padding: "1rem", display: "flex" }}>
        <Dot />
      </div>
      <div className="bd-dark" style={{ padding: "1rem", display: "flex" }}>
        <Number />
      </div>
    </div>
  );
};

export default Theme;
