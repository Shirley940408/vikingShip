import React from "react";
import classNames from "classnames";

export enum AlertType {
  Success = "success",
  Default = "default",
  Danger = "danger",
  Warning = "warning",
}
interface BaseAlertProps {
  className?: string;
  altType?: AlertType;
  message: string;
  title?: string;
  onClose: () => void;
  showCloseButton?: boolean;
}

const Alert = (props: BaseAlertProps) => {
  const { message, className, altType, onClose, title, showCloseButton } =
    props;
  const classes = classNames("alt", className, {
    [`alt-${altType}`]: altType,
  });
  return (
    <div className={classes} data-testid="alert-container">
      {title && <h4>{title}</h4>}
      <p>{message}</p>
      {showCloseButton && (
        <button className="alt-button" onClick={onClose}>
          X
        </button>
      )}
    </div>
  );
};
Alert.defaultProps = {
  showCloseButton: true,
  altType: AlertType.Default,
  message: "This is an alert",
};

export default Alert;
