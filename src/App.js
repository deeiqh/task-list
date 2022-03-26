// import logo from './logo.svg';
// import './App.css';
import TaskItem from './components/TaskItem'
import FilterTask from './components/FilterTask'
import AddTask from './components/AddTask'
import React, { useState, useRef, useEffect } from 'react'
import { nanoid } from 'nanoid';

function App(props) {

  function usePrevious(state){
    const ref = useRef();
    useEffect(() => {
      ref.current = state;
    });
    return ref.current;
  }

  const [tasks, setTasks] = useState(props.tasks);
  const refEditField = useRef(null);
  const refEditButton = useRef(null);

  function addTask(taskName) {
    const newTask = {
      id: 'task_' + nanoid(),
      value: 'task' + nanoid(),
      checked: false,
      name: taskName
    }
    setTasks([...tasks, newTask]);
  }

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

  function editTask(id, newName) {
    const editedTask = tasks.map( task => {
      if (task.id === id) {
        task.name = newName;
      }
      return task;
    });
    setTasks(editedTask);
  }

  function taskItem(task) {
    return <TaskItem 
      id={task.id} 
      value={task.value} 
      checked={task.checked} 
      name={task.name} 
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
      refEditField={refEditField}
      refEditButton= {refEditButton}
      usePrevious= {usePrevious}
    />
  }

  const [filter, setFilter] = useState('all');

  function taskListFiltered() {
    const taskList = [];
    tasks.forEach( task => {
      if (filter === 'all') {
        taskList.push(taskItem(task));
      }
      else if (filter === 'active') {
        if (!task.checked) {
          taskList.push(taskItem(task));
        }
      } else if (filter === 'completed'){
        if (task.checked) {
          taskList.push(taskItem(task));
        }
      }
    });
    return {taskList: taskList, length: taskList.lenth};
  }
  
  const taskList  = taskListFiltered().taskList;
  const taskListLength = taskList.length;

  const textNoun = taskListLength !== 1 ? ' tasks' : ' task';
  const headingText = taskListLength + textNoun + ' remaining';

  return (
    <article className='task-list'>
      <h1>Task List</h1>
      <section className='add-task'>
        <AddTask addTask={addTask}/>
      </section>
      <section className='results'>
        <FilterTask setFilter= {setFilter} />
        <h2>{headingText}</h2>
        <ul>
          {taskList}
        </ul>
      </section>
    </article>
  );
}

export default App;