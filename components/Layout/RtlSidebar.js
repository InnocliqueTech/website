import React, { useState } from "react";

const RtlSidebar = () => {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* <div className={`rtl-sidebar ${isActive ? "" : "active"}`}>
        <div className="setting-btn" onClick={handleToggle}>
          <i className="ri-settings-5-line"></i>
        </div>

        <div className="content">
          <a href="/en">LTR Demo</a>
          <a href="/ar">RTL Demo</a>
        </div>
      </div> */}
    </>
  );
};

export default RtlSidebar;
