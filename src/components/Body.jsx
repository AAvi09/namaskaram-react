import React from "react";
import Rescard from "./Rescard";
import resList from "../utils/mockdata";

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {resList.map((restraunt) => (
          <Rescard key={restraunt.info.id} resdata={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
