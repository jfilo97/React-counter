import React, {Component} from "react";
import './Step.css';

const Step = (props) => {
    

    let inputStep;

   

    
        return(
            <div className="input-panel">
                <label>Step:</label>
                <input type="number"
                       onChange={() => props.stepMethod(parseInt(inputStep.value))}
                       defaultValue={1} min={1}
                       ref={(data) => { inputStep = data} }/>
            </div>
        );
    
};

export default Step;