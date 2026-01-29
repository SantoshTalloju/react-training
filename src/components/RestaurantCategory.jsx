import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, onClickItem}) => {

    console.log('show items:', showItems);

    const handleClick = () => {
        console.log('clicked');
        onClickItem();
    }

    return (
        <div>
            {/* Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data?.title} ({data.itemCards.length})</span>
                    <span className={`inline-block font-bold ${showItems ? '-rotate-90' : 'rotate-90'}`}>{'>'}</span>
                </div>
                 {/* Accordian Body */}
            {showItems && <ItemList items = {data.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;