import React from 'react';

export default function AddTask() {
    return (
        <div>
            <h2>
            <label htmlFor='add'>What needs to be done?</label>
            </h2>
            <form method='get' action=''>
            <input id='add' type='text' name='add' autoComplete='off'/>
            <button type='submit'>Add</button>
            </form>
      </div>
    );
}