// import logo from './logo.svg';
// import './App.css';
import TaskItem from './components/TaskItem'
import FilterTask from './components/FilterTask'
import AddTask from './components/AddTask'

function App(props) {

  function addTask(name) {
    console.log(name);
  }

  const tasks = props.tasks.map( task => 
    <TaskItem 
      id={task.id} 
      value={task.value} 
      checked={task.checked} 
      taskName={task.taskName}
      key={task.id}
    />
  );
  
  return (
    <article className='task-list'>
      <h1>Task List</h1>
      <section className='add-task'>
        <AddTask addTask={addTask}/>
      </section>
      <section className='results'>
        <FilterTask />
        <h2>3 tasks remaining</h2>
        <ul>
          {tasks}
        </ul>
      </section>
    </article>
  );
}

export default App;