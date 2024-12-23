import React, { useState, useEffect } from "react";
import Rescard, { WithPromotedLabel } from "./Rescard";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import CarouselData from "./CarouselData.jsx";
import LocationDetector from "./LocationDetector.jsx";
import { useContext } from "react";
import UserContext from "../utils/UserContext.js";

const Body = () => {
  const [latitude, setLatitude] = useState(28.5930976); // Default latitude
  const [longitude, setLongitude] = useState(77.3969121); // Default longitude
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListRes, setFilterdListRes] = useState([]);
  const [searchValue, setSearchValue] = useState(""); // Initialize the searchValue state here

  const { loggedInUser, setUserInfo } = useContext(UserContext);

  console.log("Latitude:", latitude, "Longitude:", longitude);

  console.log(listOfRestaurants);

  const RescardWithLabel = WithPromotedLabel(Rescard);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData(latitude, longitude);
  }, [latitude, longitude]);

  const fetchData = async (lat, lng) => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterdListRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline. Please check your internet connection.
      </h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div>
        <LocationDetector
          onLocationUpdate={(lat, lng) => {
            setLatitude(lat);
            setLongitude(lng);
          }}
          onLocationManualUpdate={(lat, lng) => {
            setLatitude(lat);
            setLongitude(lng);
            return true; // Success case
          }}
        />
        <label>
          {" "}
          enter username :{" "}
          <input
            className="border border-black p-2 "
            value={loggedInUser}
            onChange={(e) => setUserInfo(e.target.value)}
          />
        </label>

        <CarouselData />
        {console.log("mein idhhr hun")}
      </div>
      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row items-center justify-center px-10 py-6 space-y-4 md:space-y-0 md:space-x-8">
        <input
          type="text"
          className="w-full md:w-80 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-transform transform hover:scale-105"
          value={searchValue}
          placeholder="Enter restaurant name here..."
          onChange={(e) => setSearchValue(e.target.value)} // Update state on input change
        />
        <button
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) =>
              res?.info?.name?.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilterdListRes(filteredList);
          }}
          className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-blue-600 hover:scale-110 transition-transform"
        >
          🔍 Search
        </button>
        <button
          className="px-6 py-2 bg-green-700 text-white rounded-full hover:bg-green-600 hover:scale-110 transition-transform"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 3.5
            );
            setFilterdListRes(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* Restaurant List Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10">
        {filteredListRes.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
            className="transform hover:scale-105 transition-transform"
          >
            {restaurant.info.promoted ? (
              <RescardWithLabel resdata={restaurant} />
            ) : (
              <Rescard resdata={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
