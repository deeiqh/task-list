// import logo from './logo.svg';
// import './App.css';

function App(props) {
  return (
    <article>

      <h1>Task List</h1>

      <section>
        <h2>
          <label htmlFor='add'>What needs to be done?</label>
        </h2>
        <form method='get' action=''>
          <input id='add' type='text' name='add'/>
          <button type='submit'>Add</button>
        </form>
        <div>
          <button type='button'>Show all tasks</button>
          <button type='button'>Show active tasks</button>
          <button type='button'>Show completed tasks</button>
        </div>
      </section>

      <section>
        <h2>3 tasks remaining</h2>
        <ul>
          <li>
            <input id='task_0' type='checkbox' name='task' value='task0' defaultChecked={true}/>
            <label htmlFor='task_0'>Eat</label>
            <div>
              <button type='button'>Edit Eat</button>
              <button type='button'>Delete Eat</button>
            </div>
          </li>
          <li>
            <input id='task_1' type='checkbox' name='task' value='task1' />
            <label htmlFor='task_1'>Sleep</label>
            <div>
              <button type='button'>Edit Sleep</button>
              <button type='button'>Delete Sleep</button>
            </div>
          </li>
          <li>
            <input id='task_2' type='checkbox' name='task' value='task2' />
            <label htmlFor='task_2'>Repeat</label>
            <div>
              <button type='button'>Edit Repeat</button>
              <button type='button'>Delete Repeat</button>
            </div>
          </li>
        </ul>
      </section>
    </article>
    
  );
}

export default App;
