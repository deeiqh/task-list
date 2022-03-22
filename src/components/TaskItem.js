import React from 'react';

export default function TaskItem(props) {

    function handleChange(e) {
        props.toggleTaskCompleted(props.id);
    }

    function handleDelete(e) {
        props.deleteTask(props.id);
    }

    return (
        <li>
            <input 
                id={props.id} 
                type='checkbox' 
                name='task' 
                value={props.value} 
                defaultChecked={props.checked}
                onChange={handleChange}
            />
            <label htmlFor={props.id}>
                {props.name}
            </label>
            <div>
                <button type='button'>
                    Edit 
                    <span className='hidden-text'>
                        {props.taskName}
                    </span>
                </button>
                <button type='button' onClick={handleDelete}>
                    Delete 
                    <span className='hidden-text'>
                        {props.taskName}
                    </span>
                </button>
            </div>
        </li>
    );
}