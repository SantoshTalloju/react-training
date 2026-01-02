import RestaurantCard from "./RestaurantCard";
import mockData from "../utils/mockData.json";
import { useState } from "react";

const Body = () => {
    const [resData, setResData] = useState(mockData);

    const handleBtnClick = () => {
        const filteredRestaurants = resData.filter((resObj) => resObj.info.avgRating > 4.5);
        setResData(filteredRestaurants);
    }

    return (
      <div className="body">
        <div className="filter">
            <button className="filter_btn" onClick={handleBtnClick}> Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {resData.map((resObj) => {
              return (
                  <RestaurantCard key={resObj.info.id} resData={resObj.info} />
              )
          })}
        </div>
      </div>
    );
  };

  export default Body;