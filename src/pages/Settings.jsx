
import { useState } from "react";

function Settings() {
  const [workspaceName, setWorkspaceName] =
    useState("PulseWorks AI");

  const [notifications, setNotifications] =
    useState(true);

  const [emailAlerts, setEmailAlerts] =
    useState(false);

  function handleSave(e) {
    e.preventDefault();
    alert("Settings saved successfully!");
  }

  return (
    <div className="settings-page">

      <h1>Workspace Settings</h1>
      <p>Manage your workspace preferences.</p>

      <form
        className="settings-card"
        onSubmit={handleSave}
      >

        <h2>General Settings</h2>

        <label>Workspace Name</label>

        <input
          type="text"
          value={workspaceName}
          onChange={(e) =>
            setWorkspaceName(e.target.value)
          }
        />

        <h2>Notification Settings</h2>

        <label className="settings-option">
          <input
            type="checkbox"
            checked={notifications}
            onChange={(e) =>
              setNotifications(e.target.checked)
            }
          />
          Enable Notifications
        </label>

        <label className="settings-option">
          <input
            type="checkbox"
            checked={emailAlerts}
            onChange={(e) =>
              setEmailAlerts(e.target.checked)
            }
          />
          Enable Email Alerts
        </label>

        <button type="submit">
          Save Settings
        </button>

      </form>

    </div>
  );
}

export default Settings;
