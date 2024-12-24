import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
// import UserContext from "../../utils/UserContext";

it("Should render Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        {/* <UserContext.Provider> */}
        <Header />
        {/* </UserContext.Provider> */}
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByText("Login");

  //Assertion
  expect(loginButton).toBeInTheDocument();
});
