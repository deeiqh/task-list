import React from 'react'

export default function EditTask(props) {

    function handleCancel() {
        props.setEditing(false);
    }

    function handleChange(e) {
        props.setNewName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.editTask(props.id, props.newName);
        props.setNewName('');
        props.setEditing(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='new_name'>New name for {props.name}</label>
            <input type='text' id='new_name' onChange={handleChange} value={props.newName} autoComplete='off'/>
            <div>
                <button type='button' onClick={handleCancel}>Cancel</button>
                <button type='submit'>Save</button>
            </div>
        </form>
    );
}