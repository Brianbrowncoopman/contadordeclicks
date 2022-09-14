import React from "react";
import contador from "../Stylesheets/Contador.css";

function Contador({ numClicks }) {
  return (
    <div className="contador">
      {numClicks}
    </div>
  );
}



export default Contador;