// import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error-container">
      <div className="error-box">
        <h1>dhngg se use krle website😠😡👿</h1>
        <h1>nothing went wrong </h1>
        <h1>mein firr keh rha hun teri hi glti he⚔☠❌</h1>
        <h1>
          {err.status} : {err.statusText}
        </h1>
        <h1>{err.data}</h1>
      </div>
    </div>
  );
};

export default Error;
