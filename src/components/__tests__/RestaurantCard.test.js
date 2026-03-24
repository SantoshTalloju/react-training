import { render, screen } from "@testing-library/react"
import RestaurantCard, { withVegLabel } from '../RestaurantCard';
import MOCK_DATA from '../mocks/resCardMock.json';
import '@testing-library/jest-dom';

test("Should render Restaurant card component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA}/>)

    const restaurantName = screen.getByText("Pizza Paradise");
    expect(restaurantName).toBeInTheDocument();
})

test("Should render RestaurantCard with Veg label using HOC", () => {
    // Create wrapped component
    const RestaurantCardWithVegLabel = withVegLabel(RestaurantCard);
  
    // Render it
    render(<RestaurantCardWithVegLabel resData={MOCK_DATA} />);
  
    // Check Veg label
    const vegLabel = screen.getByText("Veg");
    expect(vegLabel).toBeInTheDocument();
  
    // Check if original component is also rendered
    const restaurantName = screen.getByText("Pizza Paradise");
    expect(restaurantName).toBeInTheDocument();
  });