import { act, fireEvent, render, screen } from "@testing-library/react"
import Body from '../Body';
import MOCK_DATA from '../mocks/mockRestaurantListData.json';
import {BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom'

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

test("Should render the Body componnet with Search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchButton = screen.getByRole('button', {name: 'Search'})
  
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, {target: {value: "pizza"}});
  fireEvent.click(searchButton);

  const restautantCards = screen.getAllByTestId("restaurantCard");

  //screen should load 1 card
  expect(restautantCards.length).toBe(1);
});