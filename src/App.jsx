
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import SystemBanner from "./components/SystemBanner";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Tasks from "./pages/Tasks";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

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
    setTasks((previousTasks) => [
      ...previousTasks,
      {
        ...newTask,
        id: Date.now()
      }
    ]);
  }

  return (
    <BrowserRouter>
      <div className="app">

        <SystemBanner />
        <Navbar />

        <div className="dashboard-layout">

          <Sidebar />

          <main className="main-content">

            <Routes>

              <Route
                path="/"
                element={<Navigate to="/tasks" replace />}
              />

              <Route
                path="/tasks"
                element={
                  <Tasks
                    tasks={tasks}
                    onAddTask={addTask}
                  />
                }
              />

              <Route
  path="/analytics"
  element={<Analytics tasks={tasks} />}
/>

              <Route
                path="/settings"
                element={<Settings />}
              />

            </Routes>

          </main>

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
