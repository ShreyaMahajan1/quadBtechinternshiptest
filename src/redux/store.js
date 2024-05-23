import { createStore } from 'redux';
import tasksReducer from './reducers';

const persistedState = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : undefined;

const store = createStore(
  tasksReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  localStorage.setItem('tasks', JSON.stringify(store.getState()));
});

export default store;
