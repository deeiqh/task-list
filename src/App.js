// import logo from './logo.svg';
// import './App.css';
import TaskItem from './components/TaskItem'
import FilterTask from './components/FilterTask'
import AddTask from './components/AddTask'
import  React, { useState } from 'react'
import { nanoid } from 'nanoid';

function App(props) {

  const [tasks, setTasks] = useState(props.tasks);

  function addTask(taskName) {
    const newTask = {
      id: 'task_' + nanoid(),
      value: 'task' + nanoid(),
      checked: false,
      name: taskName
    }
    setTasks([...tasks, newTask]);
  }

  const taskList = tasks.map( task => 
    <TaskItem 
      id={task.id} 
      value={task.value} 
      checked={task.checked} 
      name={task.name} 
      key={task.id}
    />
  );

  const textNoun =  taskList.length != 1 ? ' tasks' : ' task';
  const headingText = taskList.length + textNoun + ' remaining';

  return (
    <article className='task-list'>
      <h1>Task List</h1>
      <section className='add-task'>
        <AddTask addTask={addTask}/>
      </section>
      <section className='results'>
        <FilterTask />
        <h2>{headingText}</h2>
        <ul>
          {taskList}
        </ul>
      </section>
    </article>
  );
}

export default App;