import { act, fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from '../RestaurantMenu';
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from '../mocks/mockRestaurantMenu.json';
import { Provider } from "react-redux";
import store from '../../utils/store';
import Header from '../Header';
import Cart from '../Cart';
import '@testing-library/jest-dom';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
})

test("Should load Restaurant menu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <RestaurantMenu />
          <Cart/>
        </Provider>
      </BrowserRouter>
    );
  });

  const accordianHeader = screen.getByText("Specialty Pizzas (2)");
  fireEvent.click(accordianHeader);

  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(2);

  const cartTextOnHeaderBeforeClickOnAdd = screen.getByText("Cart - (0 items)")
  expect(cartTextOnHeaderBeforeClickOnAdd).toBeInTheDocument();

  const addButtons = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addButtons[0]);
  fireEvent.click(addButtons[1]);

  const cartTextOnHeader = screen.getByText("Cart - (2 items)")
  expect(cartTextOnHeader).toBeInTheDocument();

  const cartItems = screen.getAllByTestId("foodItems");
  expect(cartItems.length).toBe(4);
  
  fireEvent.click(screen.getByRole('button',{ name: "Clear Cart"}));
  expect(screen.getAllByTestId("foodItems").length).toBe(2);

  expect(screen.getByText("Cart is empty. Add Items to the Cart!")).toBeInTheDocument();

});