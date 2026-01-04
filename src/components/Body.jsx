import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { getAllRestaurants } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(getAllRestaurants);
    const json = await data.json();

    const allRestaurants = json?.data?.data?.cards[1].card.card.gridElements?.infoWithStyle.restaurants || [];
   
    setResData(allRestaurants);
    setFilteredRestaurants(allRestaurants);
  };

  const removeDuplicateById = (arr) => {
    return [...new Map(arr.map(item => [item.id, item])).values()];
  };

  const handleBtnClick = () => {
    const filteredRestaurants = resData.filter(
      (resObj) => resObj.info.avgRating > 4.5
    );
    setResData(filteredRestaurants);
  };

  const searchData = () => {
    const filteredRes = resData.filter((resObj) => {
      return resObj?.info?.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredRestaurants(filteredRes);
  };

  return resData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={searchData}>Search</button>
        </div>
        <button className="filter_btn" onClick={handleBtnClick}>
          {" "}
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((resObj) => {
          return <Link key={resObj.info.id} to={"/restaurants/"+resObj.info.id}><RestaurantCard resData={resObj.info} /></Link>
        })}
      </div>
    </div>
  );
};

export default Body;
