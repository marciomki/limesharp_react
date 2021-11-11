import React from "react";

const TaskSection1 = () => {
    const [listvalue, setListvalue] = React.useState();
    
    const Repeat = () => {
        let transport;

        if(listvalue == "[") {
            listvalue = false;
        } 
        if(listvalue == "]") {
            listvalue = false;
        } 
        if(listvalue !== false){ 
            listvalue = listvalue.replace(/\[/g, '').replace(/\]/g, '');
            transport = Array(3).fill(listvalue);    
            let showArray = transport.toString().split(',');
        } else {
            listvalue = false;
        }
        console.log('Task result ', showArray);
        return (
            <>
            { listvalue ? 'Task result: ['+showArray+']' : null }
            </>
            )
    }
    return (
        <div>
            <h2>Task 1</h2>
            <hr/>
            <b>Make this work (repeat 3 times the contents of an array):</b><br/><br/>
            <label>Set array values:</label> <input name='setvalue' onChange={e => setListvalue(e.target.value) } /><br/><br/>
            <div>
                {Boolean(listvalue) ?
                <Repeat />
                : null
                }
            </div>
        </div>
    )
}
export default TaskSection1;