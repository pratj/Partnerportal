import ReactJson from "react-json-view";
import React from "react";

function DisplayJson(data) {
  return (
    <div>
      <pre>Seed Generated:</pre>
      {console.log("Display Component")} <ReactJson src={data} theme="google" />
    </div>
  );
}

export default DisplayJson;
