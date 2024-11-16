import React from "react";
import Rescard from "./Rescard";
import resList from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import Carousel from "./carousel.jsx";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListRes, setFilterdListRes] = useState([]);
  const [searchValue, setSearchValue] = useState(" ");
  console.log("body render");
  //   console.log(setSearchValue);
  const foodItems = [
    {
      name: "Samosa",
      image:
        "https://blog.pureindianfoods.com/wp-content/uploads/2018/10/indian-samosas-600x400.jpg",
    },
    {
      name: "Paneer Tikka",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2015/07/Restaurant-Style-Recipe-Paneer-Tikka.jpg",
    },
    {
      name: "Biryani",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg",
    },
    {
      name: "Dosa",
      image:
        "https://www.daringgourmet.com/wp-content/uploads/2023/06/Dosa-Recipe-3.jpg",
    },
    {
      name: "Chole Bhature",
      image:
        "https://i0.wp.com/kalimirchbysmita.com/wp-content/uploads/2019/10/Chole-Bhature-01.jpg?fit=1024%2C682&ssl=1",
    },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5930976&lng=77.3969121&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterdListRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-box"
          value={searchValue}
          placeholder="Enter restaurant name here....."
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) =>
              res?.info?.name?.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilterdListRes(filteredList);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 3.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div>
        <Carousel items={foodItems} interval={1000} />
      </div>
      <div className="res-container">
        {filteredListRes.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <Rescard resdata={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
