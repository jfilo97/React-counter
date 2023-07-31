import React, { Component, useState } from "react";
import './Counter.css';
import Display from "./components/Display";
import ButtonsPanel from "./components/ButtonsPanel";
import Step from './components/Step';


const Counter = (props) => {



    const [counterValue, setCounterValue] = useState(props.initValue)
    const [stepValue, setStepValue] = useState(1)



    const changeValue = (action) => {
        setCounterValue((prevState, prevProps) => {
            let current = prevState.counterValue;

            switch (action) {
                case 'subtract': {
                    current -= prevState.stepValue;
                    break;
                }
                case 'reset': {
                    current = 0;
                    break;
                }
                case 'init': {
                    current = prevProps.initValue;
                    break;
                }
                case 'add': {
                    current += prevState.stepValue;
                    break;
                }
                default: {
                    current = prevProps.initValue;
                }
            }
            return ({
                counterValue: current
            });
        })
    }

    const updateStep = (value) => {
        setStepValue({
            stepValue: value
        })
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



// class Counter extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             counterValue: this.props.initValue,
//             stepValue: 1
//         };
//     };


//     changeValue = (action) => {
//         this.setState((prevState, prevProps) => {
//             let current = prevState.counterValue;

//             switch (action) {
//                 case 'subtract': {
//                     current -= prevState.stepValue;
//                     break;
//                 }
//                 case 'reset': {
//                     current = 0;
//                     break;
//                 }
//                 case 'init': {
//                     current = prevProps.initValue;
//                     break;
//                 }
//                 case 'add': {
//                     current += prevState.stepValue;
//                     break;
//                 }
//                 default: {
//                     current = prevProps.initValue;
//                 }
//             }
//             return ({
//                 counterValue: current
//             });
//         })
//     }

//     updateStep = (value) => {
//         this.setState({
//             stepValue: value
//         })
//     }

//     render() {
//         return (
//             <div className="counter">
//                 Counter:
//                 <Display displayValue={this.state.counterValue} />
//                 <ButtonsPanel buttonMethod={this.changeValue}
//                     stepChange={this.updateStep}
//                     stepValue={this.state.stepValue} />
//                 <Step stepMethod={this.changeStep} />
//             </div>
//             );
//     };
// };

// export default Counter;