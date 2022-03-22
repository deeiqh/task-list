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
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  );

  const textNoun =  taskList.length !== 1 ? ' tasks' : ' task';
  const headingText = taskList.length + textNoun + ' remaining';

  function toggleTaskCompleted(id) { 
    const toggleTasks = tasks.map( task => {
      if (task.id === id) {
        task.checked = !task.checked;
      }
      return task;
    });
    setTasks(toggleTasks);
  }

  function deleteTask(id) {
    // let t = [];
    // tasks.map(task => t.push(task));
    // for (let i=0; i<tasks.length; i++) {
    //   if (t[i].id === id) {
    //     t.splice(i, 1);
    //     break;
    //   }
    // }
    // setTasks(t);
    const remainingTasks = tasks.filter( task => task.id !== id);
    setTasks(remainingTasks);
  }

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