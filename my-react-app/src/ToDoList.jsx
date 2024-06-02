import React, { useState } from 'react';

function ToDoList() {
 
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  function handleChangeInput(event) {
    setNewTask(event.target.value); // Lets you type in the box
  }

  function AddTask() {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  }

  function DeleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function MoveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function MoveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <div>
      <div className='to-do-list-header'>
        <h1>To-Do List</h1>
        <input type="text" placeholder='Enter a task' value={newTask} onChange={handleChangeInput} />
        <button className='set-new-task' onClick={AddTask}>Set New Task</button>
      </div>

      <ol className='to-do-list'>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className='text'>{task}</span>
            <button className='delete-button' onClick={() => DeleteTask(index)}>Delete</button>
            <button className='move-task-up-button' onClick={() => MoveTaskUp(index)}>Up</button>
            <button className='move-task-down-button' onClick={() => MoveTaskDown(index)}>Down</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList