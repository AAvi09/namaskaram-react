import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine); // Initial state

  // Effect for setting up event listeners
  useEffect(() => {
    const handleOnline = () => {
      console.log("Went Online");
      setOnlineStatus(true);
    };
    const handleOffline = () => {
      console.log("Went Offline");
      setOnlineStatus(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return onlineStatus; // Return the current online status
};

export default useOnlineStatus;
