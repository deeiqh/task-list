import React, {useState} from 'react'
import EditTask from './EditTask';

export default function TaskItem(props) {

    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');

    function handleChange(e) {
        props.toggleTaskCompleted(props.id);
    }

    function handleDelete(e) {
        props.deleteTask(props.id);
    }

    function handleEdit(e) {
    //     props.editTask(props.id);
        setEditing(true);
    }

    return (
        isEditing ?
            <li>
                <EditTask 
                    setEditing= {setEditing} 
                    newName= {newName} 
                    name= {props.name}
                    setNewName= {setNewName} 
                    editTask= {props.editTask}
                    id= {props.id}
                /> 
            </li>
            :
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
                    <button type='button' onClick={handleEdit}>
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