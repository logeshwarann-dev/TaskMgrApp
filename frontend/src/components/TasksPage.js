import React, { useEffect, useState } from 'react';
import '../styles/TasksPage.css';

const TASKS_API_BASE_URL = process.env.REACT_APP_TASKS_SERVICE_URL;

function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem('token');
      const response = await fetch(`${TASKS_API_BASE_URL}/tasks`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const data = await response.json();
        setTasks(data.tasks);
      } else {
        alert('Failed to load tasks');
      }
    };

    fetchTasks();
  }, []);

  const handleCreateTask = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const response = await fetch(`${TASKS_API_BASE_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newTask),
    });

    if (response.ok) {
      const createdTask = await response.json();
      setTasks([...tasks, createdTask]);
      setNewTask({ title: '', description: '' });
    } else {
      alert('Failed to create task');
    }
  };

  const handleDeleteTask = async (taskId) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${TASKS_API_BASE_URL}/tasks/${taskId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.ok) {
      setTasks(tasks.filter(task => task.id !== taskId));
    } else {
      alert('Failed to delete task');
    }
  };

  return (
    <div className="tasks-container">
      <h2>Your Tasks</h2>
      {tasks === null || tasks.length === 0 ? (
        <p>No tasks available. Create a new task!</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      <form onSubmit={handleCreateTask}>
        <input
          type="text"
          placeholder="Task Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Task Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          required
        />
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}

export default TasksPage;
