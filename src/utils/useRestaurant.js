import { useEffect, useState } from "react";
import React from "react";

const useRestaurantMenu = (resId) => {
  //fetch data
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5930976&lng=77.3969121&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );

      const json = await data.json();
      setResInfo(json.data);
    } catch (error) {
      console.error("somethiing went wrong");
    }
  };
  return resInfo;
};

export default useRestaurantMenu;
