
import {
  ListTodo,
  BarChart3,
  Settings
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <h3>Workspace</h3>

      <NavLink to="/tasks">
        <ListTodo size={18} />
        Tasks
      </NavLink>

      <NavLink to="/analytics">
        <BarChart3 size={18} />
        Analytics
      </NavLink>

      <NavLink to="/settings">
        <Settings size={18} />
        Settings
      </NavLink>

    </aside>
  );
}

export default Sidebar;
