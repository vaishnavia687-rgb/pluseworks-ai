
function TaskCard({ task }) {
  return (
    <div className="task-card">

      <div className="task-header">
        <h3>{task.title}</h3>

        <span className={`priority ${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
      </div>

      <p>{task.description}</p>

      <div className="task-footer">
        <span>Status: {task.status}</span>
        <span>Due: {task.dueDate}</span>
      </div>

    </div>
  );
}

export default TaskCard;
