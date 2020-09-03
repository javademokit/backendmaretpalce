import React from "react";
import { render } from "react-dom";


// Import module and default styles
import CircularProgressbar from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Import custom examples
import SegmentedProgressbar from "./SegmentedProgressbar";
import StyledProgressbar from "./StyledProgressbar";

function Label(props) {
  return <div style={{ marginTop: 25, marginBottom: 5 }}>{props.children}</div>;
}

const percentage = 66;

const App = () => (
  <div>
    <Label>Basic example</Label>
    <div style={{ width: "100px" }}>
      <CircularProgressbar percentage={percentage} text={`${percentage}%`} />
    </div>
    <Label>Example with style overrides</Label>
    <div style={{ width: "100px" }}>
      <StyledProgressbar percentage={percentage} text={`${percentage}%`} />
    </div>
   
    <Label>Reversed path</Label>
    <div style={{ width: "100px" }}>
      <CircularProgressbar
        percentage={percentage}
        text={`${percentage}%`}
        counterClockwise
      />
    </div>
    
   
    
  </div>
);

