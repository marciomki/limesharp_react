import React from "react";

const TaskSection2 = () => {
    const [phrvalue, setPhrvalue] = React.useState();
    
    const Reformat = () => {

        const phrase = phrvalue;
        phrase = phrase.replace(/[aeiou]/gi, '');
        phrase = phrase.charAt(0).toUpperCase() + phrase.slice(1).toLowerCase();

        return (
            <>
            { phrvalue ? 'Task result: ' + phrase : null }
            </>
        )
    }
    return (
        <div>
            <h2>Task 2</h2>
            <hr/>
            <b>Make this work (no vowels, lowercase except the first letter):</b><br/><br/>
            <label>Type phrase:</label> <input name='setvalue' onChange={e => setPhrvalue(e.target.value) } /><br/><br/>
            <div>
                {Boolean(phrvalue) ?
                <Reformat />
                : null
                }
            </div>
        </div>
    )
}
export default TaskSection2;