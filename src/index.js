import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const TASKS = [
  {id: 'task_0', value: 'task0', checked: true, name: 'Eat'},
  {id: 'task_1', value: 'task1', checked: false, name: 'Sleep'},
  {id: 'task_2', value: 'task2', checked: false, name: 'Repeat'}
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={TASKS}/>
  </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
