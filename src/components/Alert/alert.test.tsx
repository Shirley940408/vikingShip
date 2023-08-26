import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Alert, { AlertType } from "./alert";

describe("test alert component", () => {
  const defaultProps = {
    message: "This is default Alert",
    className: "customizedClass",
    onClose: jest.fn(),
  };
  const testProps = {
    altType: AlertType.Success,
    onClose: jest.fn(),
  };
  const disabledCloseProps = {
    showCloseButton: false,
    onClose: jest.fn(),
  };
  it("Should render default alert component", () => {
    render(<Alert {...defaultProps} />);
    const element = screen.getByTestId("alert-container");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("alt alt-default customizedClass");
    const alertMessage = screen.getByText("This is default Alert");
    expect(alertMessage).toBeInTheDocument();
    const closeButton = screen.getByRole("button", { name: "X" });
    expect(closeButton).toBeInTheDocument();
  });
  it("Should render different type of alert component", () => {
    render(<Alert {...testProps} />);
    const element = screen.getByTestId("alert-container");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("alt alt-success");
  });
  it("Should close the component while click close button", () => {
    render(<Alert {...testProps} />);
    const element = screen.getByTestId("alert-container");
    expect(element).toBeInTheDocument();
    const closeButton = screen.getByRole("button", { name: "X" });
    expect(closeButton).toBeInTheDocument();
    fireEvent.click(closeButton);
    expect(testProps.onClose).toBeCalled();
  });
  it("Should not show the 'X' button and no onClose method would be called when the showCloseButton props is set to false", () => {
    render(<Alert {...disabledCloseProps} />);
    const element = screen.getByTestId("alert-container");
    expect(element).toBeInTheDocument();
    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });
});
