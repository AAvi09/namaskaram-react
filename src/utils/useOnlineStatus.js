import { useState, useEffect } from "react";
import React from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  //check if online
  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  }, []);

  //boolean value
  return onlineStatus;
};

export default useOnlineStatus;
