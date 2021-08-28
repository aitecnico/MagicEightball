import React, { useState } from "react";


// (2) State
function SimpleCounter() {
    const [num, setNum] = useState(0);

    // (5) function to count up
    const clickUp = () => {
        setNum(num + 1);
    }

    return (
        <div>

            {/* (1) show <h3>Count: on browser</h3> */}
            {/* (3) add state {num} value  */}
            <h3>Count: {num}</h3>

            {/* (4) button with clickUp function */}
            <button onClick={clickUp}>Up</button>
        </div>
    )
}



export default SimpleCounter;