// import logo from './logo.svg';
// import './App.css';

function App(props) {
  return (
    <article className='task-list'>

      <h1>Task List</h1>

      <section className='add-task'>
        <h2>
          <label htmlFor='add'>What needs to be done?</label>
        </h2>
        <form method='get' action=''>
          <input id='add' type='text' name='add' autocomplete='off'/>
          <button type='submit'>Add</button>
        </form>
      </section>

      <section className='results'>
        <div className='filter-task'>
          <button type='button' aria-pressed='true'><span className='hidden-text'>Show</span> all <span className='hidden-text'>tasks</span></button>
          <button type='button' aria-pressed='false'><span className='hidden-text'>Show</span> active <span className='hidden-text'>tasks</span></button>
          <button type='button' aria-pressed='false'><span className='hidden-text'>Show</span> completed <span className='hidden-text'>tasks</span></button>
        </div>
        <h2>3 tasks remaining</h2>
        <ul>
          <li>
            <input id='task_0' type='checkbox' name='task' value='task0' defaultChecked={true}/>
            <label htmlFor='task_0'>Eat</label>
            <div>
              <button type='button'>Edit <span className='hidden-text'>Eat</span></button>
              <button type='button'>Delete <span className='hidden-text'>Eat</span></button>
            </div>
          </li>
          <li>
            <input id='task_1' type='checkbox' name='task' value='task1' />
            <label htmlFor='task_1'>Sleep</label>
            <div>
              <button type='button'>Edit<span className='hidden-text'>Sleep</span></button>
              <button type='button'>Delete<span className='hidden-text'>Sleep</span></button>
            </div>
          </li>
          <li>
            <input id='task_2' type='checkbox' name='task' value='task2' />
            <label htmlFor='task_2'>Repeat</label>
            <div>
              <button type='button'>Edit<span className='hidden-text'>Repeat</span></button>
              <button type='button'>Delete<span className='hidden-text'>Repeat</span></button>
            </div>
          </li>
        </ul>
      </section>
    </article>
    
  );
}

export default App;
