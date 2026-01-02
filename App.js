import React from "react";
import ReactDOM from "react-dom/client";
import resJsonData from "./restaurantsData.json";

// console.log("resJsonData:", resJsonData);

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - search
 *  - Restaurant container
 *      - Restaurant Card
 *          - image
 *          - Name, Star ratings, Cuisines, delivery time
 * Footer
 *  - copyright
 *  - Links
 *  - Address
 *  - Contact
 */

// const heading = React.createElement("h1", { id: "heading"}, "Welcome message from React!!!");
// const heading = React.createElement(
//     "h1",
//     {
//         id: "title",
//     },
//     "Heading 1"
// );
// const heading2 = React.createElement(
//     "h2",
//     {
//         id: "title",
//     },
//     "Heading 2"
// );
// const container = React.createElement(
//     "div",
//     {
//         id: "container",
//     },
//     [heading, heading2]
// );

//JSX - HTML like or XML like syntax
// Now heading === jsxHeadig

//This is React Element
// const jsxHeadig = (
// <h1 className="title">Welcome</h1>
// );

// const Title = () => {
//     return (
//         <h1>Title</h1>
//     )
// }

// //React functional component
// // Component inside another componnet  = Component Composition
// const HeadingComponent = () => {
//   return (
//     <div id="container">
//         {jsxHeadig}
//         <Title/>
//         {Title()}
//         <Title></Title>
//       <h1 className="heading">Functional component</h1>
//     </div>
//   );
// };

// const resObj = {
//   info: {
//     id: "671928",
//     name: "KFC",
//     cloudinaryImageId:
//       "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/6cec62e3-0e46-4568-b442-46ab91bfe078_671928.JPG",
//     locality: "7th Block",
//     areaName: "Koramangla",
//     costForTwo: "₹400 for two",
//     cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
//     avgRating: 4.2,
//     parentId: "547",
//     avgRatingString: "4.2",
//     totalRatingsString: "6.1K+",
//     sla: {
//       deliveryTime: 15,
//       lastMileTravel: 1.2,
//       serviceability: "SERVICEABLE",
//       slaString: "15-20 mins",
//       lastMileTravelString: "1.2 km",
//       iconType: "ICON_TYPE_EMPTY",
//     },
//     availability: {
//       nextCloseTime: "2026-01-03 03:00:00",
//       opened: true,
//     },
//     badges: {},
//     isOpen: true,
//     type: "F",
//     badgesV2: {
//       entityBadges: {
//         imageBased: {},
//         textBased: {},
//         textExtendedBadges: {},
//       },
//     },
//     aggregatedDiscountInfoV3: {
//       header: "50% OFF",
//       discountTag: "FLAT DEAL",
//     },
//     differentiatedUi: {
//       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       differentiatedUiMediaDetails: {
//         lottie: {},
//         video: {},
//       },
//     },
//     reviewsSummary: {},
//     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     restaurantOfferPresentationInfo: {},
//     externalRatings: {
//       aggregatedRating: {
//         rating: "--",
//       },
//     },
//     ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//   },
//   analytics: {
//     context: "seo-data-83563aca-a26e-4472-ac6f-bf5c05c6a880",
//   },
//   cta: {
//     link: "https://www.swiggy.com/city/bangalore/kfc-7th-block-koramangla-rest671928",
//     type: "WEBLINK",
//   },
// };

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart </li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ resData }) => {
//   console.log("name:", resData);
  return (
    <div className="res-card">
      <img
        className="res-logo"
        // src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/12/f16d7555-32d7-4437-8b68-0dfb6c530173_699984%20(1).jpg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
          resData.cloudinaryImageId
        }
        alt="Res Image"
      />
      <p>{resData.name}</p>
      <p>{resData.cuisines.join(", ")}</p>
      <p>{resData.avgRatingString} stars</p>
      <p>{resData.costForTwo}</p>
      <p>{resData.sla.deliveryTime} minutes</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resJsonData.map((resObj) => {
            return (
                <RestaurantCard key={resObj.info.id} resData={resObj.info} />
            )
        })}

        {/* <RestaurantCard resData = {resObj} /> */}
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

const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(jsxHeadig); // this renders react element

root.render(<AppLayout />); // this renders react component
