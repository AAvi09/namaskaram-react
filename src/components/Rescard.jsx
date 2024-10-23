import React from "react";
import { CDN_URL } from "../utils/constants";
const Rescard = (props) => {
  const { resdata } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    sla,
    costForTwo,
  } = resdata?.info;
  return (
    <div className="res-card">
      <span className="tag">promoted</span>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + resdata.info.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString}⭐</h4>
      <h4>{sla.deliveryTime}🕰</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default Rescard;
