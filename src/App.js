import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import store from './redux/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container mb-2">
          <h1 className="text-center mb-4">To-Do List</h1>
          <nav>
            <ul className="nav nav-pills mb-4">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/todo" className="nav-link">To-Do List</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={
              <div className="todo-card">
                <TaskInput />
                <TaskList />
              </div>
            } />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
