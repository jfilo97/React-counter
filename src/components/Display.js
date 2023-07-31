import React from "react";


function Display(props) {
    return(
        <span className={`value ${(props.displayValue <= 5 ? 'red' : 'green') }`}>
                {props.displayValue}
         </span>
    );
};

export default Display;