import { useEffect } from "react";
const RestaurantMenu = () => {
  useEffect(() => {
    FetchData();
  }, []);
  const FetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5930976&lng=77.3969121&restaurantId=98999&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
  };
  return (
    <div className="menu">
      <h1>Name of the restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Diet coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
