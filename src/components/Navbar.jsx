
import { Bell, Search, User } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">

      <h2>PulseWorks AI</h2>

      <div className="nav-search">
        <Search size={18} />

        <input
          type="text"
          placeholder="Search tasks..."
        />
      </div>

      <div className="nav-profile">
        <Bell size={20} />
        <User size={22} />
        <span>Admin</span>
      </div>

    </nav>
  );
}

export default Navbar;
