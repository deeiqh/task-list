import React, {useState} from 'react';

export default function AddTask(props) {

    const [name, setName] = useState('namee');

    let gl='gl';     
    setName('namemod0');
    console.log(name);  


    function handleSubmit(e) {
        e.preventDefault();
        props.addTask('read');
        console.log(e);
    }

    function handleChange(e) {
        console.log('Typing.');
        gl = 'glmod';
        setName('namemod');
        console.log(name);
        console.log(gl);
    }
    return (
        <div>
            <h2>
                <label htmlFor='add'>What needs to be done?</label>
            </h2>
            <form method='get' action='' onSubmit={handleSubmit}>
                <input id='add' type='text' name='add' autoComplete='off' onChange={handleChange} value={gl}/>
                <button type='submit'>Add</button>
            </form>
        </div>
    );
}