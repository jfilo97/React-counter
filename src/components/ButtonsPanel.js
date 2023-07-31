import React from "react";
import './ButtonsPanel.css';
import Step from "./Step";

function ButtonsPanel(props) {

    return (
        <div className="buttons-panel">
            <button onClick={() => {
                props.buttonMethod('subtract');
            }}>- {props.stepValue}</button>
            <button onClick={() => {
                props.buttonMethod('reset');
            }}>Reset to 0</button>
            <button onClick={() => {
                props.buttonMethod('init')
            }}>Init value</button>
            <button onClick={() => {
                props.buttonMethod('add')
            }}>+ {props.stepValue}</button>
            <Step stepMethod={props.stepChange} />
        </div>
    );
}

export default ButtonsPanel;