import React from 'react';

export default function FilterTask() {
    return (
        <div className='filter-task'>
          <button type='button' aria-pressed='true'><span className='hidden-text'>Show</span> all <span className='hidden-text'>tasks</span></button>
          <button type='button' aria-pressed='false'><span className='hidden-text'>Show</span> active <span className='hidden-text'>tasks</span></button>
          <button type='button' aria-pressed='false'><span className='hidden-text'>Show</span> completed <span className='hidden-text'>tasks</span></button>
        </div>
    );
}