import React from "react";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";
import "./QZone.css";
const Qzone = () => {
  return (
    <div className="bg-secondary text-center py-4 my-4 ">
      <h1 className="text-light ">Q-Zone</h1>
      <div className="image">
        <img className="img-fluid" src={qzone1} alt="" />
        <img className="img-fluid" src={qzone2} alt="" />
        <img className="img-fluid" src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
