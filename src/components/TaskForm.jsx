
import { useState } from "react";
import { taskSchema } from "../schemas/taskSchema";

function TaskForm({ onAddTask }) {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    status: "Pending",
    dueDate: ""
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const result = taskSchema.safeParse(formData);

    if (!result.success) {

      const errorMessages = {};

      result.error.issues.forEach((issue) => {
        errorMessages[issue.path[0]] = issue.message;
      });

      setErrors(errorMessages);
      return;
    }

    setErrors({});

    onAddTask(result.data);

    setFormData({
      title: "",
      description: "",
      priority: "Medium",
      status: "Pending",
      dueDate: ""
    });
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">

      <h2>Create New Task</h2>

      <label>Task Title</label>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Enter task title"
      />
      {errors.title && <p className="error">{errors.title}</p>}

      <label>Description</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Enter description"
      />
      {errors.description && <p className="error">{errors.description}</p>}

      <label>Priority</label>
      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <label>Status</label>
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <label>Due Date</label>
      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
      />
      {errors.dueDate && <p className="error">{errors.dueDate}</p>}

      <button type="submit">Create Task</button>

    </form>
  );
}

export default TaskForm;
