import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/actions';
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskList = () => {
  // Select tasks from Redux store
  const tasks = useSelector((state) => state.tasks || []);
  // Get dispatch function to dispatch actions to Redux store
  const dispatch = useDispatch();

  return (
    // Container for the task list with a card-like appearance
    <div className="todo-card">
      {/* List of tasks */}
      <ul className="list-group">
        {/* Map through each task and render a list item for each */}
        {tasks.map((task) => (
          // Unique key for each list item
          <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
            {/* Task content with checkbox and text */}
            <div>
              {/* Checkbox to mark task as completed */}
              <input
                type="checkbox"
                checked={task.completed}
                // Dispatch action to toggle task completion status
                onChange={() => dispatch(toggleTask(task.id))}
              />
              {/* Task text with strike-through if completed */}
              <span
                style={{ marginLeft: '10px', textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
                // Dispatch action to toggle task completion status when clicked
                onClick={() => dispatch(toggleTask(task.id))}
              >
                {task.text}
              </span>
            </div>
            {/* Button to delete the task */}
            <button onClick={() => dispatch(deleteTask(task.id))} className="btn btn-danger btn-sm">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
