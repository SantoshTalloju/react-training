import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
    const {
      name,
      cuisines,
      avgRatingString,
      costForTwo,
      sla,
      cloudinaryImageId,
    } = resData;

    return (
      <div className="m-2 p-2 w-[250px] rounded-lg hover:bg-gray-200 bg-gray-100">
        <img
          className="rounded-lg"
          src={
            CDN_URL + cloudinaryImageId
          }
          alt="Res Image"
        />
        <p className="font-bold py-4 text-lg">{name}</p>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRatingString} stars</p>
        <p>{costForTwo}</p>
        <p>{sla.deliveryTime} minutes</p>
      </div>
    );
  };

// Higher order component
// input -> RestaurantCard -> RestaurantCardWithVegLabel
export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg"> Veg </label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}


export default RestaurantCard;