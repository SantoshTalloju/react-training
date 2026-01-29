import RestaurantCard, {withVegLabel} from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { getAllRestaurants } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const onlineStatus = useOnlineStatus();

  const { setUserName, loggedInUser } = useContext(UserContext);

  const RestaurantCardWithVeg = withVegLabel(RestaurantCard);

  console.log('res list:', resData);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(getAllRestaurants);
    const json = await data.json();

    const allRestaurants =
      json?.data?.data?.cards[1].card.card.gridElements?.infoWithStyle
        .restaurants || [];

    setResData(allRestaurants);
    setFilteredRestaurants(allRestaurants);
  };

  const removeDuplicateById = (arr) => {
    return [...new Map(arr.map((item) => [item.id, item])).values()];
  };

  const handleBtnClick = () => {
    const filteredRestaurants = resData.filter(
      (resObj) => resObj.info.avgRating > 4.5
    );
    setResData(filteredRestaurants);
  };

  const searchData = () => {
    const filteredRes = resData.filter((resObj) => {
      return resObj?.info?.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
    setFilteredRestaurants(filteredRes);
  };

  if (onlineStatus === false) {
    return <h1>Looks like your'e offline. Check your internet connection.</h1>;
  }

  return resData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4 flex items-center">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="px-4 py-2 ml-2 bg-green-100 rounded-lg" onClick={searchData}>
            Search
          </button>
        </div>
        <div className="m-4 p-4">
          <button className="px-4 py-2 bg-gray-100" onClick={handleBtnClick}>
            {" "}
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>User Name:</label>
          <input
            type="text"
            className="border border-solid border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((resObj) => {
          return (
            <Link key={resObj.info.id} to={"/restaurants/" + resObj.info.id}>
              {resObj?.info?.veg ? <RestaurantCardWithVeg resData={resObj.info}/> : <RestaurantCard resData={resObj.info} />}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
