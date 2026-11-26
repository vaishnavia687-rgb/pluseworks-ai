
import { useState, useEffect } from "react";
import { Activity, Clock } from "lucide-react";

function SystemBanner() {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (
    <div className="system-banner">

      <div className="system-info">
        <Activity size={18} />

        <span>PulseWorks AI</span>

        <span className="status-dot"></span>

        <span>All Systems Operational</span>
      </div>

      <div className="system-time">
        <Clock size={16} />

        {currentTime.toLocaleString()}
      </div>

    </div>
  );
}

export default SystemBanner;
