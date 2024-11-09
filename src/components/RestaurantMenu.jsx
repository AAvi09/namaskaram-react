import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { CDN_URL, MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

// MenuItemCard Component
const MenuItemCard = ({ item }) => {
  const {
    name,
    category,
    description,
    price,
    isVeg,
    isBestseller,
    ribbon,
    itemAttribute,
    ratings,
    imageId,
    cloudinaryImageId,
  } = item.card?.info;

  return (
    <div className="menu-item-card">
      <img
        src={imageId ? CDN_URL + imageId : "/path/to/placeholder/image.jpg"} // Conditional rendering
        // Replace with actual image server URL
        alt={name}
        className="item-image"
      />
      <div className="item-details">
        <div className="item-header">
          <h3 className="item-name">{name}</h3>
          {isBestseller && (
            <span className="bestseller-ribbon">{ribbon?.text}</span>
          )}
        </div>
        <p className="item-category">{category}</p>
        <p className="item-description">{description}</p>
        <p className="item-price">₹{(price / 100).toFixed(2)}</p>
        <p className={`veg-classifier ${isVeg ? "veg" : "non-veg"}`}>
          {itemAttribute?.vegClassifier}
        </p>
        {ratings?.aggregatedRating?.rating && (
          <p className="item-rating">
            Rating: {ratings.aggregatedRating.rating}
          </p>
        )}
      </div>
    </div>
  );
};

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  // console.log(params);
  useEffect(() => {
    // Check if resId exists before calling FetchData
    if (resId) {
      FetchData();
    }
  }, [resId]);
  const FetchData = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5930976&lng=77.3969121&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      const json = await data.json();
      console.log(json);
      setResInfo(json.data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };
  //   const { name } = resInfo?.cards?.[2].card?.card?.info;
  if (resInfo === null) {
    return <Shimmer />;
  }
  return (
    <div className="menu">
      <h1>{resInfo?.cards?.[2].card?.card?.info.name}</h1>
      <div>
        <img
          src={
            resInfo?.cards?.[2]?.card?.card?.info?.cloudinaryImageId
              ? CDN_URL + resInfo.cards[2].card.card.info.cloudinaryImageId
              : "/path/to/placeholder/image.jpg"
          } // Conditional rendering
          alt="Restaurant Image"
        />
      </div>
      <h3>{resInfo?.cards?.[2].card?.card?.info.cuisines.join(", ")}</h3>
      <h3>{resInfo?.cards?.[2].card?.card?.info.costForTwoMessage}</h3>
      <h2>Menu</h2>
      <div className="menu-items">
        {resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card?.itemCards?.map(
          (item, index) => (
            <MenuItemCard key={index} item={item} />
          )
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
