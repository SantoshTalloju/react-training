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
      <div className="res-card">
        <img
          className="res-logo"
          src={
            CDN_URL + cloudinaryImageId
          }
          alt="Res Image"
        />
        <p>{name}</p>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRatingString} stars</p>
        <p>{costForTwo}</p>
        <p>{sla.deliveryTime} minutes</p>
      </div>
    );
  };

  export default RestaurantCard;