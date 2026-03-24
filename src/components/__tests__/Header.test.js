import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux";
import store from '../../utils/store';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

test("Should render Header component with a Login button", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //const loginButton = screen.getByRole('button');
  //const loginButton = screen.getByText('Login');
  const loginButton = screen.getByRole('button', {name: "Login"});

  expect(loginButton).toBeInTheDocument();
});

test("Should render Header component with a Cart item", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
});

test("Should change Login button to Logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const loginButton = screen.getByRole('button', {name: "Login"});
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();
});