import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("should load button inside contact component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

test("should load input name inside Contact component", () => {
  render(<Contact />);

  const InputName = screen.getByPlaceholderText("name");

  expect(InputName).toBeInTheDocument();
});

test("should load 3 input boxes on the contact component", () => {
  render(<Contact />);
  const inputBoxes = screen.getAllByRole("textbox");
  console.log(inputBoxes.length);
  expect(inputBoxes.length).toBe(3);
});
