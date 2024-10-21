import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * -Logo
 * -new items
 * Body
 * - search
 * - Restraunt container
 *   - Restraunt card
 *   -----Img
 *   -----Name of res,star rating,cuisine,delivery time
 * Footer
 * - copyright
 * - links
 * - address
 * - contact
 */
const resObj = {
  info: {
    id: "151656",
    name: "Dev International",
    cloudinaryImageId: "enj3srsnhbltbom2ovvh",
    locality: "khajri road",
    areaName: "Mohan Nagar",
    costForTwo: "₹100 for two",
    cuisines: ["North Indian", "Chinese", "Fast Food", "Beverages"],
    avgRating: 4.3,
    parentId: "71556",
    avgRatingString: "4.3",
    totalRatingsString: "367",
    sla: {
      deliveryTime: 59,
      lastMileTravel: 12.3,
      serviceability: "SERVICEABLE",
      slaString: "55-60 mins",
      lastMileTravelString: "12.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-10-21 22:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹100 OFF",
      subHeader: "ABOVE ₹249",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {
    context: "seo-data-533f29a1-61fa-4b83-b6ae-81261dbd2fc6",
  },
  cta: {
    link: "https://www.swiggy.com/city/chhindwara/dev-international-khajri-road-mohan-nagar-rest151656",
    type: "WEBLINK",
  },
};
const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://thumbs.dreamstime.com/b/fast-food-logo-design-concepts-set-unique-ideas-pizza-kebab-burger-retro-elements-symbols-icons-46091401.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About </li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const Rescard = (props) => {
  const { resdata } = props;
  return (
    <div className="res-card">
      <span className="tag">promoted</span>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resdata.info.cloudinaryImageId
        }
      />
      <h3>{resdata.info.name}</h3>
      <h4>{resdata.info.cuisines.join(", ")}</h4>
      <h4>{resdata.info.avgRatingString}</h4>
      <h4>{resdata.info.sla.deliveryTime}</h4>
      <h4>{resdata.info.costForTwo}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        <Rescard resdata={resObj} />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
