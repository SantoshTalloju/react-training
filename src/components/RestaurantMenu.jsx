import { useCallback, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const { resInfo } = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);


  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;
  // const { itemCards } =
  //   resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  // console.log(
  //   "sections:",
  //   resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards
  // );

  const categories =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    const onClickItem = (i) => {
      setShowIndex(i);
    }

  // console.log("categories:", categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* <h2>Menu</h2>
      <ul>
        {itemCards.map((menuObj) => {
          return (
            <li key={menuObj.card.info.id}>
              {menuObj.card.info.name} - {"Rs."}
              {menuObj.card.info.price / 100}
            </li>
          );
        })}
      </ul> */}

      {/* categories accordian */}
      {/* controlled component */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          onClickItem={() => onClickItem(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
