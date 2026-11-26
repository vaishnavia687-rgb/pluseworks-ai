
import { useState } from "react";

import SystemBanner from "./components/SystemBanner";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import TaskCard from "./components/TaskCard";
import TaskForm from "./components/TaskForm";

import "./App.css";

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Build Dashboard",
      description: "Create PulseWorks AI dashboard",
      priority: "High",
      status: "In Progress",
      dueDate: "2026-11-30"
    },
    {
      id: 2,
      title: "Create Login Page",
      description: "Design a secure login interface",
      priority: "Medium",
      status: "Pending",
      dueDate: "2026-12-02"
    }
  ]);

  function addTask(newTask) {
    setTasks([
      ...tasks,
      {
        ...newTask,
        id: Date.now()
      }
    ]);
  }

  return (
    <div className="app">

      <SystemBanner />

      <Navbar />

      <div className="dashboard-layout">

        <Sidebar />

        <main className="main-content">

          <h1>Dashboard</h1>
          <p>Welcome to your PulseWorks AI workspace.</p>

          <div className="dashboard-stats">

            <div className="stat-card">
              <h3>Total Tasks</h3>
              <h2>{tasks.length}</h2>
            </div>

            <div className="stat-card">
              <h3>In Progress</h3>
              <h2>
                {tasks.filter(t => t.status === "In Progress").length}
              </h2>
            </div>

            <div className="stat-card">
              <h3>Completed</h3>
              <h2>
                {tasks.filter(t => t.status === "Completed").length}
              </h2>
            </div>

          </div>

          <TaskForm onAddTask={addTask} />

          <h2>My Tasks</h2>

          <div className="task-list">

            {tasks.map(task => (
              <TaskCard key={task.id} task={task} />
            ))}

          </div>

        </main>

      </div>

    </div>
  );
}

export default App;
