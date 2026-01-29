import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
            key={item?.card?.info?.id}
          >
            <div className="w-11/12">
              <div className="py-2">
                <span>{item?.card?.info?.name}</span>
                <span> - ₹ {item?.card?.info?.price / 100}</span>
              </div>
              <p className="text-xs">{item?.card?.info?.description}</p>
            </div>
            <div className="w-3/12 p-2">
              <div className="absolute">
                <button className="p-2 mx-16 bg-black shadow-lg text-white">
                  Add +
                </button>
              </div>
              <img
                className="w-auto h-auto"
                src={CDN_URL + item.card.info.imageId}
                alt="Res Image"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
