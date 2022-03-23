import React from 'react';

export default function FilterTask(props) {

  function handleActive () {
    props.setFilter('active');
  }

  function handleAll() {
    props.setFilter('all');
  }

  function handleCompleted() {
    props.setFilter('completed');
  }

  return (
    <div className='filter-task'>

      <button type='button' aria-pressed='true' onClick={handleAll}>
        <span className='hidden-text'>Show</span>
        all 
        <span className='hidden-text'>tasks</span>
      </button>

      <button type='button' aria-pressed='false' onClick={handleActive}>
        <span className='hidden-text'>Show</span>
        active 
        <span className='hidden-text'>tasks</span>
      </button>

      <button type='button' aria-pressed='false' onClick={handleCompleted}>
        <span className='hidden-text'>Show</span>
        completed 
        <span className='hidden-text'>tasks</span>
      </button>
    </div>
  );
}