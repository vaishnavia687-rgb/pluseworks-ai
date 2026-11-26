
import {
  LayoutDashboard,
  ListTodo,
  Users,
  Folder,
  Settings
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">

      <h3>Workspace</h3>

      <a href="#">
        <LayoutDashboard size={18} />
        Dashboard
      </a>

      <a href="#">
        <ListTodo size={18} />
        My Tasks
      </a>

      <a href="#">
        <Users size={18} />
        Team
      </a>

      <a href="#">
        <Folder size={18} />
        Files
      </a>

      <a href="#">
        <Settings size={18} />
        Settings
      </a>

    </aside>
  );
}

export default Sidebar;
