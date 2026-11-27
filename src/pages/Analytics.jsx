
import { useEffect, useState } from "react";
import { fetchExternalTasks } from "../services/externalApi";

function Analytics({ tasks = [] }) {

  const [externalTasks, setExternalTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadTasks() {
      try {
        setLoading(true);
        setError("");

        const data = await fetchExternalTasks(controller.signal);

        setExternalTasks(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Something went wrong.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadTasks();

    return () => controller.abort();
  }, []);

  const completedTasks = tasks.filter(
    task => task.status === "Completed"
  ).length;

  return (
    <div className="analytics-page">

      <h1>Analytics Overview</h1>
      <p>Monitor your workspace performance.</p>

      <div className="dashboard-stats">

        <div className="stat-card">
          <h3>Total Tasks</h3>
          <h2>{tasks.length}</h2>
        </div>

        <div className="stat-card">
          <h3>Completed</h3>
          <h2>{completedTasks}</h2>
        </div>

        <div className="stat-card">
          <h3>External Tasks</h3>
          <h2>{externalTasks.length}</h2>
        </div>

      </div>

      <div className="analytics-card">

        <h2>External API Data</h2>

        {loading && <p>Loading external tasks...</p>}

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        {!loading && !error && (
          <div className="external-task-list">

            {externalTasks.map(task => (
              <div className="external-task" key={task.id}>

                <h3>{task.title}</h3>

                <span>
                  {task.completed ? "Completed" : "Pending"}
                </span>

              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default Analytics;
