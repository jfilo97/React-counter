import React, { Component, useState } from "react";
import './Counter.css';
import Display from "./components/Display";
import ButtonsPanel from "./components/ButtonsPanel";
import Step from './components/Step';


const Counter = (props) => {


    
    const [counterValue, setCounterValue] = useState(props.counterInitValue)
    const [stepValue, setStepValue] = useState(1)



    const changeValue = (action) => {
        setCounterValue((prevCounter, prevProps) => {

            let current = prevCounter;

            switch (action) {
                case 'subtract': {
                    current -= stepValue;
                    break;
                }
                case 'reset': {
                    current = 0;
                    break;
                }
                case 'init': {
                 
                    current = props.counterInitValue;
                    break;
                }
                case 'add': {
                    current += stepValue;
                    break;
                }
                default: {
                    
                    current = props.counterInitValue;
                }
            }

            return (
                current
            );
        })
    }

    const updateStep = (value) => {
        console.log('halo');
        setStepValue( value)
    }

    return (
        <div className="counter">
            Counter:
            <Display displayValue={counterValue} />
            <ButtonsPanel buttonMethod={changeValue}
                stepChange={updateStep}
                stepValue={stepValue} />
            <Step stepMethod={updateStep} />
        </div>
    );
};

export default Counter;