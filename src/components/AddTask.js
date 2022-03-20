import React, {useState} from 'react';

export default function AddTask(props) {

    const [taskName, setTaskName] = useState('');

    //let gl='gl';     

    // setName('namemod0');
    // console.log(name);  

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(taskName);
        setTaskName('');
        //console.log(gl);
    }

    function handleChange(e) {
        //console.log('Typing.');
        //gl += 'mod';
        //console.log(gl);
        setTaskName(e.target.value);
        //console.log(name);
        //console.log(gl);
    }
    
    return (
        <div>
            <h2>
                <label htmlFor='add'>What needs to be done?</label>
            </h2>
            <form method='get' action='' onSubmit={handleSubmit}>
                <input id='add' type='text' name='add' autoComplete='off' onChange={handleChange} value={taskName}/>
                <button type='submit'>Add</button>
            </form>
        </div>
    );
}