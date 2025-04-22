
// to-do list app

import React, { useState } from 'react';

function ToDoList() {

    const [tasks, setTasks] = useState(["Eat breakfast", "Shower", "Walk Dog"]);  // 'tasks' - a list of thing to do (like 'eat breakfast'). 'newTask' - what youre typing into the input box
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {    // when you type in the input box, it updates newTask with what you typed
        setNewTask(event.target.value);

    }

    function AddTask() {    // when you click the Add button, if the input isnt empy, it adds the task to the list. Then, it clears the input box
        if(newTask.trim() !== "") {

        setTasks(t => [...t, newTask]);
        setNewTask("")}

    }
    function DeleteTask(index) {   // when you click Delete, it removes the task from the list
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);

    } 

    function MoveTaskUp(index) {   // moves the task up one spot in the list, if its not already at the top
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index -1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }

    function MoveTaskDown(index) {    // moves the yask one spot down, if its not at the bottom
        if (index < tasks.length - 1) {     // heres, its checking ;is this already at the bottom?'/ if its not at the bottom(index is smaller than the last index), then we can move it
            const updatedTasks = [...tasks];  // makes a copy of the current task list so we dont change the original directly
            [updatedTasks[index], updatedTasks[index + 1]] = [
            updatedTasks[index + 1],
            updatedTasks[index],
          ];
          setTasks(updatedTasks);   // this updates the state (tasks) with the new, reordered list. The page will re-render with the tasks in the new order
        }

    }

    return (
      <div className="to-do-list">
        <h1 className="to-go-heading"> To-Do-List</h1>
        <div>
          <input
            type="text"
            placeholder="Enter a task.."
            value={newTask}
            onChange={handleInputChange}
            className="to-do-input"
          />
          <button className="add-button to-do-btn" onClick={AddTask}>
            Add
          </button>
        </div>
        <ol className="to-do-ol">
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="delete-button to-do-btn"
                onClick={() => DeleteTask(index)}
              >
                Delete
              </button>
              <button
                className="move-button to-do-btn"
                onClick={() => MoveTaskUp(index)}
              >
                ⬆️
              </button>
              <button
                className="move-button to-do-btn"
                onClick={() => MoveTaskDown(index)}
              >
                ⬇️
              </button>
            </li>
          ))}
        </ol>
      </div>
    );

}

export default ToDoList;