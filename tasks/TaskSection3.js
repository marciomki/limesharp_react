import React from "react";

const TaskSection3 = () => {
    const [binaryValue, setBinaryValue] = React.useState();
    
    const Next_binary_number = () => {
        binaryValue = binaryValue.replace(/\,/g, '');
        const showBin = [...binaryValue];
	
        for (var x = binaryValue.length-1; x >= 0; x--) {
            if (binaryValue[x] === 0) {
              showBin[x] = 1;
              for (var y = binaryValue.length - 1; y > x; y--) {
                showBin[y] = 0;
              }
              return showBin;
            }
        }
        const result = [];
        result[0] = 1;
        
        return (
            <>
            { binaryValue ? 'Task result: ' + showBin : null }
            </>
        )
    }
    return (
        <div>
            <h2>Task 3</h2>
            <hr/>
            <b>Make this work (without using any built in functions, only a for loop, return the next binary number in a string or as an array) - (optional, for bonus points)</b><br/><br/>
            <label>Type binary:</label> <input name='setvalue' onChange={e => setBinaryValue(e.target.value) } /><br/><br/>
            <div>
                {Boolean(binaryValue) ?
                <Next_binary_number />
                : null
                }
            </div>
        </div>
    )
}
export default TaskSection3;