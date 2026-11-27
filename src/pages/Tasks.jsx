
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";

function Tasks({ tasks, onAddTask }) {
  return (
    <div>
      <h1>Tasks</h1>
      <p>Manage and track your workspace tasks.</p>

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

      <TaskForm onAddTask={onAddTask} />

      <h2>My Tasks</h2>

      <div className="task-list">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>

    </div>
  );
}

export default Tasks;
