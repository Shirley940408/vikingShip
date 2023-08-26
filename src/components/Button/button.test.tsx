import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button, { ButtonProps, ButtonSize, ButtonType } from "./button";
const defaultProps = {
  onClick: jest.fn(),
};
const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: "customizedClass",
};
const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};
describe("test Button component", () => {
  it("Should show a correct default Button Component", () => {
    render(<Button {...defaultProps}>Nice</Button>);
    const element = screen.getByText("Nice") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-default");
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
    expect(element.disabled).toBeFalsy();
  });
  it("Should render the correct component based on different props", () => {
    render(<Button {...testProps}>Nice</Button>);
    const element = screen.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn-primary btn-lg customizedClass");
  });
  it("Should render <a></a> link when btnType equals link and href is provided", () => {
    render(
      <Button btnType={ButtonType.Link} href="http://vikingship">
        Link
      </Button>
    );
    const element = screen.getByText("Link");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("A");
  });
  it("Should render disabled button when disable is set to true", () => {
    render(<Button {...disabledProps}>Disabled</Button>);
    const element = screen.getByText("Disabled") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(defaultProps.onClick).not.toHaveBeenCalled();
  });
});
