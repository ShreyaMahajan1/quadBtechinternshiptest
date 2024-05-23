import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskInput = () => {
  // State to manage the input value for the new task
  const [task, setTask] = useState('');
  // Get dispatch function to dispatch actions to Redux store
  const dispatch = useDispatch();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the task input is not empty
    if (task.trim()) {
      // Dispatch action to add a new task to Redux store
      dispatch(addTask(task));
      // Clear the task input field
      setTask('');
    }
  };

  return (
    // Form for adding a new task
    <form onSubmit={handleSubmit} className="mb-4">
      {/* Input field and button for adding a new task */}
      <div className="input-group">
        {/* Task input field */}
        <input
          type="text"
          className="form-control"
          value={task}
          // Update the task state as the user types
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        {/* Button to submit the form and add the task */}
        <button type="submit" className="btn btn-primary ms-2 rounded">
          Add
        </button>
      </div>
    </form>
  );
};

export default TaskInput;
