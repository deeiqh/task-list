import React from 'react';

export default function TaskItem(props) {
    return (
        <li>
            <input id={props.id} type='checkbox' name='task' value={props.value} defaultChecked={props.checked}/>
            <label htmlFor={props.id}>{props.name}</label>
            <div>
              <button type='button'>Edit <span className='hidden-text'>{props.taskName}</span></button>
              <button type='button'>Delete <span className='hidden-text'>{props.taskName}</span></button>
            </div>
        </li>
    );
}